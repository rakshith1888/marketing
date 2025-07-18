
import Layout from '../components/Layout';

const Products = () => {
  const features = [
    {
      title: 'Data Integration Layer',
      description: 'Connect any data source, from databases to APIs, with our universal connectors',
      icon: '🔗',
      details: ['200+ pre-built connectors', 'Real-time and batch processing', 'Secure API management']
    },
    {
      title: 'Groflex AI Engine',
      description: 'Self-learning algorithms that get smarter with every decision you make',
      icon: '🧠',
      details: ['Machine learning models', 'Pattern recognition', 'Continuous optimization']
    },
    {
      title: 'Predictive Models & Prescriptive Actions',
      description: 'Not just what will happen, but what you should do about it',
      icon: '🎯',
      details: ['Risk forecasting', 'Opportunity identification', 'Action recommendations']
    },
    {
      title: 'Natural Language Q&A',
      description: 'Ask business questions in plain English, get insights in seconds',
      icon: '💬',
      details: ['Conversational interface', 'Context-aware responses', 'Multi-language support']
    },
    {
      title: 'Role-Based Dashboards',
      description: 'Customized views for executives, managers, and analysts',
      icon: '📊',
      details: ['Executive summaries', 'Operational metrics', 'Detailed analytics']
    },
    {
      title: 'Security & Governance',
      description: 'Enterprise-grade security with compliance built-in',
      icon: '🔒',
      details: ['SOC 2 Type II', 'Data encryption', 'Access controls']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">AI that connects systems,</span>
              <br />
              <span className="text-white">predicts outcomes, and prescribes next steps</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              —in plain language
            </p>
          </div>

          {/* Architecture Overview */}
          <div className="glass-card p-12 mb-16">
            <h2 className="text-3xl font-bold text-gradient text-center mb-12">How Groflex Works</h2>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  📥
                </div>
                <h3 className="text-brand-purple font-semibold">Data Sources</h3>
                <p className="text-white/70 text-sm">APIs, Databases, Files</p>
              </div>
              
              <div className="text-brand-coral text-2xl">→</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-coral rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  🧠
                </div>
                <h3 className="text-brand-coral font-semibold">Groflex AI</h3>
                <p className="text-white/70 text-sm">Process, Predict, Prescribe</p>
              </div>
              
              <div className="text-brand-coral text-2xl">→</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  📊
                </div>
                <h3 className="text-brand-cream font-semibold">Insights</h3>
                <p className="text-white/70 text-sm">Dashboards, Alerts, Actions</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gradient text-center mb-12">Product Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gradient mb-4">{feature.title}</h3>
                  <p className="text-white/80 mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-white/70">
                        <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modular Design Section */}
          <div className="glass-card p-12 mb-16">
            <h2 className="text-3xl font-bold text-gradient text-center mb-8">Modular Design</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Scale Features as Teams Grow</h3>
                <div className="space-y-4">
                  {[
                    'Start with basic analytics',
                    'Add predictive capabilities',
                    'Expand to prescriptive insights',
                    'Enterprise-wide deployment'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-purple rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-white/80">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Integration into Existing BI Ecosystems</h3>
                <div className="bg-black/40 p-6 rounded-lg">
                  <p className="text-white/80 mb-4">
                    Groflex doesn't replace your existing tools—it makes them smarter.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Works with Tableau, Power BI, Looker</li>
                    <li>• Enhances existing dashboards with AI</li>
                    <li>• Maintains current workflows</li>
                    <li>• No migration required</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Section */}
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">See Groflex in Action</h2>
            <p className="text-white/80 mb-8">Experience the power of predictive analytics and prescriptive insights</p>
            <div className="bg-black/40 rounded-lg p-8 mb-8">
              <div className="text-6xl mb-4">🎥</div>
              <p className="text-white/60">Interactive Demo Coming Soon</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
                Try Live Demo
              </button>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                Schedule Walkthrough
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
