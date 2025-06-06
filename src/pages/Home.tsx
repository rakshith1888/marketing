
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { ArrowRight, Zap, Brain, Target, Users, TrendingUp, Shield } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide predictive insights'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Targeting',
      description: 'Identify opportunities with surgical precision using our advanced analytics engine'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Processing',
      description: 'Lightning-fast data processing delivers insights at the speed of business'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Decisions Enhanced' },
    { value: '500+', label: 'Organizations' },
    { value: '95%', label: 'Faster Decisions' },
    { value: '24/7', label: 'AI Monitoring' }
  ];

  return (
    <Layout>
      {/* Hero Section with Cyber Grid */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-coral rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">Clarity to Know</span><br />
            <span className="text-white">What to Do Next</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Predictive analytics. Prescriptive next steps.<br />
            Powered by AI, designed for decisive leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
              See How It Works
            </button>
          </div>

          {/* Interactive Flywheel */}
          <FuturisticCard variant="neon" className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: '🔗', title: 'Connect', step: '01' },
                { icon: '🔮', title: 'Predict', step: '02' },
                { icon: '📋', title: 'Prescribe', step: '03' },
                { icon: '⚡', title: 'Act', step: '04' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-sm text-brand-purple font-mono mb-2">STEP {item.step}</div>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gradient">{item.title}</h3>
                </div>
              ))}
            </div>
          </FuturisticCard>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Why Can't You See</span><br />
              <span className="text-white">What's Coming Next?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: '86%', issue: 'Siloed Systems', quote: '"We have data everywhere but insights nowhere"' },
              { stat: '72%', issue: 'Gut Decisions', quote: '"I trust my gut more than our reports"' },
              { stat: '92%', issue: 'No Clear Path', quote: '"Our dashboards show what happened, not what to do"' }
            ].map((item, index) => (
              <FuturisticCard key={index} variant="hologram">
                <div className="text-6xl font-bold text-gradient mb-6">{item.stat}</div>
                <h3 className="text-xl font-bold text-brand-purple mb-4">{item.issue}</h3>
                <div className="border-l-4 border-brand-coral pl-4 italic text-white/70">
                  {item.quote}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Next-Generation</span><br />
              <span className="text-white">Analytics Platform</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} variant="neon">
                <div className="text-brand-purple mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gradient mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FuturisticCard variant="hologram" className="text-center">
            <h2 className="text-3xl font-bold text-gradient mb-12">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold text-gradient pulse-glow">{stat.value}</div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </FuturisticCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Ready to See</span><br />
            <span className="text-white">The Future?</span>
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Transform your decision-making with AI-powered clarity
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-brand text-black font-semibold px-12 py-6 rounded-full hover:shadow-xl transition-all duration-300 text-lg">
              Start Your Journey
            </button>
            <button className="glass-card border border-brand-purple/50 text-white font-semibold px-12 py-6 rounded-full hover:bg-brand-purple/20 transition-all duration-300 text-lg">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
