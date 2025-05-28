
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
      title: 'GrofleX AI Engine',
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
          {/* Hero Section with Dashboard Demo */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">AI that connects systems,</span>
                <br />
                <span className="text-white">predicts outcomes, and prescribes next steps</span>
              </h1>
              <p className="text-xl text-white/80">
                —in plain language
              </p>
            </div>

            {/* Interactive Dashboard Demo */}
            <div className="relative">
              {/* Main Platform Interface */}
              <div className="glass-card p-6 rounded-2xl border border-brand-purple/30 shadow-2xl">
                <div className="bg-black/40 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-brand-purple font-semibold text-lg">GrofleX Platform</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                  </div>
                  
                  {/* Multi-role Dashboard Tabs */}
                  <div className="flex space-x-4 mb-6">
                    {['Executive', 'BI Manager', 'Analyst'].map((role, index) => (
                      <button key={role} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        index === 0 
                          ? 'bg-brand-purple text-white' 
                          : 'bg-black/30 text-white/60 hover:bg-brand-purple/20'
                      }`}>
                        {role}
                      </button>
                    ))}
                  </div>

                  {/* Executive Dashboard View */}
                  <div className="space-y-4">
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 p-4 rounded-lg">
                        <div className="text-brand-purple text-xs mb-1">Revenue Pipeline</div>
                        <div className="text-white font-bold text-xl">$4.2M</div>
                        <div className="text-green-400 text-xs">↗ +15% vs forecast</div>
                      </div>
                      <div className="bg-gradient-to-br from-brand-coral/20 to-brand-purple/20 p-4 rounded-lg">
                        <div className="text-brand-coral text-xs mb-1">Market Risk</div>
                        <div className="text-white font-bold text-xl">Low</div>
                        <div className="text-blue-400 text-xs">↓ -8% this quarter</div>
                      </div>
                      <div className="bg-gradient-to-br from-brand-cream/20 to-brand-purple/20 p-4 rounded-lg">
                        <div className="text-brand-cream text-xs mb-1">Action Items</div>
                        <div className="text-white font-bold text-xl">3</div>
                        <div className="text-yellow-400 text-xs">2 high priority</div>
                      </div>
                    </div>

                    {/* AI Insights Panel */}
                    <div className="bg-gradient-to-r from-brand-purple/20 to-brand-coral/20 p-4 rounded-lg border border-brand-purple/30">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-brand-coral rounded-full animate-pulse"></div>
                        <span className="text-brand-coral font-semibold text-sm">AI Insights</span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-white/90 text-sm">🎯 Customer acquisition cost trending 12% below target</p>
                        <p className="text-white/90 text-sm">⚠️ Inventory levels suggest supply chain optimization needed</p>
                        <div className="bg-black/30 p-3 rounded border-l-4 border-brand-coral mt-3">
                          <p className="text-white/80 text-xs">💡 Recommended: Increase marketing spend in Q1 by 8% to capitalize on efficiency gains</p>
                        </div>
                      </div>
                    </div>

                    {/* Predictive Chart */}
                    <div className="bg-black/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white/80 text-sm font-semibold">90-Day Revenue Forecast</span>
                        <span className="text-brand-purple text-xs">Confidence: 92%</span>
                      </div>
                      <div className="h-20 bg-gradient-to-r from-brand-purple/30 via-brand-coral/20 to-brand-cream/30 rounded relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-1/3 h-12 bg-brand-purple/40 rounded animate-pulse"></div>
                        <div className="absolute bottom-0 left-1/3 w-1/3 h-16 bg-brand-coral/40 rounded animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute bottom-0 right-0 w-1/3 h-20 bg-brand-cream/40 rounded animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                        <div className="absolute top-2 right-4 text-white/60 text-xs">Projected Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Callouts */}
              <div className="absolute -top-6 -right-6 glass-card p-3 rounded-lg border border-brand-coral/30 animate-float">
                <div className="text-brand-coral text-xs font-semibold mb-1">Natural Language</div>
                <div className="text-white/80 text-xs">"Show me Q4 risks"</div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card p-3 rounded-lg border border-brand-purple/30 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-brand-purple text-xs font-semibold mb-1">Real-time Sync</div>
                <div className="text-white/80 text-xs">Updates every 15min</div>
              </div>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="glass-card p-12 mb-16">
            <h2 className="text-3xl font-bold text-gradient text-center mb-12">How GrofleX Works</h2>
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
                <h3 className="text-brand-coral font-semibold">GrofleX AI</h3>
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
                <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
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
                    GrofleX doesn't replace your existing tools—it makes them smarter.
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
            <h2 className="text-3xl font-bold text-gradient mb-4">See GrofleX in Action</h2>
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
