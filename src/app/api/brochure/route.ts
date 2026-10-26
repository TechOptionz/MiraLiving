import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildLeadEmail, FIELD_LABELS, LOGO_CONTENT_ID, type BrochureLead } from "./email";
import { LOGO_PNG_BASE64 } from "./logo";

export type { BrochureLead };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FROM_ADDRESS = "MIRA Living <enquiries@miraliving.com.au>";

// Generous for a real enquiry, small enough that a bot cannot use the form
// to push a novel through our inbox.
const MAX_LENGTH: Record<keyof BrochureLead, number> = {
  firstName: 80,
  lastName: 80,
  phone: 40,
  email: 254,
  message: 2000,
  budget: 120,
  timeframe: 120,
};
function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function recipients(): string[] {
  return (process.env.BROCHURE_RECIPIENTS ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter((address) => EMAIL_PATTERN.test(address));
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Malformed request." },
      { status: 400 }
    );
  }

  // Honeypot: accept and discard silently so the bot sees a normal response.
  if (asString(payload.linkedInHoneypot)) {
    return NextResponse.json({ ok: true });
  }

  const lead: BrochureLead = {
    firstName: asString(payload.firstName),
    lastName: asString(payload.lastName),
    phone: asString(payload.phone),
    email: asString(payload.email),
    message: asString(payload.message),
    budget: asString(payload.budget),
    timeframe: asString(payload.timeframe),
  };

  if (!lead.firstName || !lead.lastName || !lead.email) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields (*)." },
      { status: 422 }
    );
  }

  if (!EMAIL_PATTERN.test(lead.email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const tooLong = (Object.keys(MAX_LENGTH) as Array<keyof BrochureLead>).find(
    (key) => lead[key].length > MAX_LENGTH[key]
  );
  if (tooLong) {
    return NextResponse.json(
      {
        ok: false,
        message: `${FIELD_LABELS[tooLong]} is too long (maximum ${MAX_LENGTH[tooLong]} characters).`,
      },
      { status: 422 }
    );
  }

  const context = {
    submittedAt: new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Brisbane",
      dateStyle: "full",
      timeStyle: "short",
    }).format(new Date()),
  };

  // Log every valid lead server-side so nothing is lost even if email
  // delivery is misconfigured or Resend is temporarily unreachable.
  console.info("[brochure] lead received", {
    ...lead,
    ...context,
    receivedAt: new Date().toISOString(),
  });

  const apiKey = process.env.RESEND_API_KEY;
  const to = recipients();

  if (!apiKey || to.length === 0) {
    // Email not configured: the visitor still gets the brochure and the lead
    // stays in the server log above. `delivered: false` tells the form not
    // to promise a call back. Once configured, a failed send below is still
    // reported as an error, never as a success.
    console.warn(
      "[brochure] RESEND_API_KEY or BROCHURE_RECIPIENTS is not set - the lead above is logged only, not emailed."
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  const { html, text } = buildLeadEmail(lead, context);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to,
      replyTo: lead.email,
      // Strip line breaks so the name cannot inject extra headers.
      subject: `New brochure request – ${lead.firstName} ${lead.lastName}`.replace(/[\r\n]+/g, " "),
      html,
      text,
      attachments: [
        {
          filename: "mira-living-logo.png",
          content: LOGO_PNG_BASE64,
          contentType: "image/png",
          contentId: LOGO_CONTENT_ID,
        },
      ],
    });

    if (error) {
      throw new Error(`Resend responded: ${error.name} - ${error.message}`);
    }
  } catch (error) {
    console.error("[brochure] email delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not submit your enquiry right now. Please call our sales team directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
