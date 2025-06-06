
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Brain, Zap, Shield, BarChart3, Cpu, Database } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      icon: <Brain className="w-12 h-12" />,
      name: 'GrofleX Core',
      description: 'Our flagship AI analytics platform with predictive modeling and prescriptive recommendations',
      features: ['Real-time Analytics', 'ML Predictions', 'Natural Language Q&A', 'Custom Dashboards'],
      tier: 'Enterprise'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      name: 'GrofleX Accelerate',
      description: 'Rapid deployment solution for immediate insights and faster decision-making',
      features: ['Quick Setup', 'Pre-built Models', 'Instant Insights', 'Mobile Ready'],
      tier: 'Professional'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      name: 'GrofleX Secure',
      description: 'Enterprise-grade security with compliance features for regulated industries',
      features: ['SOC 2 Compliant', 'End-to-end Encryption', 'Audit Trails', 'Role-based Access'],
      tier: 'Enterprise'
    }
  ];

  const capabilities = [
    { icon: <BarChart3 className="w-8 h-8" />, title: 'Advanced Analytics', desc: 'Deep dive into your data' },
    { icon: <Cpu className="w-8 h-8" />, title: 'AI Processing', desc: 'Lightning-fast computation' },
    { icon: <Database className="w-8 h-8" />, title: 'Data Integration', desc: 'Connect any data source' }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Next-Gen Products</span><br />
              <span className="text-white">Built for the Future</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cutting-edge AI solutions designed to transform how you understand and act on your data
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {products.map((product, index) => (
              <FuturisticCard key={index} variant="neon" className="h-full">
                <div className="text-brand-purple mb-6">
                  {product.icon}
                </div>
                <div className="text-sm text-brand-coral font-mono mb-2">{product.tier}</div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{product.name}</h3>
                <p className="text-white/80 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/70">
                      <div className="w-2 h-2 bg-brand-purple rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-brand text-black font-semibold py-3 rounded-full hover:shadow-xl transition-all duration-300">
                  Learn More
                </button>
              </FuturisticCard>
            ))}
          </div>

          {/* Capabilities Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Core Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <FuturisticCard key={index} variant="hologram" className="text-center">
                  <div className="text-brand-purple mb-4 flex justify-center">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gradient mb-2">{cap.title}</h3>
                  <p className="text-white/70">{cap.desc}</p>
                </FuturisticCard>
              ))}
            </div>
          </section>

          {/* Technical Specs */}
          <FuturisticCard variant="neon" className="mb-20">
            <h2 className="text-3xl font-bold text-gradient text-center mb-8">Technical Specifications</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-4">Performance</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Sub-second query response times</li>
                  <li>• 99.9% uptime SLA</li>
                  <li>• Petabyte-scale data processing</li>
                  <li>• Real-time streaming analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-purple mb-4">Integration</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• 200+ pre-built connectors</li>
                  <li>• REST & GraphQL APIs</li>
                  <li>• Multi-cloud deployment</li>
                  <li>• Custom data pipelines</li>
                </ul>
              </div>
            </div>
          </FuturisticCard>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gradient mb-6">Ready to Experience the Future?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </button>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
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
