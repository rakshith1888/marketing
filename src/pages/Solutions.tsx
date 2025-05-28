
import Layout from '../components/Layout';

const Solutions = () => {
  const solutions = [
    {
      title: 'Enterprise Transformation',
      description: 'Complete digital transformation solutions for large enterprises',
      icon: '🚀',
      benefits: ['Increased Efficiency', 'Cost Reduction', 'Scalable Architecture']
    },
    {
      title: 'Small Business Growth',
      description: 'Tailored solutions to accelerate small and medium business growth',
      icon: '📈',
      benefits: ['Quick Implementation', 'Affordable Pricing', 'Expert Support']
    },
    {
      title: 'Industry Specific',
      description: 'Specialized solutions for healthcare, finance, and retail sectors',
      icon: '🏢',
      benefits: ['Compliance Ready', 'Industry Expertise', 'Custom Integration']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs and industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-6xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{solution.title}</h3>
                <p className="text-white/80 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-brand-purple font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-white/70 flex items-center">
                        <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="bg-gradient-purple text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 w-full">
                  Explore Solution
                </button>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="glass-card p-12 mb-16">
            <h2 className="text-3xl font-bold text-gradient text-center mb-12">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your business needs' },
                { step: '02', title: 'Strategy', desc: 'Developing the perfect solution' },
                { step: '03', title: 'Implementation', desc: 'Executing with precision' },
                { step: '04', title: 'Optimization', desc: 'Continuous improvement' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-purple mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
