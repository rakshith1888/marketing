
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';

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
      name: 'Business',
      price: '$599',
      period: '/month',
      description: 'For established companies scaling fast',
      features: [
        'Up to 100 users',
        'Premium analytics',
        '24/7 phone support',
        '500GB storage',
        'Advanced API access',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
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

  const faqs = [
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
    },
    {
      q: 'Do you offer discounts for annual subscriptions?',
      a: 'Yes, we offer a 20% discount when you choose our yearly billing option. This applies to all plans.'
    },
    {
      q: 'Is customer support included in all plans?',
      a: 'All plans include customer support. Starter plans get email support, Professional plans get priority support, and Enterprise plans get dedicated support with a personal account manager.'
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

          <div className="flex justify-center mb-12">
            <FuturisticCard className="p-2 flex rounded-full">
              <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white px-6 py-2 rounded-full">Monthly</button>
              <button className="text-white/80 px-6 py-2 rounded-full hover:text-white transition-colors">
                Yearly (Save 20%)
              </button>
            </FuturisticCard>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                variant={plan.popular ? "neon" : "default"}
                className={`p-8 relative hover:bg-white/10 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-brand-purple scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-coral to-brand-cream text-black px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gradient mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-4 text-sm">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-1 text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80 text-sm">
                      <div className="w-2 h-2 bg-brand-coral rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
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

          <FuturisticCard variant="neon" className="p-6">
            <h2 className="text-xl font-bold text-gradient text-center mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-white/20 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-2 text-left hover:bg-brand-purple/20 hover:text-brand-cream transition-all duration-300 text-sm font-semibold text-white [&[data-state=open]]:bg-brand-purple/30 [&[data-state=open]]:text-brand-cream">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-2 text-white/80 bg-white/5 text-sm">
                      <p>{faq.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FuturisticCard>

          <div className="text-center mt-12">
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
