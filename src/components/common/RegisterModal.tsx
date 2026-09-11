"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import BrochureForm from "./BrochureForm";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { X } from "lucide-react";

export default function RegisterModal() {
  const { isRegisterOpen, closeRegister } = useModal();

  // Traps Tab inside the dialog, closes on Escape, locks background scroll and
  // returns focus to whatever opened the modal.
  const panelRef = useFocusTrap<HTMLDivElement>(isRegisterOpen, closeRegister);

  if (!isRegisterOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-sm transition-opacity animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0"
        onClick={closeRegister}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-mira-ground border border-mira-border shadow-float z-10 max-h-[90vh] overflow-y-auto p-6 sm:p-10 focus:outline-none"
      >
        <button
          onClick={closeRegister}
          className="absolute top-5 right-5 p-2 text-mira-muted hover:text-mira-charcoal transition-colors rounded-full"
          aria-label="Close registration modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <span className="text-xs font-sans tracking-eyebrow uppercase text-mira-brown mb-2 block font-medium">
            Exclusive Preview
          </span>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif text-mira-charcoal font-normal">
            Download the Brochure
          </h2>
          <p className="text-sm font-sans text-mira-muted mt-2 max-w-md mx-auto leading-relaxed">
            Register now to download the Mira Living brochure and be amongst the first to experience Bargara’s most exclusive oceanfront residences.
          </p>
        </div>

        <BrochureForm idPrefix="modal" onSuccess={closeRegister} />
      </div>
    </div>
  );
}
