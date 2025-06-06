
import FuturisticCard from '../FuturisticCard';

const IndustrySolutions = () => {
  const industries = [
    {
      name: 'Finance',
      icon: '💰',
      description: 'Risk assessment and portfolio analytics'
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Supply chain optimization and quality metrics'
    },
    {
      name: 'E-commerce',
      icon: '🛒',
      description: 'Customer insights and sales forecasting'
    },
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Patient outcomes and operational efficiency'
    },
    {
      name: 'Financial Services',
      icon: '🏦',
      description: 'Compliance monitoring and client analytics'
    },
    {
      name: 'Retail',
      icon: '🏪',
      description: 'Inventory management and customer behavior'
    }
  ];

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gradient mb-4">Industry Solutions</h2>
        <p className="text-white/80 text-lg">Tailored insights for every industry</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry, idx) => (
          <FuturisticCard key={idx} className="p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">{industry.icon}</div>
            <h3 className="text-brand-cream font-semibold text-lg mb-2">{industry.name}</h3>
            <p className="text-white/70 text-sm">{industry.description}</p>
          </FuturisticCard>
        ))}
      </div>
    </div>
  );
};

export default IndustrySolutions;
