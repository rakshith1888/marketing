
import FuturisticCard from '../FuturisticCard';
import { Button } from '../ui/button';

const QADemo = () => {
  return (
    <FuturisticCard variant="hologram" className="p-12 mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">Ask GrofleX Anything</h2>
        <p className="text-white/80 text-lg">Experience our AI-powered Q&A interface with natural language queries</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <FuturisticCard className="bg-black/40 p-8 border border-brand-purple/30">
          <div className="space-y-4 mb-6">
            <div className="bg-brand-purple/20 p-4 rounded-lg border-l-4 border-brand-purple">
              <p className="text-white/90">"Why is our churn rate increasing in Q3?"</p>
            </div>
            <div className="bg-brand-coral/20 p-4 rounded-lg border-l-4 border-brand-coral">
              <p className="text-white/90">"What's our highest revenue risk this quarter?"</p>
            </div>
            <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-white/90">"Which marketing channels should we prioritize?"</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full">
              Try Live Demo
            </Button>
          </div>
        </FuturisticCard>
      </div>
    </FuturisticCard>
  );
};

export default QADemo;
