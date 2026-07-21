"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <img src="/paynovex-logo.png" alt="PAYNOVEX Logo" className="h-8" />

        <div className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#services" className="hover:text-[#0B5FFF]">
            Services
          </a>
          <a href="#apis" className="hover:text-[#0B5FFF]">
            APIs
          </a>
          <a href="#solutions" className="hover:text-[#0B5FFF]">
            Solutions
          </a>
          <a href="#pricing" className="hover:text-[#0B5FFF]">
            Pricing
          </a>
          <a href="#company" className="hover:text-[#0B5FFF]">
            Company
          </a>
          <a href="#contact" className="hover:text-[#0B5FFF]">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-md bg-[#0B5FFF] px-4 py-2 text-white md:inline-flex">
            Get Started
          </button>
          <button className="hidden rounded-md border border-[#0B5FFF] px-4 py-2 text-[#0B5FFF] md:inline-flex">
            Request Demo
          </button>
          <button
            className="inline-flex rounded-md border border-slate-200 bg-white/90 p-2 text-slate-900 shadow-sm transition hover:bg-white md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`md:hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden bg-white/95 transition-all duration-300`}>
        <div className="space-y-4 border-t border-slate-200 px-6 py-5">
          {[
            ["Services", "#services"],
            ["APIs", "#apis"],
            ["Solutions", "#solutions"],
            ["Pricing", "#pricing"],
            ["Company", "#company"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="block rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-100">
              {label}
            </a>
          ))}
          <div className="grid gap-3 pt-3">
            <button className="w-full rounded-2xl bg-[#0B5FFF] px-4 py-3 text-sm font-semibold text-white">Get Started</button>
            <button className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900">Request Demo</button>
          </div>
        </div>
      </div>
    </header>
  );
}
