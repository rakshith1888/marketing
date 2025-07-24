import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";

const IT = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-visible">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-brand-yellow/30 via-transparent to-brand-purple-dark/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-10 leading-snug md:leading-[1.3] tracking-tight break-words">
            <span className="block">Turn IT from Ticket Triage</span>
            <span className="block">to Strategic Enabler</span>
          </h1>

          <p className="text-xl text-foreground opacity-80 mt-12 mb-16 leading-relaxed">
            Groflex brings predictive intelligence to IT capacity, risk, and
            performance and helping teams get ahead of demand.
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
            Why IT Teams Struggle to Get Ahead
          </h2>
          <p className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            IT leaders operate under growing pressure but often lack predictive
            visibility into system strain, workload surges, or tech debt
            impacts. Groflex surfaces early signals from infrastructure, ops,
            and business usage patterns to inform smarter decisions.
          </p>

          <div className="bg-[#12001e] p-10 rounded-2xl shadow-xl border border-white/10 flex flex-col md:flex-row items-start gap-6 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Reactive Firefighting
              </h3>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Most IT teams spend more time reacting than planning. Groflex
                gives them proactive signal intelligence by helping reduce ticket
                volume, preempt bottlenecks, and align infrastructure with
                business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Groflex Comes In - Unified Use Case Card */}
      <section className="py-28 px-6 bg-gradient-to-b from-black via-[#0a0014] to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient text-center mb-16">
            Where Groflex Comes In
          </h2>

          <div className="bg-[#12001e] p-10 rounded-2xl border border-white/10 shadow-lg w-full">
            <h3 className="text-xl font-semibold text-brand-purple mb-6">
              Use Cases:
            </h3>
            <div className="text-white/85 text-sm md:text-base leading-snug space-y-6">
              <div>
                <p className="font-semibold text-white">Use Case 1:</p>
                <p>
                  Groflex helped IT reduce incident response time by{" "}
                  <strong>37%</strong> by predicting peak load risks based on
                  usage + deployment timing.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Use Case 2:</p>
                <p>
                  A SaaS firm flagged aging infrastructure as the cause of
                  hidden latency and new investment plan cut support tickets by{" "}
                  <strong>23%</strong>.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Use Case 3:</p>
                <p>
                  IT used Groflex to anticipate app demand spikes during
                  promos by avoiding outages and saving <strong>$150K</strong> in
                  potential SLA penalties.
                </p>
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
            “Groflex helped our IT team finally get ahead of demand. Now we act
            on signals and not tickets.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — Head of IT, Global SaaS Platform
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to transform IT into a proactive powerhouse?
        </h2>
        <Link
          to="/contactus"
          className="bg-black text-white font-semibold text-lg py-4 px-8 rounded-full shadow-xl hover:bg-gray-900 transition"
        >
          Talk to Our Team
        </Link>
      </section>
    </Layout>
  );
};

export default IT;
