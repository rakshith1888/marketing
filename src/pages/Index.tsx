
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Why Choose Groflex?</span>
            </h2>
            <p className="text-xl text-white/80">
              Experience the power of next-generation business solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Optimized performance that scales with your business needs'
              },
              {
                icon: '🔒',
                title: 'Enterprise Security',
                description: 'Bank-level security to protect your most valuable data'
              },
              {
                icon: '🌐',
                title: 'Global Scale',
                description: 'Worldwide infrastructure for seamless global operations'
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="text-6xl mb-6 group-hover:animate-bounce">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/10 to-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '99.9%', label: 'Uptime' },
              { number: '50+', label: 'Countries' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ready to Transform</span>
            <br />
            <span className="text-white">Your Business?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of companies already using Groflex to accelerate their growth
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-brand-purple/50 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
