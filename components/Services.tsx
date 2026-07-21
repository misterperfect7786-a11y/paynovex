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
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-[#082567]">Enterprise Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="rounded-lg border p-6 shadow-sm">
              <h3 className="font-semibold">{service}</h3>
              <p className="mt-2 text-sm">
                Explore secure, scalable {service.toLowerCase()} for enterprise clients.
              </p>
              <button className="mt-4 rounded-md bg-[#0B5FFF] px-4 py-2 text-white">
                Explore Solution
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
