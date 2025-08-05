import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import {
  Brain,
  Zap,
  Shield,
  BarChart3,
  Cpu,
  Database,
  Network,
  MessageSquare,
  Users,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const handleGetStarted = () => {
    window.open("https://app.groflex.ai", "_blank");
  };

  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate("/Contactus");
  };

  const features = [
    {
      icon: <Database className="w-12 h-12" />,
      name: "Data Integration Layer",
      description:
        "Seamlessly connect all your data sources with 200+ pre-built connectors and real-time sync capabilities",
      impact:
        "Eliminates data silos and ensures unified visibility across all systems",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      name: "Groflex AI Engine",
      description:
        "Self-learning AI that continuously improves predictions and recommendations based on your business outcomes",
      impact:
        "Gets smarter with every decision, delivering increasingly accurate insights",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      name: "Predictive Models & Prescriptive Actions",
      description:
        "Built in ML models that forecast risks and opportunities, plus suggested next-best actions with decision framing",
      impact: "Move from reactive to proactive decision-making with confidence",
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      name: "Natural Language Q&A",
      description:
        "Ask business questions in plain English and get context aware recommendations instantly",
      impact:
        "Democratizes data access for all roles  no SQL or technical skills required",
    },
    {
      icon: <Users className="w-12 h-12" />,
      name: "Role-Based Dashboards",
      description:
        "Tailored interfaces for executives, BI managers, and analysts with role-specific insights and actions",
      impact: "Everyone gets the clarity they need in the format they prefer",
    },
    {
      icon: <Lock className="w-12 h-12" />,
      name: "Security & Governance",
      description:
        "Enterprise grade security with SOC 2 compliance, end-to-end encryption, and comprehensive audit trails",
      impact:
        "Trust your data is protected while maintaining full transparency",
    },
  ];

  const architectureSteps = [
    { title: "Connect", desc: "API integrations pull data from all sources" },
    {
      title: "Process",
      desc: "Groflex AI Engine analyzes and learns patterns",
    },
    { title: "Predict", desc: "ML models forecast trends and identify risks" },
    { title: "Prescribe", desc: "Generate actionable recommendations" },
    { title: "Deliver", desc: "Role-based dashboards show what matters most" },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">AI that Connects,</span>
              <br />
              <span className="text-gradient">Predicts, and Prescribes</span>
              <br />
              <span className="text-white">in Plain Language</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10">
              Discover how Groflex transforms fragmented data into clear,
              actionable insights that drive confident decision-making across
              your entire organization.
            </p>

            {/* YouTube Video */}
            <FuturisticCard variant="neon" className="max-w-4xl mx-auto mb-16">
              <img
                src="/lovable-uploads/products_image.png"
                alt="Groflex Demo"
                className="w-full h-full object-cover"
              />
              <div className="mt-6 text-center">
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                </button>
              </div>
            </FuturisticCard>
          </div>

          {/* Features Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-gradient text-center mb-4">
              What's Under the Hood
            </h2>
            <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto">
              Six core components work together to deliver clarity and
              actionable insights for every decision-maker
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  variant="hologram"
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="text-brand-purple mb-6 group-hover:text-brand-coral transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gradient mb-4">
                    {feature.name}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Impact tooltip */}
                  <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-4">
                    <h4 className="text-brand-coral font-semibold mb-2 text-sm">
                      IMPACT:
                    </h4>
                    <p className="text-white/80 text-sm">{feature.impact}</p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </section>

          {/* Video Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-gradient text-center mb-4">
              See Groflex in Action
            </h2>
            <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto">
              Watch our demo video to explore how Groflex delivers powerful
              insights and streamlines decision-making.
            </p>
            <FuturisticCard variant="neon" className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="public/lovable-uploads/demo.mp4"
                  title="Groflex Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              {/* <div className="mt-6 text-center">
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300"
                >
                  Start Free Trial
                </button>
              </div> */}
            </FuturisticCard>
          </section>

          {/* Architecture Diagram */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-gradient text-center mb-16">
              How It All Works Together
            </h2>

            <FuturisticCard variant="neon" className="p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                {architectureSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center flex-1"
                  >
                    <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gradient mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm max-w-xs">
                      {step.desc}
                    </p>

                    {/* Arrow connector */}
                    {index < architectureSteps.length - 1 && (
                      <div className="hidden lg:block absolute transform translate-x-24 translate-y-8">
                        <div className="w-8 h-0.5 bg-gradient-to-r from-brand-purple to-brand-coral"></div>
                        <div className="w-0 h-0 border-l-4 border-l-brand-coral border-t-2 border-b-2 border-t-transparent border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FuturisticCard>
          </section>

          {/* Modular Design Section */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-gradient text-center mb-16">
              Built for Growth and Integration
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <FuturisticCard className="p-8">
                <div className="text-brand-purple mb-6">
                  <Network className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Scale as Teams Grow
                </h3>
                <p className="text-white/80 mb-6">
                  Modular architecture lets you add features and capabilities as
                  your organization expands, ensuring Groflex grows with your
                  business needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                    Start with core analytics, add AI features over time
                  </li>
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                    Expand user access across departments
                  </li>
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                    Add advanced governance as you scale
                  </li>
                </ul>
              </FuturisticCard>

              <FuturisticCard className="p-8">
                <div className="text-brand-purple mb-6">
                  <Cpu className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  Existing BI Integration
                </h3>
                <p className="text-white/80 mb-6">
                  Don't replace your current BI stack. Enhance it. Groflex
                  integrates seamlessly with your existing tools and workflows.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                    Works alongside Tableau, Power BI, Looker
                  </li>
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                    Enhances existing dashboards with AI insights
                  </li>
                  <li className="flex items-center text-white/70">
                    <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                    Preserves current user workflows
                  </li>
                </ul>
              </FuturisticCard>
            </div>
          </section>

          {/* Q&A Demo Section */}
          <FuturisticCard variant="neon" className="p-12 mb-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-4">
                Ask Groflex Anything
              </h2>
              <p className="text-white/80 text-lg">
                Experience our AI-powered Q&A interface with natural language
                queries
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <FuturisticCard className="p-8 border border-brand-purple/30">
                <div className="space-y-4 mb-6">
                  <div className="bg-brand-purple/20 p-4 rounded-lg border-l-4 border-brand-purple">
                    <p className="text-white/90">
                      "Why is our churn rate increasing in Q3?"
                    </p>
                  </div>
                  <div className="bg-brand-coral/20 p-4 rounded-lg border-l-4 border-brand-coral">
                    <p className="text-white/90">
                      "What's our highest revenue risk this quarter?"
                    </p>
                  </div>
                  <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-white/90">
                      "Which marketing channels should we prioritize?"
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={handleGetStarted}
                    className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
                  >
                    Try Live Demo
                  </button>
                </div>
              </FuturisticCard>
            </div>
          </FuturisticCard>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Ready to See Groflex in Action?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Discover how our AI-powered platform transforms data into decisive
              action
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={handleGetStarted}
                className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </button>
              <button
                onClick={handleBookDemo}
                className="bg-gradient-purple text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
