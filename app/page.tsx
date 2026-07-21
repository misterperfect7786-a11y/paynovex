"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import { Shield, Wallet, Database, Lock } from "lucide-react";
import Header from "../components/Header";
import Services from "../components/Services";
import Apis from "../components/Apis";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import DashboardCards from "../components/DashboardCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>PAYNOVEX | Enterprise FinTech Company India</title>
        <meta
          name="description"
          content="PAYNOVEX powers India’s next generation of digital payments with secure APIs, white-label fintech solutions, recharge services, travel booking, and enterprise payment gateway infrastructure."
        />
        <meta property="og:title" content="PAYNOVEX | Enterprise FinTech Company India" />
        <meta
          property="og:description"
          content="Secure APIs, white-label fintech, recharge, travel booking, enterprise payment gateway."
        />
        <meta property="og:image" content="/paynovex-logo.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <DashboardCards />
      </div>

      <section className="bg-gray-100 py-6">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 text-center text-sm font-medium md:grid-cols-6">
          {[
            "99.99% Uptime",
            "Secure Transactions",
            "Real-Time Reports",
            "API-First Platform",
            "Scalable Infrastructure",
            "24x7 Support",
          ].map((item, i) => (
            <div key={i} className="rounded bg-white p-3 shadow">
              {item}
            </div>
          ))}
        </div>
      </section>

      <Services />
      <Apis />

      <section id="solutions" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Bank-Grade Security</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["SSL Encryption", "End-to-end encryption for data in transit and at rest."],
              ["PCI Compliance", "Secure transaction processing for enterprise merchants."],
              ["Fraud Monitoring", "Real-time controls and alert systems for suspicious activity."],
            ].map(([title, text], i) => (
              <div key={i} className="rounded-lg border p-6 shadow-sm">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">Flexible Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Starter", "For early-stage D2C brands and startups", "₹ 15,000/month"],
              ["Growth", "For high-volume SMBs and partner networks", "₹ 49,999/month"],
              [
                "Enterprise",
                "Custom pricing for banks, distributors, and large-scale merchants",
                "Custom",
              ],
            ].map(([name, desc, price], i) => (
              <div key={i} className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{name}</h3>
                <p className="mt-2 text-sm">{desc}</p>
                <p className="mt-4 text-2xl font-bold text-[#0B5FFF]">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold">About PAYNOVEX</h2>
          <p className="mt-4 max-w-3xl text-lg">
            PAYNOVEX is a modern fintech infrastructure company helping India’s businesses launch
            seamless payments, recharge, travel, API integrations, and enterprise software with
            confidence.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
