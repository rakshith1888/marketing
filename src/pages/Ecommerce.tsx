import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  const benefits = [
    {
      title: "Real-Time Personalization",
      description:
        "Serve tailored recommendations based on live customer behavior.",
    },
    {
      title: "Inventory Forecasting",
      description: "Predict SKU demand by region, channel, and seasonality.",
    },
    {
      title: "Campaign Performance Optimization",
      description:
        "Track, test, and adapt digital campaigns with AI-driven recommendations.",
    },
    {
      title: "Returns & Satisfaction Insights",
      description:
        "Analyze return patterns and improve product descriptions and fit guidance.",
    },
    {
      title: "Customer Lifetime Value",
      description:
        "Segment users by value and deliver retention strategies with AI precision.",
    },
    {
      title: "Cross-Team Alignment",
      description:
        "Connect marketing, fulfillment, and support with shared real-time insights.",
    },
  ];

  const challenges = [
    "Rising customer expectations for personalization",
    "Inventory misalignment causes stockouts or overstock",
    "Digital campaign performance is unpredictable",
    "Data is siloed across marketing, sales, and ops",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-hidden">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-pink-400/20 via-transparent to-brand-purple-dark/30"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Scale E-Commerce Smarter with Groflex AI
          </h1>
          <p className="text-xl text-foreground opacity-80 mb-8">
            Discover how e-commerce brands use Groflex to personalize
            experiences, forecast inventory, and optimize campaigns in real
            time.
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
          <h2 className="text-4xl font-bold text-gradient mb-12 leading-snug">
            The Challenge for E-Commerce Brands
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {challenges.map((challenge, idx) => (
              <FuturisticCard key={idx} className="p-6 flex items-start gap-4">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse mt-1" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {challenge}
                </p>
              </FuturisticCard>
            ))}
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
            {benefits.map(({ title, description }, idx) => (
              <FuturisticCard
                key={idx}
                className="p-6 h-full flex flex-col justify-between"
              >
                <h3 className="text-xl font-semibold text-gradient mb-3">
                  {title}
                </h3>
                <p className="text-sm text-foreground opacity-75">
                  {description}
                </p>
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
            “Groflex helped us lift campaign ROI by 35% and reduced returns by
            20%. It’s our growth engine.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — CMO, DTC E-Commerce Brand
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to accelerate your e-commerce decisions?
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

export default Ecommerce;
