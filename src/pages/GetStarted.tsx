
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { ArrowRight, Zap, Users, Target, CheckCircle } from 'lucide-react';

const GetStarted = () => {
  const handleRedirectToApp = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col relative overflow-hidden cyber-grid">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-coral rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Get Started with</span><br />
              <span className="text-white">GrofleX</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Choose your path to clarity. Whether you're leading, enabling, or building insights, 
              GrofleX helps you know what to do next.
            </p>
          </div>

          {/* Getting Started Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FuturisticCard variant="neon" className="text-center p-8">
              <div className="text-brand-purple mb-6 flex justify-center">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">For Teams</h3>
              <p className="text-white/80 mb-6">
                Start with a team trial and see how GrofleX transforms your workflow
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">14-day free trial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">Up to 5 users</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">Full feature access</span>
                </li>
              </ul>
              <button 
                onClick={handleRedirectToApp}
                className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-full"
              >
                Start Team Trial
              </button>
            </FuturisticCard>

            <FuturisticCard variant="hologram" className="text-center p-8">
              <div className="text-brand-coral mb-6 flex justify-center">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">For Individuals</h3>
              <p className="text-white/80 mb-6">
                Perfect for analysts and BI managers looking to enhance their insights
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">7-day free trial</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">Personal workspace</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">Core AI features</span>
                </li>
              </ul>
              <button 
                onClick={handleRedirectToApp}
                className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 w-full"
              >
                Start Individual Trial
              </button>
            </FuturisticCard>

            <FuturisticCard variant="neon" className="text-center p-8">
              <div className="text-brand-purple mb-6 flex justify-center">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Enterprise</h3>
              <p className="text-white/80 mb-6">
                Custom solutions for large organizations with advanced requirements
              </p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">Custom deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">Advanced security</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-white/70">Dedicated support</span>
                </li>
              </ul>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-purple/20 transition-all duration-300 w-full">
                Contact Sales
              </button>
            </FuturisticCard>
          </div>

          {/* Demo Section */}
          <div className="text-center">
            <FuturisticCard variant="hologram" className="p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gradient mb-6">Not Ready to Start?</h3>
              <p className="text-white/80 mb-8 text-lg">
                See GrofleX in action with a personalized demo
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={handleRedirectToApp}
                  className="glass-card border border-brand-coral/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-coral/20 transition-all duration-300 flex items-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  Book a Demo
                </button>
                <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                  Watch Video Tutorial
                </button>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
