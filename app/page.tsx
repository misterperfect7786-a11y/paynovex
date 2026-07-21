import Header from "../components/Header";
import Services from "../components/Services";
import Apis from "../components/Apis";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import DashboardCards from "../components/DashboardCards";
import FeatureGrid from "../components/FeatureGrid";
import SolutionCards from "../components/SolutionCards";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <DashboardCards />
      </div>

      <FeatureGrid />

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
      <SolutionCards />

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
          <h2 className="text-3xl font-bold">About PAYNOVEX TECHNOLOGIES PRIVATE LIMITED</h2>
          <p className="mt-4 max-w-3xl text-lg">
            PAYNOVEX TECHNOLOGIES PRIVATE LIMITED is a modern fintech infrastructure company helping India’s businesses launch seamless payments, recharge, travel, API integrations, and enterprise software with confidence.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Legal Entity</h3>
              <p className="mt-2 text-sm text-slate-600">PAYNOVEX TECHNOLOGIES PRIVATE LIMITED</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Office</h3>
              <p className="mt-2 text-sm text-slate-600">Plot No. N6/454, 2nd Floor, Saffire Building, IRC Village, Nayapalli, Bhubaneswar – 751015, Odisha, India</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
