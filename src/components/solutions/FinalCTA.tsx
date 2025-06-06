
import FuturisticCard from '../FuturisticCard';
import { Button } from '../ui/button';

const FinalCTA = () => {
  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  return (
    <FuturisticCard variant="neon" className="p-12 text-center mt-16">
      <h2 className="text-3xl font-bold text-gradient mb-4">Ready to See GrofleX in Action?</h2>
      <p className="text-white/80 mb-8 text-lg">Choose your path and discover how GrofleX delivers clarity for your specific role</p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button 
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
        >
          Start Free Trial
        </Button>
        <Button variant="outline" className="border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
          Book a Demo
        </Button>
      </div>
    </FuturisticCard>
  );
};

export default FinalCTA;
