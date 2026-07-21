"use client";
import React from "react";
import { Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#082567] via-[#0B5FFF] to-[#6B2EFF] pb-20 pt-32 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold md:text-6xl">
            India’s Complete Digital Commerce & FinTech Platform
          </h1>
          <p className="mt-6 text-lg">
            PAYNOVEX empowers businesses with secure digital payments, B2B distribution, white-label
            fintech solutions, recharge services, banking APIs, travel booking, payment gateway
            solutions, and custom software from one intelligent platform.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="rounded-md bg-white px-6 py-3 font-semibold text-[#082567]">
              Get Started
            </button>
            <button className="rounded-md border border-white px-6 py-3 text-white">
              Request Demo
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {[
              "Enterprise Security",
              "Fast API Integrations",
              "White-Label Ready",
              "Multi-Service Infrastructure",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <Shield className="h-4 w-4" /> {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
