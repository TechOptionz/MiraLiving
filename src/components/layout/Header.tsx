"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/content/site-content";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openRegister } = useModal();

  // Pages that open on a full-bleed dark hero get the transparent header until scrolled.
  const overHero =
    pathname === "/" ||
    pathname === "/story" ||
    pathname === "/residences" ||
    pathname === "/location" ||
    pathname === "/team";

  useEffect(() => {
    /*
     * A sentinel does the watching instead of a scroll listener: the browser
     * reports the crossing itself, off the main thread, so nothing runs on the
     * scroll path at all. The old handler fired on every scroll event for the
     * whole page just to compare one number.
     */
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:50px;pointer-events:none";
    document.body.appendChild(sentinel);

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  const navLinks = [
    { name: "Story", href: "/story" },
    { name: "Residences", href: "/residences" },
    { name: "Location", href: "/location" },
    { name: "Team", href: "/team" },
  ];

  const headerBgClass = isScrolled || !overHero
    ? "bg-mira-ground/[0.97] border-b border-mira-border shadow-subtle text-mira-charcoal"
    : "bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white";

  const logoSrc = isScrolled || !overHero
    ? "/img/site/mira-logo-brown.svg"
    : "/img/site/mira-logo.svg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="relative z-50 inline-block focus:outline-none focus:ring-1 focus:ring-mira-teal">
          <div className="relative w-28 sm:w-36 h-12 flex items-center">
            <Image
              src={logoSrc}
              alt="Mira Living"
              width={144}
              height={48}
              priority
              className="object-contain transition-opacity duration-300"
            />
          </div>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-sans tracking-eyebrow uppercase transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "font-semibold text-mira-tealDark"
                    : isScrolled || !overHero
                    ? "text-mira-charcoal hover:text-mira-brown"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-mira-tealDark animate-fadeIn" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop Brochure CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={openRegister}
            className={`px-6 py-2.5 text-xs font-sans tracking-eyebrow uppercase transition-all duration-300 border ${
              isScrolled || !overHero
                ? "bg-mira-teal hover:bg-mira-tealDark border-mira-teal text-white shadow-subtle hover:shadow-card"
                : "bg-white/20 hover:bg-white text-white hover:text-mira-charcoal border-white/40"
            }`}
          >
            Download Brochure
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-mira-teal ${
              isScrolled || !overHero ? "text-mira-charcoal" : "text-white"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-20 bg-mira-ground border-t border-mira-border z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn"
        >
          <div className="space-y-6 pt-4">
            <p className="text-[12px] font-sans uppercase tracking-eyebrow text-mira-muted">
              Navigation
            </p>
            <nav className="flex flex-col space-y-5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-serif ${
                  pathname === "/" ? "text-mira-brown font-semibold" : "text-mira-charcoal"
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-serif ${
                    pathname === link.href ? "text-mira-brown font-semibold" : "text-mira-charcoal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-mira-border space-y-5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openRegister();
              }}
              className="w-full py-4 bg-mira-teal text-white font-sans text-xs tracking-eyebrow uppercase text-center shadow-subtle"
            >
              Download Brochure
            </button>

            <div className="pt-2 text-xs font-sans text-mira-muted space-y-2">
              <p className="font-semibold text-mira-charcoal">Enquiries:</p>
              {siteConfig.contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.tel}
                  className="flex items-center gap-2 text-mira-brown hover:text-mira-charcoal transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{contact.name} · {contact.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
