
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-purple-dark/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient">Clarity to Know</span>
              <br />
              <span className="text-white">What to Do Next</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
              Predictive analytics. Prescriptive next steps. 
              <br />
              Powered by AI, designed for decisive leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-brand-purple/50 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                See How It Works
              </button>
            </div>
          </div>

          {/* Right side - Dashboard Preview */}
          <div className="relative">
            {/* Main Dashboard Mockup */}
            <div className="glass-card p-6 rounded-2xl border border-brand-purple/30 shadow-2xl">
              <div className="bg-black/40 rounded-lg p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-brand-purple font-semibold">GrofleX Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-brand-coral rounded-full"></div>
                    <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                    <div className="w-3 h-3 bg-brand-cream rounded-full"></div>
                  </div>
                </div>
                
                {/* AI Recommendations Panel */}
                <div className="bg-gradient-to-r from-brand-purple/20 to-brand-coral/20 p-4 rounded-lg mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-brand-coral rounded-full animate-pulse"></div>
                    <span className="text-brand-coral text-sm font-semibold">AI Recommendations</span>
                  </div>
                  <p className="text-white/90 text-sm mb-2">Customer churn risk increased 23% this quarter</p>
                  <div className="bg-black/30 p-3 rounded border-l-4 border-brand-coral">
                    <p className="text-white/80 text-xs">💡 Suggested Action: Launch retention campaign for high-value segments</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="text-brand-purple text-xs mb-1">Revenue Forecast</div>
                    <div className="text-white font-bold text-lg">$2.4M</div>
                    <div className="text-green-400 text-xs">↗ +12%</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg">
                    <div className="text-brand-coral text-xs mb-1">Risk Score</div>
                    <div className="text-white font-bold text-lg">7.2</div>
                    <div className="text-yellow-400 text-xs">⚠ Monitor</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-black/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 text-xs">Predictive Trend</span>
                    <span className="text-brand-purple text-xs">Next 90 days</span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-brand-purple/30 to-brand-coral/30 rounded relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-brand-purple/50 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Q&A Interface */}
              <div className="bg-black/40 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center text-xs">🤖</div>
                  <span className="text-white/80 text-sm">Ask GrofleX anything...</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Why is churn rising in Q4?"
                  className="w-full bg-black/30 text-white/80 placeholder-white/40 text-sm p-2 rounded border border-brand-purple/30 focus:outline-none focus:border-brand-purple"
                  readOnly
                />
              </div>
            </div>

            {/* Floating Action Cards */}
            <div className="absolute -top-4 -right-4 glass-card p-3 rounded-lg border border-brand-coral/30 animate-float">
              <div className="text-brand-coral text-xs font-semibold mb-1">Next Action</div>
              <div className="text-white/80 text-xs">Review segment analysis</div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-lg border border-brand-purple/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-brand-purple text-xs font-semibold mb-1">Prediction</div>
              <div className="text-white/80 text-xs">Q1 growth: +18%</div>
            </div>
          </div>
        </div>

        {/* Animated Flywheel */}
        <div className="glass-card p-8 max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center text-2xl mx-auto animate-pulse">
                🔗
              </div>
              <h3 className="text-brand-purple font-semibold">Connect</h3>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center text-2xl mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}>
                🔮
              </div>
              <h3 className="text-brand-purple font-semibold">Predict</h3>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center text-2xl mx-auto animate-pulse" style={{ animationDelay: '1s' }}>
                📋
              </div>
              <h3 className="text-brand-purple font-semibold">Prescribe</h3>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center text-2xl mx-auto animate-pulse" style={{ animationDelay: '1.5s' }}>
                ⚡
              </div>
              <h3 className="text-brand-purple font-semibold">Act</h3>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-brand-coral rounded-full animate-glow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-brand-purple rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-brand-cream rounded-full animate-glow" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
