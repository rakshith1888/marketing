// src/pages/FinancialServicesUseCasePage.tsx
import {
  LucideShieldCheck,
  LucideUserCheck,
  LucideBanknote,
  LucideSearchCheck,
  LucideBarChart,
  LucideActivity,
} from "lucide-react";
import Layout from "@/components/Layout";
import FuturisticCard from "@/components/FuturisticCard";
import { Link } from "react-router-dom";

const FinancialServices = () => {
  const benefits = [
    {
      icon: LucideShieldCheck,
      title: "Real-Time Risk Detection",
      description:
        "Monitor accounts, transactions, and behaviors for early signs of fraud or credit risk.",
    },
    {
      icon: LucideUserCheck,
      title: "Customer Intelligence",
      description:
        "Segment customers, predict lifetime value, and tailor services at scale.",
    },
    {
      icon: LucideBanknote,
      title: "Smarter Lending Decisions",
      description:
        "Use behavioral and financial data to automate underwriting and reduce defaults.",
    },
    {
      icon: LucideSearchCheck,
      title: "Compliance Monitoring",
      description:
        "Stay audit-ready with automated rule tracking and alerting.",
    },
    {
      icon: LucideBarChart,
      title: "Operational Transparency",
      description:
        "Unify financial and operational KPIs across channels and teams.",
    },
    {
      icon: LucideActivity,
      title: "Product Strategy Insights",
      description:
        "Track feature usage, model pricing impact, and drive innovation.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-hidden">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-yellow-400/20 via-transparent to-brand-purple-dark/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Drive Intelligence in Financial Services with Groflex AI
          </h1>
          <p className="text-xl text-foreground opacity-80 mb-8">
            See how banks, insurers, and fintechs use Groflex to manage risk,
            personalize services, and improve customer intelligence.
          </p>
          <Link
            to="/contactus"
            className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-12 leading-snug pb-2">
            The Challenge for Financial Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Regulatory Complexity
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Constantly changing compliance rules increase audit risk and
                  manual workload.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Evolving Fraud Threats
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Credit, identity, and transaction fraud constantly morph,
                  challenging static rules.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Customer Expectations
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Clients demand personalization, instant approvals, and
                  seamless experiences.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Data Fragmentation
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Siloed legacy systems block teams from seeing the full
                  picture.
                </p>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-t from-black via-[#0a0014] to-black px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-16">
            Where Groflex Comes In
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }, idx) => (
              <FuturisticCard
                key={idx}
                className="p-6 h-full flex flex-col justify-between"
              >
                <div className="mb-4 text-brand-yellow">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gradient mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-foreground opacity-75">
                    {description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <FuturisticCard
          variant="neon"
          className="max-w-3xl mx-auto text-center p-12"
        >
          <blockquote className="text-xl md:text-2xl italic text-foreground opacity-80 mb-6 leading-relaxed">
            “Groflex is the glue across our risk, lending, and product teams.
            It’s helped us catch anomalies faster and personalize our offers at
            scale.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — Chief Data Officer, National Bank
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to modernize your financial services decisions?
        </h2>
        <Link
          to="/contactus"
          className="bg-black text-white font-semibold text-lg py-4 px-8 rounded-full shadow-xl hover:bg-gray-900 transition"
        >
          Talk to Sales
        </Link>
      </section>
    </Layout>
  );
};

export default FinancialServices;
