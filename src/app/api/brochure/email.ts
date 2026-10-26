/**
 * Lead notification email for the brochure form.
 *
 * Styled after the site: warm ground, brown ink, serif headings and
 * hairline-ruled sections like the form itself. Mail clients only honour
 * table layout and inline styles, so the theme is expressed that way, with
 * Georgia / Arial standing in for Cormorant and Poppins.
 */

export interface BrochureLead {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  budget: string;
  timeframe: string;
}

export interface LeadContext {
  submittedAt: string;
}

export const FIELD_LABELS: Record<keyof BrochureLead, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  budget: "Budget",
  timeframe: "Purchasing timeframe",
  message: "Message",
};

/** Matches the `contentId` of the inline logo attachment sent with the email. */
export const LOGO_CONTENT_ID = "mira-logo";

const C = {
  page: "#F6F1EA",
  card: "#FBF8F3",
  rule: "#E8DFD5",
  brown: "#746355",
  brownDeep: "#3D322B",
  charcoal: "#241E1A",
  muted: "#6B5D52",
  sand: "#E9DCCF",
};

const SERIF = "Georgia,'Times New Roman',serif";
const SANS = "Arial,Helvetica,sans-serif";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function link(href: string, label: string): string {
  return `<a href="${escapeHtml(href)}" style="color:${C.brown};text-decoration:underline;word-break:break-all;">${escapeHtml(label)}</a>`;
}

const notProvided = `<span style="color:${C.muted};font-style:italic;">Not provided</span>`;

function row(label: string, valueHtml: string): string {
  const cell = `padding:12px 0;border-bottom:1px solid ${C.rule};vertical-align:top;font-family:${SANS};`;
  return (
    `<tr>` +
    `<td width="170" style="${cell}width:170px;padding-right:16px;font-size:11px;letter-spacing:1.6px;text-transform:uppercase;color:${C.muted};">${escapeHtml(label)}</td>` +
    `<td style="${cell}font-size:15px;line-height:1.55;color:${C.charcoal};white-space:pre-wrap;">${valueHtml || notProvided}</td>` +
    `</tr>`
  );
}

function section(title: string, rows: string): string {
  return (
    `<tr><td style="padding:32px 40px 0;">` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">` +
    `<tr><td style="padding-bottom:6px;border-bottom:1px solid ${C.sand};font-family:${SANS};font-size:11px;letter-spacing:2.4px;text-transform:uppercase;color:${C.brown};">${escapeHtml(title)}</td></tr>` +
    `</table>` +
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;table-layout:fixed;">${rows}</table>` +
    `</td></tr>`
  );
}

function button(href: string, label: string, primary: boolean): string {
  const style = primary
    ? `background:${C.charcoal};color:#FFFFFF;border:1px solid ${C.charcoal};`
    : `background:transparent;color:${C.charcoal};border:1px solid ${C.brown};`;
  return (
    `<td style="padding:0 6px 8px;">` +
    `<a href="${escapeHtml(href)}" style="${style}display:inline-block;padding:13px 22px;font-family:${SANS};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-decoration:none;">${escapeHtml(label)}</a>` +
    `</td>`
  );
}

export function buildLeadEmail(lead: BrochureLead, ctx: LeadContext): { html: string; text: string } {
  const fullName = `${lead.firstName} ${lead.lastName}`;
  const replyHref = `mailto:${lead.email}?subject=${encodeURIComponent("Your MIRA Living brochure")}`;
  const telHref = lead.phone ? `tel:${lead.phone.replace(/[^\d+]/g, "")}` : "";
  const v = (value: string) => escapeHtml(value);

  const contactRows =
    row(FIELD_LABELS.firstName, v(lead.firstName)) +
    row(FIELD_LABELS.lastName, v(lead.lastName)) +
    row(FIELD_LABELS.email, link(`mailto:${lead.email}`, lead.email)) +
    row(FIELD_LABELS.phone, lead.phone ? link(telHref, lead.phone) : "");

  const enquiryRows =
    row(FIELD_LABELS.budget, v(lead.budget)) +
    row(FIELD_LABELS.timeframe, v(lead.timeframe)) +
    row(FIELD_LABELS.message, v(lead.message));

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>New brochure request – ${v(fullName)}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;">${v(fullName)} requested the MIRA Living brochure${lead.timeframe ? ` · ${v(lead.timeframe)}` : ""}.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.page};border-collapse:collapse;">
<tr><td align="center" style="padding:32px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:${C.card};border:1px solid ${C.rule};border-collapse:collapse;">

<tr><td align="center" style="padding:40px 40px 28px;border-bottom:1px solid ${C.rule};">
<img src="cid:${LOGO_CONTENT_ID}" width="132" height="68" alt="MIRA Living" style="display:block;border:0;width:132px;height:68px;">
</td></tr>

<tr><td align="center" style="padding:36px 40px 0;">
<p style="margin:0;font-family:${SANS};font-size:11px;letter-spacing:3px;text-transform:uppercase;color:${C.brown};">New brochure request</p>
<h1 style="margin:14px 0 0;font-family:${SERIF};font-size:34px;line-height:1.2;font-weight:normal;color:${C.charcoal};">${v(fullName)}</h1>
<p style="margin:10px 0 0;font-family:${SANS};font-size:13px;color:${C.muted};">${v(ctx.submittedAt)} (Brisbane time)</p>
</td></tr>

<tr><td align="center" style="padding:26px 34px 0;">
<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"><tr>
${button(replyHref, `Reply to ${lead.firstName}`, true)}${telHref ? button(telHref, `Call ${lead.phone}`, false) : ""}
</tr></table>
</td></tr>

${section("Contact details", contactRows)}
${section("Their enquiry", enquiryRows)}

<tr><td style="padding:36px 40px 0;"></td></tr>
<tr><td align="center" style="background:${C.brownDeep};padding:22px 40px;font-family:${SANS};font-size:12px;line-height:1.6;color:#E9DCCF;">
Sent from the brochure form on <a href="https://miraliving.com.au" style="color:#E9DCCF;text-decoration:none;">miraliving.com.au</a>.<br>Hitting reply goes straight to ${v(lead.email)}.
</td></tr>

</table>
</td></tr>
</table>
</body>
</html>`;

  const text = [
    `New brochure request – ${fullName}`,
    "",
    "CONTACT DETAILS",
    ...(["firstName", "lastName", "email", "phone"] as const).map((k) => `${FIELD_LABELS[k]}: ${lead[k] || "Not provided"}`),
    "",
    "THEIR ENQUIRY",
    ...(["budget", "timeframe", "message"] as const).map((k) => `${FIELD_LABELS[k]}: ${lead[k] || "Not provided"}`),
    "",
    `Submitted: ${ctx.submittedAt} (Brisbane time)`,
    "",
    `Reply to this email to respond to ${lead.firstName} directly.`,
  ].join("\n");

  return { html, text };
}
