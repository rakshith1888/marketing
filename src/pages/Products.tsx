
import Layout from '../components/Layout';

const Products = () => {
  const products = [
    {
      title: 'Groflex AI',
      description: 'Advanced artificial intelligence solutions for business automation',
      features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics'],
      price: 'Custom Pricing'
    },
    {
      title: 'Groflex Cloud',
      description: 'Scalable cloud infrastructure with enterprise-grade security',
      features: ['99.9% Uptime', 'Auto Scaling', 'Global CDN'],
      price: 'Starting at $99/mo'
    },
    {
      title: 'Groflex Analytics',
      description: 'Real-time data analytics and business intelligence platform',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      price: 'Starting at $149/mo'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Our Products</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover our suite of cutting-edge products designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-gradient mb-4">{product.title}</h3>
                <p className="text-white/80 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-brand-purple font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-white/70 flex items-center">
                        <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-brand-cream font-semibold">{product.price}</span>
                  <button className="bg-gradient-purple text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8">Contact our team to find the perfect product solution for your business needs</p>
            <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
