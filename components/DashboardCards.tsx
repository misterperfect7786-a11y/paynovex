"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wallet, Database, Lock } from "lucide-react";

const cards = [
  {
    title: "Wallet Balance",
    value: "₹ 12,45,000",
    caption: "Instant settlement available",
    icon: Wallet,
    accent: "from-[#0B5FFF] to-[#6B2EFF]",
  },
  {
    title: "Transactions Feed",
    value: "1,280+",
    caption: "UPI, payouts, and reconciliations",
    icon: Database,
    accent: "from-[#14B8A6] to-[#0B5FFF]",
  },
  {
    title: "Next Settlement",
    value: "₹ 3.2 Cr",
    caption: "Secure API-driven clearing",
    icon: Lock,
    accent: "from-[#F97316] to-[#EF4444]",
  },
];

export default function DashboardCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3"
    >
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.title}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20"
          >
            <div
              className={`inline-flex rounded-3xl bg-gradient-to-r ${card.accent} p-3 text-white shadow-lg shadow-slate-950/20`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-3xl font-bold text-white">{card.value}</p>
            <p className="mt-3 text-sm text-slate-200">{card.caption}</p>
          </div>
        );
      })}
    </motion.div>
  );
}
