import React from "react";

export default function Services() {
  const services = [
    "Recharge Services",
    "Banking Services",
    "Payment Solutions",
    "Travel Services",
    "Software Development",
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-slate-950 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">
              Modern fintech services
            </p>
            <h2 id="services-heading" className="mt-3 text-3xl font-bold">
              Enterprise Services
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300 md:text-right">
            Build secure, scalable payment flows for recharge, travel, banking, and partner
            networks.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{service}</h3>
              <p className="mt-4 text-sm text-slate-300">
                Explore secure, scalable {service.toLowerCase()} for enterprise clients.
              </p>
              <button className="mt-6 inline-flex rounded-full border border-slate-400/20 bg-white/5 px-5 py-3 text-sm text-white transition group-hover:border-sky-300/50 group-hover:bg-sky-300/10">
                Explore Solution
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
