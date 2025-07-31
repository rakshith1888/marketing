import { useState } from "react";
import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const values = [
    {
      title: "Clarity First",
      description:
        "We believe complex data should deliver simple, actionable insights.",
      icon: "🎯",
    },
    {
      title: "Predictive Power",
      description:
        "Our AI doesn't just analyze the past, it illuminates the future.",
      icon: "🔮",
    },
    {
      title: "Human-Centered",
      description:
        "Technology should amplify human decision-making, not replace it.",
      icon: "🤝",
    },
    {
      title: "Continuous Learning",
      description:
        "Our platform evolves with your business, getting smarter over time.",
      icon: "📈",
    },
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Problem Identified",
      description:
        "Recognized the gap between complex data and actionable insights",
    },
    {
      number: "02",
      title: "Solution Developed",
      description:
        "Built AI-powered predictive analytics that deliver clear recommendations",
    },
    {
      number: "03",
      title: "Platform Matured",
      description:
        "Evolved into comprehensive business intelligence with real-time insights",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="flex items-center justify-center relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-purple-dark/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">About Groflex</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground opacity-80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower decision makers with insight they can trust instantly.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <FuturisticCard variant="neon" className="p-12 mb-16 text-center">
        <h2 className="text-3xl font-bold text-gradient mb-6">Our Mission</h2>
        <p className="text-lg text-foreground opacity-80 max-w-3xl mx-auto">
          To empower decision-makers with insight they can trust instantly. We
          believe that in a world drowning in data, what matters most is knowing
          what to do next.
        </p>
      </FuturisticCard>

      {/* Live Video Preview Section */}
      {/* Live Video Preview Section */}
      <div className="mb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FuturisticCard className="p-6 text-center">
          <h2 className="text-3xl font-bold text-gradient mb-6">
            Watch Our Story
          </h2>

          <div className="relative rounded-xl overflow-hidden shadow-lg">
            {!isPlaying ? (
              <div
                className="relative group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="https://img.youtube.com/vi/MRThZOLhDqk/hqdefault.jpg"
                  alt="Groflex Preview"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition duration-300">
                  <div className="bg-white/90 text-brand-purple rounded-full p-4 shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-64 md:h-80 lg:h-96"
                src="https://www.youtube.com/embed/MRThZOLhDqk?autoplay=1&rel=0&controls=1&modestbranding=1"
                title="Groflex Preview"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </FuturisticCard>
      </div>

      {/* Story and Journey Section */}
      <div className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <FuturisticCard className="p-8">
            <h2 className="text-3xl font-bold text-gradient mb-8">Our Story</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-lg font-medium text-gradient mb-3">
                  Born from frustration with dashboards. Built to act in real
                  time.
                </p>
              </div>
              <div className="space-y-4 text-foreground opacity-80">
                <p className="leading-relaxed">
                  Groflex emerged from a simple observation: organizations have
                  more data than ever, yet decision-makers still struggle to
                  know what to do next. Traditional BI tools show what happened,
                  but they don't provide the clarity leaders need to act
                  decisively.
                </p>
                <p className="leading-relaxed">
                  Our founders experienced this frustration firsthand watching
                  executives make gut decisions despite having access to
                  sophisticated analytics platforms. The problem wasn't lack of
                  data — it was lack of actionable insight.
                </p>
                <p className="leading-relaxed">
                  Today, we're building the bridge between prediction and
                  action, helping leaders see not just what's coming, but what
                  to do about it.
                </p>
              </div>
            </div>
          </FuturisticCard>

          <FuturisticCard className="p-8">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              The Journey
            </h2>
            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-brand-purple to-brand-coral flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="text-xl font-semibold text-gradient mb-3">
                        {step.title}
                      </h3>
                      <p className="text-foreground opacity-70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-7 top-14 w-0.5 h-8 bg-gradient-to-b from-brand-purple/50 to-brand-coral/50"></div>
                  )}
                </div>
              ))}
            </div>
          </FuturisticCard>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gradient text-center mb-12">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FuturisticCard key={index} className="p-6 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gradient mb-3">
                {value.title}
              </h3>
              <p className="text-foreground opacity-70 text-sm">
                {value.description}
              </p>
            </FuturisticCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
