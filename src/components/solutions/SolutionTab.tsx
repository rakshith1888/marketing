
import FuturisticCard from '../FuturisticCard';

interface SolutionTabProps {
  solution: {
    id: string;
    title: string;
    subtitle: string;
    pain: string;
    gain: string;
    description: string;
    icon: string;
    features: string[];
    cta: string;
    metrics: string[];
  };
  
}

const SolutionTab = ({ solution }: SolutionTabProps) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      {/* Content Side - Takes 2 columns */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gradient mb-4">{solution.title}</h2>
          <p className="text-brand-purple text-xl mb-6">{solution.subtitle}</p>
          <p className="text-xl text-white/90 mb-8">{solution.description}</p>
        </div>
        
        {/* Pain/Gain Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <FuturisticCard className="bg-red-500/10 border-red-500/30 p-6">
            <h4 className="text-red-400 font-semibold mb-3 text-lg">Current Pain:</h4>
            <p className="text-white/80 text-lg">{solution.pain}</p>
          </FuturisticCard>
          <FuturisticCard className="bg-green-500/10 border-green-500/30 p-6">
            <h4 className="text-green-400 font-semibold mb-3 text-lg">With Groflex:</h4>
            <p className="text-white/80 text-lg">{solution.gain}</p>
          </FuturisticCard>
        </div>

        {/* Metrics */}
        <div className="mb-8">
          <h4 className="text-brand-cream font-semibold mb-4 text-lg">Key Outcomes:</h4>
          <div className="space-y-3">
            {solution.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-coral rounded-full"></div>
                <span className="text-white/80">{metric}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* <Button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-6 text-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          {solution.cta}
        </Button> */}
      </div>
      
      {/* Compact Features Side - Takes 1 column */}
      <div>
        <FuturisticCard className="bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 p-6 h-full flex flex-col">
          {/* Dashboard Preview - Takes half the space */}
          <div className="flex-1 mb-6">
            <h5 className="text-brand-cream text-xs font-semibold mb-3 text-center">Dashboard Preview</h5>
            <div className="p-4 bg-black/20 rounded-lg border border-white/10 h-full flex items-center justify-center">
              {solution.id === 'business-leaders' ? (
                <div className="rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-purple/30 cursor-pointer hover:z-50 relative">
                  <img 
                    src="/lovable-uploads/homepage_image.png" 
                    alt="Business Leaders Dashboard"
                    className="w-full h-auto rounded transition-transform duration-300"
                  />
                </div>
              ) : solution.id === 'bi-managers' ? (
                <div className="rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-purple/30 cursor-pointer hover:z-50 relative">
                  <img 
                    src="/lovable-uploads/sol_analyst_image2.png" 
                    alt="BI Managers Dashboard"
                    className="w-full h-auto rounded transition-transform duration-300"
                  />
                </div>
              ) : solution.id === 'analysts' ? (
                <div className="rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-brand-purple/30 cursor-pointer hover:z-50 relative">
                  <img 
                    src="/lovable-uploads/sol_analyst_image.png" 
                    alt="Analysts Dashboard"
                    className="w-full h-auto rounded transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-brand-purple/40 to-brand-coral/40 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gradient-to-r from-brand-purple/40 to-brand-coral/40 rounded-full w-1/2"></div>
                  <div className="h-2 bg-gradient-to-r from-brand-purple/40 to-brand-coral/40 rounded-full w-5/6"></div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features - Takes half the space */}
          <div className="flex-1">
            <h4 className="text-brand-cream font-semibold mb-6 text-center text-lg">Key Features</h4>
            <div className="space-y-3">
              {solution.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <div className="w-2 h-2 bg-brand-coral rounded-full flex-shrink-0"></div>
                  <p className="text-white/80 font-medium text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </FuturisticCard>
      </div>
    </div>
  );
};

export default SolutionTab;
