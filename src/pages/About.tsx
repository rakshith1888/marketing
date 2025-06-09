import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Users, Target, Lightbulb, ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  const handleBookDemo = () => {
    window.open('https://sibforms.com/serve/MUIFAAKayAu5X2pGgP6oFM-sUgP1mZMYaQqiAVUS39zY8bDJNjnT1ArRNIzt21QdCoz3gdKbyiyvYP7q9VKclwSvNI-yKjNZGm_sSyJWbAg2298SfqQ1JWH5wI7Pmm6DJfS5_TFUdnGoiVflgwr2DCTcTD1dHxXX-qkpmxp_fEzVot7GqFH9-4hOFqkED-PokcoO7dlDhVulWHoy', '_blank');
  };

  const values = [
    {
      title: 'Clarity First',
      description: 'We believe complex data should deliver simple, actionable insights.',
      icon: '🎯'
    },
    {
      title: 'Predictive Power',
      description: 'Our AI doesn\'t just analyze the past—it illuminates the future.',
      icon: '🔮'
    },
    {
      title: 'Human-Centered',
      description: 'Technology should amplify human decision-making, not replace it.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'Our platform evolves with your business, getting smarter over time.',
      icon: '📈'
    }
  ];

  const journeySteps = [
    {
      number: '01',
      title: 'Problem Identified',
      description: 'Recognized the gap between complex data and actionable insights'
    },
    {
      number: '02',
      title: 'Solution Developed',
      description: 'Built AI-powered predictive analytics that deliver clear recommendations'
    },
    {
      number: '03',
      title: 'Platform Matured',
      description: 'Evolved into comprehensive business intelligence with real-time insights'
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Reduced height and padding */}
      <section className="flex items-center justify-center relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-purple-dark/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">About Groflex</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empower decision makers with insight they can trust instantly.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <FuturisticCard variant="neon" className="p-12 mb-16 text-center">
        <h2 className="text-3xl font-bold text-gradient mb-6">Our Mission</h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto">
          To empower decision-makers with insight they can trust—instantly. We believe that in a world
          drowning in data, what matters most is knowing what to do next.
        </p>
      </FuturisticCard>

      {/* Story and Journey Section */}
      <div className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Our Story */}
          <FuturisticCard className="p-8">
            <h2 className="text-3xl font-bold text-gradient mb-8">Our Story</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-lg font-medium text-gradient mb-3">
                  Born from frustration with dashboards. Built to act in real time.
                </p>
              </div>
              
              <div className="space-y-4 text-white/80">
                <p className="leading-relaxed">
                  GrofleX emerged from a simple observation: organizations have more data than ever, yet decision-makers still struggle to know what to do next. Traditional BI tools show what happened, but they don't provide the clarity leaders need to act decisively.
                </p>
                <p className="leading-relaxed">
                  Our founders experienced this frustration firsthand—watching executives make gut decisions despite having access to sophisticated analytics platforms. The problem wasn't lack of data; it was lack of actionable insight.
                </p>
                <p className="leading-relaxed">
                  Today, we're building the bridge between prediction and action, helping leaders see not just what's coming, but what to do about it.
                </p>
              </div>
            </div>
          </FuturisticCard>

          {/* The Journey */}
          <FuturisticCard className="p-8">
            <h2 className="text-3xl font-bold text-gradient mb-8">The Journey</h2>
            <div className="space-y-6">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r from-brand-purple to-brand-coral flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="text-xl font-semibold text-gradient mb-3">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
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
        <h2 className="text-3xl font-bold text-gradient text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FuturisticCard key={index} className="p-6 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gradient mb-3">{value.title}</h3>
              <p className="text-white/70 text-sm">{value.description}</p>
            </FuturisticCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
