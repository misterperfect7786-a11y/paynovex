"use client";
import React from "react";
import { Shield } from "lucide-react";

const highlights = [
  { label: "99.99% uptime", value: "Trusted availability" },
  { label: "500+ merchants", value: "Growing partner network" },
  { label: "24x7 support", value: "Always on assistance" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#082567] via-[#0B5FFF] to-[#6B2EFF] pb-24 pt-32 text-white">
      <img
        src="/pattern-dots.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-48 w-48 opacity-20"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
            Built for India’s fastest enterprises
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            India’s Complete Digital Commerce & FinTech Platform
          </h1>
          <p className="max-w-2xl text-lg text-white/90">
            PAYNOVEX empowers businesses with secure payments, recharge, banking APIs, travel
            booking, and enterprise-grade fintech solutions on one intelligent platform.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#082567] shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5">
              Get Started
            </button>
            <button className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/15">
              Request Demo
            </button>
          </div>
          <div className="grid gap-3 text-sm text-white/90 sm:grid-cols-2">
            {[
              "Enterprise Security",
              "Fast API Integrations",
              "White-Label Ready",
              "Multi-Service Infrastructure",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 rounded-3xl bg-white/10 px-4 py-3">
                <Shield className="h-4 w-4 text-white" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
            <img
              src="/hero-illustration.svg"
              alt="Illustration of PAYNOVEX dashboard and fintech services"
              className="w-full rounded-[1.75rem]"
            />
          </div>
          <div className="absolute -bottom-10 left-6 rounded-3xl bg-white/10 px-5 py-4 text-sm text-white shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <p className="font-semibold">Trusted by leading merchants across India.</p>
            <p className="mt-2 text-slate-100/80">
              Secure settlement, compliance, and seamless checkout.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-6">
        <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-slate-950/15 backdrop-blur-xl sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl bg-white/95 p-5 text-slate-950">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="mt-3 text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
