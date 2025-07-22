import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";

const Operations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-visible">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-brand-yellow/30 via-transparent to-brand-purple-dark/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-10 leading-snug md:leading-[1.3] tracking-tight break-words">
            <span className="block">Run Leaner, Smarter,</span>
            <span className="block">and Ahead of Disruption</span>
          </h1>

          <p className="text-xl text-foreground opacity-80 mt-12 mb-16 leading-relaxed">
            Groflex empowers operations teams to detect breakdowns,
            inefficiencies, and opportunities before they show up in reports.
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
      <section className="pt-28 pb-16 px-6 bg-black from-[#0a0014] via-black to-[#0a0014]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-10 leading-snug">
            Why Operations Teams Struggle to See the Root Cause
          </h2>
          <p className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            Operations leaders often chase symptoms—missed SLAs, excess costs,
            underperformance—without visibility into the root causes. Groflex
            unifies operational data across teams and systems to spotlight
            what’s causing friction and what to fix.
          </p>

          <div className="bg-[#12001e] p-10 rounded-2xl shadow-xl border border-white/10 flex flex-col md:flex-row items-start gap-6 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                No More Guesswork—Only Actionable Visibility
              </h3>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Traditional ops metrics highlight issues after the fact. Groflex
                surfaces early signals of inefficiency, helping operations teams
                proactively solve problems before they escalate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Groflex Comes In - Use Case List Style */}
      <section className="py-28 px-6 bg-gradient-to-b from-black via-[#0a0014] to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
            Where Groflex Comes In
          </h2>

          <div className="grid md:grid-cols-12 gap-12 items-stretch">
            {/* Left Side - Use Cases */}
            <div className="md:col-span-8 flex">
              <div className="bg-[#12001e] p-10 rounded-2xl border border-white/10 shadow-lg w-full">
                <h3 className="text-xl font-semibold text-brand-purple mb-6">
                  Use Cases:
                </h3>
                <ul className="space-y-4 text-white/85 text-sm md:text-base leading-snug">
                  <li className="grid gap-y-1">
                    <span className="font-semibold text-white">
                      Use Case 1:
                    </span>
                    <span>
                      A logistics firm used Groflex to predict late deliveries
                      based on weather and vendor capacity data—on-time rate
                      improved by <strong>14%</strong>.
                    </span>
                  </li>
                  <li className="grid gap-y-1">
                    <span className="font-semibold text-white">
                      Use Case 2:
                    </span>
                    <span>
                      Groflex identified underused warehouse space causing slow
                      pick rates—redistribution boosted throughput by{" "}
                      <strong>22%</strong>.
                    </span>
                  </li>
                  <li className="grid gap-y-1">
                    <span className="font-semibold text-white">
                      Use Case 3:
                    </span>
                    <span>
                      Ops managers reduced overtime costs by{" "}
                      <strong>$820K</strong> by shifting staffing to align with
                      Groflex's predicted demand surges.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="md:col-span-4 flex">
              <div className="w-full flex items-center justify-center bg-[#12001e] p-6 rounded-2xl border border-white/10 shadow-lg">
                <img
                  src="/lovable-uploads/operations.png"
                  alt="Groflex Operations Insights Visual"
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </div>
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
            “With Groflex, we no longer react to problems—we prevent them. It’s
            become essential for keeping our operations agile and efficient.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — Head of Operations, Global Logistics Company
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to stop chasing issues and start solving them early?
        </h2>
        <Link
          to="/contactus"
          className="bg-black text-white font-semibold text-lg py-4 px-8 rounded-full shadow-xl hover:bg-gray-900 transition"
        >
          Talk to Operations
        </Link>
      </section>
    </Layout>
  );
};

export default Operations;
