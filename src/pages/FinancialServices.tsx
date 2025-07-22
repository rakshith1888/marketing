import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";

const FinancialServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-visible">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-brand-yellow/30 via-transparent to-brand-purple-dark/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-10 leading-snug md:leading-[1.3] tracking-tight break-words">
            <span className="block">Mitigate Risk and</span>
            <span className="block">
              Maximize Returns with Predictive Insight
            </span>
          </h1>

          <p className="text-xl text-foreground opacity-80 mt-12 mb-16 leading-relaxed">
            Groflex unifies customer data, operational risk, and regulatory
            insights to support faster, smarter financial decisions.
          </p>

          <Link
            to="/contactus"
            className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="pt-28 pb-16 px-6 bg-black from-[#0a0014] via-black to-[#0a0014]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-10 leading-snug">
            Why Financial Institutions Struggle to Connect the Dots
          </h2>
          <p className="text-lg text-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            Banks and insurers juggle compliance, margin pressure, and customer
            churn—often in silos. Groflex exposes the connections between KPIs
            to protect value and reduce friction.
          </p>

          <div className="bg-[#12001e] p-10 rounded-2xl shadow-xl border border-white/10 flex flex-col md:flex-row items-start gap-6 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Fragmented Insights Increase Risk
              </h3>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                Traditional systems track individual metrics but fail to reveal
                hidden dependencies. Groflex bridges silos to uncover actionable
                signals—enabling teams to reduce risk exposure, improve
                profitability, and elevate compliance.
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
            {/* Left Side - Use Cases (8/12 columns) */}
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
                      Groflex revealed that{" "}
                      <strong>23% of policy cancellations</strong> were tied to
                      a billing system flaw—resolving it restored{" "}
                      <strong>$3.5M</strong> in annual premiums.
                    </span>
                  </li>
                  <li className="grid gap-y-1">
                    <span className="font-semibold text-white">
                      Use Case 2:
                    </span>
                    <span>
                      A commercial bank flagged high-risk lending concentrations
                      by layering customer behavior with regional economic
                      stressors—cutting default exposure by <strong>16%</strong>
                      .
                    </span>
                  </li>
                  <li className="grid gap-y-1">
                    <span className="font-semibold text-white">
                      Use Case 3:
                    </span>
                    <span>
                      Groflex linked customer complaints to slow claims
                      processing on a specific product line—automating steps
                      saved <strong>18%</strong> in servicing costs.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Image (4/12 columns) */}
            <div className="md:col-span-4 flex">
              <div className="w-full flex items-center justify-center bg-[#12001e] p-6 rounded-2xl border border-white/10 shadow-lg">
                <img
                  src="/lovable-uploads/financialservicesindustry.png"
                  alt="Groflex Financial Insights Visual"
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
            “Groflex helped us proactively manage compliance risks and
            streamline decision-making across our portfolio.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — Head of Risk Analytics, Leading Financial Institution
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to reduce risk and improve financial performance?
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
