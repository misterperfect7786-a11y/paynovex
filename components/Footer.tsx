import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">Contact Information</p>
            <h2 className="text-3xl font-bold">PAYNOVEX TECHNOLOGIES PRIVATE LIMITED</h2>
            <p className="text-sm text-slate-300">
              Plot No. N6/454, 2nd Floor, Saffire Building, IRC Village, Nayapalli, Bhubaneswar – 751015, Odisha, India
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Call</p>
              <p className="mt-3 text-base font-semibold text-white">+91 75630 43033</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
              <p className="mt-3 text-base font-semibold text-white">info@paynovex.in</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Website</p>
              <p className="mt-3 text-base font-semibold text-white">www.paynovex.in</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} PAYNOVEX TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
