"use client";

import React, { useState } from "react";
import { registerSection } from "@/content/site-content";
import { CheckCircle2, Download, Loader2 } from "lucide-react";

interface BrochureFormProps {
  idPrefix?: string;
  onSuccess?: () => void;
  darkVariant?: boolean;
}

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

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.linkedInHoneypot) {
      console.warn("Spam submission detected via honeypot.");
      setStatus("success");
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setErrorMessage("Please complete all required fields (*).");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate API submission / CRM dispatch
    // TODO: connect to client CRM/email dispatch endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An error occurred. Please call our sales team directly.");
    }
  };

  if (status === "success") {
    return (
      <div className={`p-8 rounded-sm text-center border ${darkVariant ? "bg-mira-brownDeep/90 border-mira-sand/30 text-mira-sandLight" : "bg-white/95 border-mira-border text-mira-charcoal"}`}>
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-mira-teal/20 flex items-center justify-center text-mira-tealDark">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif font-normal mb-2">Registration Received</h3>
        <p className="text-sm font-sans text-mira-muted mb-6 leading-relaxed max-w-md mx-auto">
          Thank you for registering your interest in Mira Living. A member of our sales team will be in touch shortly.
        </p>
        <a
          href="/img/site/Sold-Properties-Mira-Living-4.webp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-mira-teal hover:bg-mira-tealDark text-white text-xs font-sans tracking-eyebrow uppercase transition-colors rounded-sm"
        >
          <Download className="w-4 h-4" />
          Download Overview (PDF Ready)
        </a>
      </div>
    );
  }

  const inputClass = `w-full px-4 py-3 text-sm font-sans rounded-none border transition-all focus:outline-none focus:ring-1 focus:ring-mira-brown ${
    darkVariant
      ? "bg-mira-brownDeep/50 border-mira-borderDark/40 text-mira-sandLight placeholder-mira-sand/50 focus:border-mira-sand"
      : "bg-white/90 border-mira-border text-mira-charcoal placeholder-mira-muted/60 focus:border-mira-brown"
  }`;

  const labelClass = `block text-xs font-sans uppercase tracking-eyebrow mb-1.5 font-medium ${
    darkVariant ? "text-mira-sand/90" : "text-mira-muted"
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}-firstName`} className={labelClass}>
            First Name *
          </label>
          <input
            type="text"
            id={`${idPrefix}-firstName`}
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass}
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-lastName`} className={labelClass}>
            Last Name *
          </label>
          <input
            type="text"
            id={`${idPrefix}-lastName`}
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
            Phone
          </label>
          <input
            type="tel"
            id={`${idPrefix}-phone`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="0400 000 000"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClass}>
            Email *
          </label>
          <input
            type="email"
            id={`${idPrefix}-email`}
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}-budget`} className={labelClass}>
            What is your budget?
          </label>
          <select
            id={`${idPrefix}-budget`}
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Budget</option>
            {registerSection.budgetOptions.map((opt) => (
              <option key={opt} value={opt} className="text-mira-charcoal bg-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-timeframe`} className={labelClass}>
            Purchasing Timeframe?
          </label>
          <select
            id={`${idPrefix}-timeframe`}
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select Timeframe</option>
            {registerSection.timeframeOptions.map((opt) => (
              <option key={opt} value={opt} className="text-mira-charcoal bg-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelClass}>
          Message (Optional)
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell us about your apartment requirements..."
        />
      </div>

      {errorMessage && (
        <p className="text-red-500 text-xs font-sans mt-1">{errorMessage}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-4 px-8 bg-mira-teal hover:bg-mira-tealDark disabled:opacity-75 text-white font-sans text-xs tracking-eyebrow uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-subtle hover:shadow-card active:scale-[0.99]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Download Brochure</span>
          )}
        </button>
        <p className="text-[11px] text-center mt-3 text-mira-muted font-sans">
          {registerSection.requiredNotice} · Confidential enquiry direct to developer
        </p>
      </div>
    </form>
  );
}
