"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wallet, Database, Lock } from "lucide-react";

export default function DashboardCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-1 lg:grid-cols-1"
    >
      <div className="rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md">
        <Wallet className="mb-2 h-6 w-6" />
        <h3 className="font-semibold">Wallet Balance</h3>
        <p>₹ 12,45,000 — Instant Settlement</p>
      </div>
      <div className="rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md">
        <Database className="mb-2 h-6 w-6" />
        <h3 className="font-semibold">Transactions Feed</h3>
        <p>UPI Collections, Merchant Payouts, Settlements</p>
      </div>
      <div className="rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md">
        <Lock className="mb-2 h-6 w-6" />
        <h3 className="font-semibold">Next Settlement</h3>
        <p>₹ 3.2 Crore — Secure API Driven</p>
      </div>
    </motion.div>
  );
}
