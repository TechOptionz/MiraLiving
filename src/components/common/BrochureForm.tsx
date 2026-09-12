"use client";

import React, { useMemo, useState } from "react";
import { registerSection, siteConfig } from "@/content/site-content";
import { AlertCircle, CheckCircle2, ChevronDown, Download, Loader2, Lock } from "lucide-react";

interface BrochureFormProps {
  idPrefix?: string;
  onSuccess?: () => void;
  darkVariant?: boolean;
}

type FieldName = "firstName" | "lastName" | "phone" | "email" | "budget" | "timeframe" | "message";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Registration / brochure request form.
 *
 * Fields are hairline-ruled rather than boxed: over the register section's
 * footage a grid of filled boxes reads like an admin panel, while a single
 * rule that lights up on focus keeps the section editorial. The same
 * component serves the light modal by swapping only the ink and rule colours.
 */
export default function BrochureForm({ idPrefix = "form", onSuccess, darkVariant = false }: BrochureFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    budget: "",
    timeframe: "",
    linkedInHoneypot: "" // Honeypot field for anti-spam
  });

  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the visitor starts correcting it.
    setErrors((prev) => (prev[name as FieldName] ? { ...prev, [name]: undefined } : prev));
  };

  const validate = () => {
    const next: Partial<Record<FieldName, string>> = {};
    if (!formData.firstName.trim()) next.firstName = "Please enter your first name.";
    if (!formData.lastName.trim()) next.lastName = "Please enter your last name.";
    if (!formData.email.trim()) next.email = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(formData.email.trim())) next.email = "Please enter a valid email address.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      setErrorMessage("Please complete the highlighted fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Delivery is handled by /api/brochure, which forwards the lead to the
    // CRM webhook. Success is only reported when the lead was actually
    // accepted - never on a network or configuration failure.
    try {
      const response = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrorMessage(
          result.message ||
            "We could not submit your enquiry right now. Please call our sales team directly."
        );
        return;
      }

      setStatus("success");
      if (onSuccess) {
        setTimeout(onSuccess, 2600);
      }
    } catch {
      setStatus("error");
      setErrorMessage("An error occurred. Please call our sales team directly.");
    }
  };

  // ----------------------------------------------------------------------
  // Field styling - one palette per variant, shared by input, select, textarea
  // ----------------------------------------------------------------------
  const ink = useMemo(
    () =>
      darkVariant
        ? {
            label: "text-white/70",
            field:
              "bg-transparent text-white placeholder:text-white/40 border-white/30 hover:border-white/55 focus:border-mira-sandLight",
            fieldError: "border-red-400/80 focus:border-red-300",
            option: "bg-mira-brownDeep text-white",
            rule: "bg-white/25",
            note: "text-white/60",
            asterisk: "text-mira-sandLight/80",
            placeholderInk: "text-white/50",
            errorInk: "text-red-300"
          }
        : {
            label: "text-mira-muted/75",
            field:
              "bg-transparent text-mira-charcoal placeholder:text-mira-muted/40 border-mira-border hover:border-mira-sandDark focus:border-mira-brown",
            fieldError: "border-red-500/80 focus:border-red-500",
            option: "bg-white text-mira-charcoal",
            rule: "bg-mira-border",
            note: "text-mira-muted/70",
            asterisk: "text-mira-brown/70",
            placeholderInk: "text-mira-muted/50",
            errorInk: "text-red-600"
          },
    [darkVariant]
  );

  const labelClass = `block text-[11px] font-sans uppercase tracking-eyebrow mb-2 ${ink.label}`;

  const fieldClass = (field?: FieldName) =>
    [
      "w-full border-0 border-b bg-transparent px-0 py-2.5 font-sans text-[15px] leading-snug",
      "transition-colors duration-300 focus:outline-none focus:ring-0",
      ink.field,
      field && errors[field] ? ink.fieldError : ""
    ].join(" ");

  const FieldError = ({ field }: { field: FieldName }) =>
    errors[field] ? (
      <p
        id={`${idPrefix}-${field}-error`}
        className={`mt-2 flex items-center gap-1.5 font-sans text-[12px] ${ink.errorInk}`}
      >
        <AlertCircle className="h-3 w-3 shrink-0" aria-hidden="true" />
        {errors[field]}
      </p>
    ) : null;

  const describedBy = (field: FieldName) => (errors[field] ? `${idPrefix}-${field}-error` : undefined);

  const Legend = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center gap-4">
      <span className={`text-[11px] font-sans uppercase tracking-eyebrow ${ink.label}`}>{children}</span>
      <span className={`h-px flex-1 ${ink.rule}`} aria-hidden="true" />
    </div>
  );

  // ----------------------------------------------------------------------
  // Success
  // ----------------------------------------------------------------------
  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`animate-fadeIn px-2 py-10 text-center sm:px-8 ${darkVariant ? "text-white" : "text-mira-charcoal"}`}
      >
        <div
          className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border ${
            darkVariant ? "border-mira-sandLight/40 text-mira-sandLight" : "border-mira-brown/30 text-mira-brown"
          }`}
        >
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.25} />
        </div>
        <p className={`text-[11px] font-sans uppercase tracking-eyebrow ${ink.label}`}>Registration received</p>
        <h3 className="mt-3 font-serif text-3xl font-light sm:text-4xl">Thank you</h3>
        <p
          className={`mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed ${
            darkVariant ? "text-white/70" : "text-mira-muted"
          }`}
        >
          {siteConfig.brochureUrl
            ? "Your brochure is ready below, and a member of our sales team will be in touch shortly."
            : "The brochure will be emailed to you shortly, along with a call from a member of our sales team."}
        </p>
        {siteConfig.brochureUrl && (
          <a
            href={siteConfig.brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 inline-flex items-center gap-3 px-9 py-4 font-sans text-[12px] uppercase tracking-eyebrow transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ${
              darkVariant
                ? "bg-mira-sandLight text-mira-charcoal hover:bg-white focus-visible:ring-white focus-visible:ring-offset-transparent"
                : "bg-mira-charcoal text-white hover:bg-mira-brownDeep focus-visible:ring-mira-brown focus-visible:ring-offset-mira-ground"
            }`}
          >
            <Download className="h-4 w-4" strokeWidth={1.5} />
            Download brochure (PDF)
          </a>
        )}
      </div>
    );
  }

  // ----------------------------------------------------------------------
  // Form
  // ----------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit} className="text-left" noValidate>
      {/* Honeypot field (hidden from view) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${idPrefix}-linkedin`}>LinkedIn Profile</label>
        <input
          type="text"
          id={`${idPrefix}-linkedin`}
          name="linkedInHoneypot"
          value={formData.linkedInHoneypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Legend>Your details</Legend>

      <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-firstName`} className={labelClass}>
            First name <span className={ink.asterisk}>*</span>
          </label>
          <input
            type="text"
            id={`${idPrefix}-firstName`}
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={describedBy("firstName")}
            className={fieldClass("firstName")}
            placeholder="John"
          />
          <FieldError field="firstName" />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-lastName`} className={labelClass}>
            Last name <span className={ink.asterisk}>*</span>
          </label>
          <input
            type="text"
            id={`${idPrefix}-lastName`}
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={describedBy("lastName")}
            className={fieldClass("lastName")}
            placeholder="Smith"
          />
          <FieldError field="lastName" />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClass}>
            Email <span className={ink.asterisk}>*</span>
          </label>
          <input
            type="email"
            id={`${idPrefix}-email`}
            name="email"
            autoComplete="email"
            inputMode="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy("email")}
            className={fieldClass("email")}
            placeholder="john@example.com"
          />
          <FieldError field="email" />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
            Phone
          </label>
          <input
            type="tel"
            id={`${idPrefix}-phone`}
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={formData.phone}
            onChange={handleChange}
            className={fieldClass()}
            placeholder="0400 000 000"
          />
        </div>
      </div>

      <div className="mt-11">
        <Legend>Your enquiry</Legend>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
        <div>
          <label htmlFor={`${idPrefix}-budget`} className={labelClass}>
            Budget
          </label>
          <div className="relative">
            <select
              id={`${idPrefix}-budget`}
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${fieldClass()} appearance-none pr-8 ${formData.budget ? "" : ink.placeholderInk}`}
            >
              <option value="" className={ink.option}>
                Select a range
              </option>
              {registerSection.budgetOptions.map((opt) => (
                <option key={opt} value={opt} className={ink.option}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown
              className={`pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 ${ink.label}`}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${idPrefix}-timeframe`} className={labelClass}>
            Purchasing timeframe
          </label>
          <div className="relative">
            <select
              id={`${idPrefix}-timeframe`}
              name="timeframe"
              value={formData.timeframe}
              onChange={handleChange}
              className={`${fieldClass()} appearance-none pr-8 ${formData.timeframe ? "" : ink.placeholderInk}`}
            >
              <option value="" className={ink.option}>
                Select a timeframe
              </option>
              {registerSection.timeframeOptions.map((opt) => (
                <option key={opt} value={opt} className={ink.option}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown
              className={`pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 ${ink.label}`}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${idPrefix}-message`} className={labelClass}>
            Message <span className={ink.note}>(optional)</span>
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className={`${fieldClass()} resize-none`}
            placeholder="Tell us about your apartment requirements…"
          />
        </div>
      </div>

      {errorMessage && (
        <p
          role="alert"
          className={`mt-8 flex items-start gap-2 font-sans text-xs leading-relaxed ${ink.errorInk}`}
        >
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {errorMessage}
        </p>
      )}

      <div className="mt-10">
        <button
          type="submit"
          disabled={status === "submitting"}
          className={`group flex w-full items-center justify-center gap-3 px-8 py-[1.125rem] font-sans text-[12px] uppercase tracking-eyebrow transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-70 ${
            darkVariant
              ? "bg-mira-sandLight text-mira-charcoal hover:bg-white focus-visible:ring-white focus-visible:ring-offset-transparent"
              : "bg-mira-charcoal text-white hover:bg-mira-brownDeep focus-visible:ring-mira-brown focus-visible:ring-offset-mira-ground"
          }`}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
              <span>Sending your request…</span>
            </>
          ) : (
            <>
              <span>Download the brochure</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </>
          )}
        </button>

        <p className={`mt-5 flex items-center justify-center gap-2 text-center font-sans text-[12px] ${ink.note}`}>
          <Lock className="h-3 w-3 shrink-0" strokeWidth={1.5} aria-hidden="true" />
          {registerSection.requiredNotice} · Confidential enquiry direct to the developer
        </p>
      </div>
    </form>
  );
}
