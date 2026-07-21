import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#082567] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">Ready to power your next payment experience?</h2>
        <p className="mt-4">
          Partner with PAYNOVEX to launch faster, scale safer, and grow smarter.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-md bg-white px-6 py-3 font-semibold text-[#082567]">
            Book a Call
          </button>
          <button className="rounded-md border border-white px-6 py-3">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
