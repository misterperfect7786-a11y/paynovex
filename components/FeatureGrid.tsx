import React from "react";

const features = [
  "Instant onboarding",
  "99.99% uptime",
  "Bank-grade security",
  "Real-time insights",
  "Flexible APIs",
  "24x7 support",
];

export default function FeatureGrid() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
            Platform capabilities
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            A modern stack for enterprise growth
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Unlock speed, security, and seamless scaling with PAYNOVEX’s platform, built for modern
            payments teams and service providers.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <img
            src="/feature-grid.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-10"
          />
          <div className="relative grid gap-6 p-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-[1.75rem] border border-slate-100 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{feature}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  Streamline workflows with enterprise-grade reliability, flexible APIs, and fast
                  time to market.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
