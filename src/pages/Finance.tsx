// src/pages/FinanceUseCasePage.tsx
import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";

const Finance = () => {
  const benefits = [
    {
      title: "Dynamic Forecasting",
      description:
        "Integrate real-time data to create rolling forecasts and budget scenarios.",
    },
    {
      title: "Cash Flow Optimization",
      description:
        "Predict liquidity needs, monitor burn rate, and model funding strategies.",
    },
    {
      title: "Risk and Fraud Detection",
      description:
        "Identify emerging risks and detect anomalies across accounts and vendors.",
    },
    {
      title: "Cross-Functional KPIs",
      description:
        "Connect financial metrics to sales, HR, and operations for full transparency.",
    },
    {
      title: "Audit & Compliance Automation",
      description:
        "Generate reports, monitor thresholds, and streamline regulatory workflows.",
    },
    {
      title: "Strategic Cost Management",
      description:
        "Identify cost-saving opportunities and track ROI by initiative or region.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-hidden">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-brand-yellow/30 via-transparent to-brand-purple-dark/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Drive Financial Precision with Groflex AI
          </h1>
          <p className="text-xl text-foreground opacity-80 mb-8">
            Discover how finance teams use Groflex to improve forecasting,
            manage risk, and align strategic goals in real time.
          </p>
          <Link
            to="/contactus"
            className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300">
             Request a Demo
          </Link>
        </div>
      </section>

      {/* Enhanced Challenge Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-12 leading-tight pb-2">
            The Challenge for Finance Teams
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Static Forecasting Models
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Legacy spreadsheets and quarterly forecasts can’t respond to
                  rapid market shifts.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Data Silos Across Departments
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Finance struggles to gain holistic insights when data is
                  fragmented across teams.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Cash Flow Uncertainty
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Volatile cash positions make strategic planning and investment
                  decisions risky.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Limited Risk Visibility
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Without real-time insights, risks remain hidden until they
                  become costly issues.
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
            {benefits.map((item, idx) => (
              <FuturisticCard
                key={idx}
                className="p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gradient mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground opacity-75">
                    {item.description}
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
            “Groflex gave us real-time visibility into our cash position and
            helped cut costs by 15%. Forecasting is now a daily asset, not a
            quarterly burden.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — CFO, Mid-Market Enterprise
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to modernize your finance function?
        </h2>
        <Link
          to="/contactus"
          className="bg-black text-white font-semibold py-4 px-8 rounded-full shadow-xl hover:bg-gray-900 transition"
        >
          Talk to Sales
        </Link>
      </section>
    </Layout>
  );
};

export default Finance;
