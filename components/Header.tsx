"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "APIs", href: "#apis" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (element) {
    const headerOffset = 88;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
  }
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" onClick={(event) => handleNavClick(event, "#top")}
          className="flex items-center">
          <img src="/paynovex-logo.png" alt="PAYNOVEX Logo" className="h-8" />
        </a>

        <div className="hidden gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#0B5FFF]"
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-[#0B5FFF] px-4 py-2 text-white md:inline-flex"
            onClick={(event) => handleNavClick(event, "#contact")}
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="hidden rounded-md border border-[#0B5FFF] px-4 py-2 text-[#0B5FFF] md:inline-flex"
            onClick={(event) => handleNavClick(event, "#contact")}
          >
            Request Demo
          </a>
          <button
            className="inline-flex rounded-md border border-slate-200 bg-white/90 p-2 text-slate-900 shadow-sm transition hover:bg-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-white/95 transition-all duration-300`}
      >
        <div className="space-y-4 border-t border-slate-200 px-6 py-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-100"
              onClick={(event) => handleNavClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="grid gap-3 pt-3">
            <a
              href="#contact"
              className="w-full rounded-2xl bg-[#0B5FFF] px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={(event) => handleNavClick(event, "#contact")}
            >
              Get Started
            </a>
            <a
              href="#contact"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900"
              onClick={(event) => handleNavClick(event, "#contact")}
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
