import { NextResponse } from "next/server";

export interface BrochureLead {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  budget: string;
  timeframe: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
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

  const webhookUrl = process.env.BROCHURE_WEBHOOK_URL;

  // Log every valid lead server-side so nothing is lost even if the webhook
  // is misconfigured or the CRM is temporarily unreachable.
  console.info("[brochure] lead received", {
    ...lead,
    receivedAt: new Date().toISOString(),
  });

  if (!webhookUrl) {
    // Deliberately a failure, not a silent success: telling a buyer the sales
    // team will be in touch when nothing was delivered is worse than an error.
    console.error(
      "[brochure] BROCHURE_WEBHOOK_URL is not set - the lead above was not delivered to the CRM."
    );
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not submit your enquiry right now. Please call our sales team directly.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.BROCHURE_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.BROCHURE_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        ...lead,
        source: "miraliving.com.au brochure form",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`CRM responded ${response.status}`);
    }
  } catch (error) {
    console.error("[brochure] delivery to CRM failed", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not submit your enquiry right now. Please call our sales team directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
