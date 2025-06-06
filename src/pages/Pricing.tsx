
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        '10GB storage',
        'API access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        '100GB storage',
        'Full API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited users',
        'Enterprise analytics',
        'Dedicated support',
        'Unlimited storage',
        'Advanced security',
        'Custom development'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features.
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-12">
            <FuturisticCard className="p-2 flex rounded-full">
              <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white px-6 py-2 rounded-full">Monthly</button>
              <button className="text-white/80 px-6 py-2 rounded-full hover:text-white transition-colors">
                Yearly (Save 20%)
              </button>
            </FuturisticCard>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                variant={plan.popular ? "neon" : "default"}
                className={`p-8 relative hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-brand-purple scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-coral to-brand-cream text-black px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gradient mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-brand-coral rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-purple to-brand-coral text-white hover:shadow-xl'
                      : 'glass-card border border-brand-purple/50 text-white hover:bg-brand-purple/20'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </FuturisticCard>
            ))}
          </div>

          {/* FAQ Section */}
          <FuturisticCard variant="neon" className="p-12">
            <h2 className="text-3xl font-bold text-gradient text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  q: 'Can I upgrade or downgrade my plan?',
                  a: 'Yes, you can change your plan at any time. Changes take effect immediately.'
                },
                {
                  q: 'Is there a free trial available?',
                  a: 'We offer a 14-day free trial for all plans. No credit card required.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
                },
                {
                  q: 'Can I cancel anytime?',
                  a: 'Yes, you can cancel your subscription at any time. No long-term contracts.'
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-brand-purple">{faq.q}</h3>
                  <p className="text-white/80">{faq.a}</p>
                </div>
              ))}
            </div>
          </FuturisticCard>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gradient mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8">Join thousands of businesses already using Groflex</p>
            <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
