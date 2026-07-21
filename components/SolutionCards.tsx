import React from 'react';

const solutions = [
  {
    title: 'Secure Recharge',
    text: 'Fast, secure recharge and billing flows for enterprise partners.',
  },
  {
    title: 'Banking Orchestration',
    text: 'API-led banking, payouts, settlements, and account management.',
  },
  {
    title: 'Payments Assurance',
    text: 'Omnichannel payments, reconciliation, and fraud prevention.',
  },
];

export default function SolutionCards() {
  return (
    <section id="solutions" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Bank-Grade Security</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/20 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{solution.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
