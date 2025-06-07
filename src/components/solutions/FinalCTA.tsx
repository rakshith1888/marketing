
import FuturisticCard from '../FuturisticCard';
import { Button } from '../ui/button';

const FinalCTA = () => {
  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  const handleBookDemo = () => {
    window.open('https://sibforms.com/serve/MUIFAAKayAu5X2pGgP6oFM-sUgP1mZMYaQqiAVUS39zY8bDJNjnT1ArRNIzt21QdCoz3gdKbyiyvYP7q9VKclwSvNI-yKjNZGm_sSyJWbAg2298SfqQ1JWH5wI7Pmm6DJfS5_TFUdnGoiVflgwr2DCTcTD1dHxXX-qkpmxp_fEzVot7GqFH9-4hOFqkED-PokcoO7dlDhVulWHoy', '_blank');
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
        <Button 
          onClick={handleBookDemo}
          className="bg-gradient-purple text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300"
        >
          Book a Demo
        </Button>
      </div>
    </FuturisticCard>
  );
};

export default FinalCTA;
