import React from "react";
import type { Metadata } from "next";
import { privacyPolicyContent, siteConfig } from "@/content/site-content";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Mira Living, 25–27 The Esplanade, Bargara QLD 4670. Learn how personal information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-mira-ground">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Title & Metadata */}
        <div className="border-b border-mira-border pb-8 mb-10 space-y-3">
          <span className="text-xs font-sans tracking-eyebrow uppercase text-mira-brown block font-medium">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-mira-charcoal font-light">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap gap-6 text-xs font-sans text-mira-muted pt-2">
            <span><strong>Last updated:</strong> {privacyPolicyContent.lastUpdated}</span>
            <span><strong>Project Address:</strong> {privacyPolicyContent.projectAddress}</span>
          </div>
          <p className="text-sm font-sans text-mira-charcoal leading-relaxed pt-2">
            This Privacy Policy outlines how we collect, use, disclose and protect your personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-sm sm:text-base font-sans text-mira-charcoal/90 leading-relaxed">
          {privacyPolicyContent.sections.map((section) => (
            <section key={section.num} className="space-y-3 pt-2">
              <h2 className="text-xl sm:text-2xl font-serif text-mira-charcoal font-medium">
                {section.title}
              </h2>

              {section.lead && (
                <p className="text-mira-muted font-light">{section.lead}</p>
              )}

              {section.items && (
                <ul className="list-disc pl-6 space-y-1.5 text-mira-muted font-light">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <p className="text-mira-muted font-light pt-1">{section.extra}</p>
              )}

              {section.content && (
                <p className="text-mira-muted font-light whitespace-pre-line">{section.content}</p>
              )}

              {section.num === 10 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {siteConfig.contacts.map((contact) => (
                    <div key={contact.name} className="p-5 bg-white border border-mira-border space-y-1">
                      <p className="font-semibold text-mira-charcoal">{contact.name}</p>
                      <a
                        href={contact.tel}
                        className="inline-flex items-center gap-2 text-mira-tealDark hover:underline text-sm font-medium"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{contact.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
