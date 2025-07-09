// src/pages/RetailUseCasePage.tsx
import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";

const Retail = () => {
  const benefits = [
    {
      title: "AI-Powered Demand Forecasting",
      description:
        "Predict SKU-level demand across regions and channels using real-time inputs.",
    },
    {
      title: "Smart Inventory Optimization",
      description:
        "Reduce stockouts and excess inventory with predictive restocking models.",
    },
    {
      title: "Personalized Promotions",
      description:
        "Serve targeted offers based on behavior, location, and buying history.",
    },
    {
      title: "Cross-Functional Visibility",
      description:
        "Align operations, merchandising, and marketing with shared intelligence.",
    },
    {
      title: "Regional Strategy Execution",
      description:
        "Make localized decisions using store-level trend detection.",
    },
    {
      title: "Returns Reduction",
      description:
        "Detect early return trends and optimize products and fulfillment.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-hidden">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-brand-yellow/30 via-transparent to-brand-purple-dark/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Smarter Retail Decisions with Groflex
          </h1>
          <p className="text-xl text-foreground opacity-80 mb-8">
            See how leading retailers use Groflex to forecast demand, optimize
            inventory, and personalize customer journeys.
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
            The Challenge for Retail Teams
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Siloed Retail Systems
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Disconnected tools between merchandising, stores, and
                  ecommerce lead to delays and missed signals.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Forecasting Volatility
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Promotions, seasonality, and local trends make manual
                  forecasting unreliable.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Ineffective Promotions
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Without customer-level insights, campaigns fail to lift sales
                  or engagement.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Inventory Imbalances
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Overstocking drains cash while stockouts hurt customer trust
                  and conversion.
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
            “Groflex helped us cut overstock by 22% and increase campaign ROI by
            31%. It’s like having an AI strategist for our merchandising team.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — VP of Operations, Leading Apparel Brand
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to modernize your retail decisions?
        </h2>
        <Link
          to="/contact"
          className="bg-black text-white font-semibold text-lg py-4 px-8 rounded-full shadow-xl hover:bg-gray-900 transition"
        >
          Talk to Sales
        </Link>
      </section>
    </Layout>
  );
};

export default Retail;
