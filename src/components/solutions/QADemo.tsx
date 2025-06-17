
import FuturisticCard from '../FuturisticCard';
import { Button } from '../ui/button';

const QADemo = () => {
  const handleLiveDemo = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  return (
    <div className="mt-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gradient mb-3">Ask Groflex Anything</h2>
        <p className="text-white/80">Experience our AI-powered Q&A interface with natural language queries</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <FuturisticCard className="bg-black/40 p-6 border border-brand-purple/30">
          <div className="space-y-3 mb-4">
            <div className="bg-brand-purple/20 p-3 rounded-lg border-l-4 border-brand-purple">
              <p className="text-white/90 text-sm">"Why is our churn rate increasing in Q3?"</p>
            </div>
            <div className="bg-brand-coral/20 p-3 rounded-lg border-l-4 border-brand-coral">
              <p className="text-white/90 text-sm">"What's our highest revenue risk this quarter?"</p>
            </div>
            <div className="bg-green-500/20 p-3 rounded-lg border-l-4 border-green-500">
              <p className="text-white/90 text-sm">"Which marketing channels should we prioritize?"</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={handleLiveDemo}
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-6 py-3 rounded-full"
            >
              Try Live Demo
            </Button>
          </div>
        </FuturisticCard>
      </div>
    </div>
  );
};

export default QADemo;
