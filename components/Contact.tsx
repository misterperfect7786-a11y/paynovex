import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#081d4f] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">
              Let’s build together
            </p>
            <h2 className="text-3xl font-bold">Ready to power your next payment experience?</h2>
            <p className="max-w-2xl text-sm text-slate-200/90">
              Partner with PAYNOVEX TECHNOLOGIES PRIVATE LIMITED to launch faster, scale safer, and
              grow smarter with secure, API-first fintech infrastructure.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Contact</p>
                <p className="mt-3 text-base font-semibold text-white">+91 75630 43033</p>
                <p className="mt-1 text-sm text-slate-300">info@paynovex.in</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Visit</p>
                <p className="mt-3 text-base font-semibold text-white">www.paynovex.in</p>
                <p className="mt-1 text-sm text-slate-300">
                  Plot No. N6/454, 2nd Floor, Saffire Building, IRC Village, Nayapalli, Bhubaneswar
                  – 751015, Odisha, India
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-[1.5rem] bg-slate-900/80 p-8 text-white shadow-lg sm:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">Reach out today</p>
              <h3 className="mt-3 text-2xl font-semibold">
                Let’s start your digital payments journey.
              </h3>
              <p className="mt-4 text-sm text-slate-300">
                Our team is ready to help you integrate, launch, and scale with confidence.
              </p>
            </div>
            <div className="grid gap-3">
              <button className="rounded-full bg-sky-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                Book a Call
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm text-white transition hover:bg-white/10">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
