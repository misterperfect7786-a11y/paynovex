import React from "react";
import { Shield } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/70 shadow-sm backdrop-blur-md">
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
        <div className="flex gap-3">
          <button className="rounded-md bg-[#0B5FFF] px-4 py-2 text-white">Get Started</button>
          <button className="rounded-md border border-[#0B5FFF] px-4 py-2 text-[#0B5FFF]">
            Request Demo
          </button>
        </div>
      </nav>
    </header>
  );
}
