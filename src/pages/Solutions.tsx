
import Layout from '../components/Layout';

const Solutions = () => {
  const solutions = [
    {
      title: 'Business Leaders',
      subtitle: 'Strategic Decision Making',
      pain: 'Can\'t get cross-functional visibility',
      gain: 'Forecasting + ROI metrics on day 1',
      description: 'See where you\'re heading and what to do about it—before others do.',
      icon: '👔',
      features: ['Executive Dashboards', 'Risk Forecasting', 'ROI Tracking', 'Strategic Planning'],
      cta: 'See How GrofleX Drives ROI'
    },
    {
      title: 'BI Managers',
      subtitle: 'Operational Intelligence',
      pain: 'Reporting fatigue + bottlenecks',
      gain: 'Instant insights with no analyst lag',
      description: 'Deliver predictive dashboards that tell leadership what matters.',
      icon: '📊',
      features: ['Automated Reporting', 'Predictive Analytics', 'Team Collaboration', 'Data Governance'],
      cta: 'Explore the Platform'
    },
    {
      title: 'Analysts',
      subtitle: 'Advanced Analytics',
      pain: 'Manual dashboards & reactive reporting',
      gain: 'Self-serve AI. Ask, predict, act.',
      description: 'Automate insight delivery and eliminate low-impact work.',
      icon: '🔍',
      features: ['Natural Language Queries', 'Automated Insights', 'Model Building', 'Data Exploration'],
      cta: 'Try It Free'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Clarity for Everyone—</span>
              <br />
              <span className="text-white">No Matter Your Role</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Tailored solutions that address specific pain points and deliver measurable outcomes for every decision-maker
            </p>
          </div>

          {/* Role-based Solutions */}
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-card p-12 hover:bg-white/10 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-6xl">{solution.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-gradient">{solution.title}</h2>
                        <p className="text-brand-purple text-lg">{solution.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-xl text-white/90 mb-8">{solution.description}</p>
                    
                    {/* Pain/Gain */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                        <h4 className="text-red-400 font-semibold mb-2">Current Pain:</h4>
                        <p className="text-white/80">{solution.pain}</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                        <h4 className="text-green-400 font-semibold mb-2">With GrofleX:</h4>
                        <p className="text-white/80">{solution.gain}</p>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      {solution.cta}
                    </button>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 p-8 rounded-xl">
                      <h4 className="text-brand-cream font-semibold mb-6 text-center">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="glass-card p-4 text-center">
                            <div className="w-3 h-3 bg-brand-coral rounded-full mx-auto mb-2"></div>
                            <p className="text-white/80 text-sm">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="glass-card p-12 text-center mt-16">
            <h2 className="text-3xl font-bold text-gradient mb-4">Ready to See GrofleX in Action?</h2>
            <p className="text-white/80 mb-8">Choose your path and discover how GrofleX delivers clarity for your specific role</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </button>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
