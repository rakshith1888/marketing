
const Hero = () => {
  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-purple-dark/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="text-gradient">Clarity to Know</span>
          <br />
          <span className="text-white">What to Do Next</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          Predictive analytics. Prescriptive next steps. 
          <br />
          Powered by AI, designed for decisive leaders.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button 
            onClick={handleGetStarted}
            className="bg-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-brand-coral/50 transition-all duration-300 transform hover:scale-105"
          >
            Start Free Trial
          </button>
          <a 
            href="/products"
            className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300 inline-block"
          >
            See How It Works
          </a>
        </div>
        
        {/* Animated Flywheel */}
        <div className="glass-card p-8 max-w-4xl mx-auto">
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
