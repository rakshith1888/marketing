import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";
import {
  LucideHeartPulse,
  LucideUsers,
  LucideBarChart3,
  LucideClipboardCheck,
  LucideClock9,
  LucideAlertCircle,
} from "lucide-react";

const Healthcare = () => {
  const benefits = [
    {
      icon: LucideHeartPulse,
      title: "Patient Demand Forecasting",
      description:
        "Plan staffing and beds with predictive insights into admissions and case loads.",
    },
    {
      icon: LucideClipboardCheck,
      title: "Care Pathway Optimization",
      description:
        "Analyze clinical outcomes to improve treatments and reduce readmissions.",
    },
    {
      icon: LucideBarChart3,
      title: "Financial & Operational Alignment",
      description:
        "Unify cost, performance, and quality data for strategic decision-making.",
    },
    {
      icon: LucideUsers,
      title: "Population Health Insights",
      description:
        "Target chronic conditions and care gaps with predictive analytics.",
    },
    {
      icon: LucideClock9,
      title: "Workforce Optimization",
      description:
        "Balance schedules, prevent burnout, and forecast staffing needs.",
    },
    {
      icon: LucideAlertCircle,
      title: "Real-Time Compliance Alerts",
      description:
        "Stay ahead of HIPAA risks and audit triggers with automated monitoring.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-hidden">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-green-400/20 via-transparent to-brand-purple-dark/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Transform Healthcare Decisions with Groflex AI
          </h1>
          <p className="text-xl text-foreground opacity-80 mb-8">
            Discover how providers use Groflex to forecast patient demand,
            optimize care delivery, and align clinical and financial decisions.
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
            The Challenge for Healthcare Providers
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Fragmented Data Systems
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Disparate EHRs, finance, and ops tools limit visibility and
                  slow action.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Rising Patient Complexity
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  More comorbidities, longer stays, and staffing gaps challenge
                  outcomes.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Lagging Decision Cycles
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Reporting delays and manual reviews slow critical healthcare
                  decisions.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Pressure to Cut Costs
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Administrators must balance budget constraints with improving
                  outcomes.
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
            “Groflex helped us predict patient surges with 95% accuracy and
            reduce readmissions by 18%. It’s become our operational command
            center.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — Chief Medical Officer, Multi-Hospital System
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to elevate your healthcare decisions?
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

export default Healthcare;
