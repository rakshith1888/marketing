import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const Pricing = () => {
  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

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
      a: 'All plans include customer support. Starter plans get email support, Pro plans get email + chat support, and Growth plans get priority support with onboarding.'
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
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-2 flex">
              <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white px-6 py-2 rounded-full">Monthly</button>
              <button className="text-white/80 px-6 py-2 rounded-full hover:text-white transition-colors">
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-brand-purple/20 to-brand-purple/10 border-2 border-brand-purple/60' 
                    : 'bg-white/5 border border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-coral to-brand-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                  <p className="text-white/70 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 ml-2">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-brand-coral rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button 
                  onClick={handleGetStarted}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-coral to-brand-purple text-white hover:shadow-lg'
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Table */}
          <FuturisticCard className="p-8 mb-16">
            <h2 className="text-2xl font-bold text-gradient text-center mb-8">Compare Plans</h2>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="border-brand-purple/30">
                    <TableHead className="text-white font-semibold">Tier</TableHead>
                    <TableHead className="text-white font-semibold">Starter</TableHead>
                    <TableHead className="text-white font-semibold">Pro</TableHead>
                    <TableHead className="text-white font-semibold">Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white font-medium">Price</TableCell>
                    <TableCell className="text-white/80">$49/user/month</TableCell>
                    <TableCell className="text-white/80">$99/user/month</TableCell>
                    <TableCell className="text-white/80">$249/user/month</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white font-medium">Incoming Data Size</TableCell>
                    <TableCell className="text-white/80">1GB</TableCell>
                    <TableCell className="text-white/80">5GB</TableCell>
                    <TableCell className="text-white/80">25GB</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white font-medium">AI Assistant</TableCell>
                    <TableCell className="text-white/80">Guided (basic Q&A)</TableCell>
                    <TableCell className="text-white/80">Predictive insights</TableCell>
                    <TableCell className="text-white/80">Prescriptive + "What-If"</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white font-medium">Dashboards</TableCell>
                    <TableCell className="text-white/80">3</TableCell>
                    <TableCell className="text-white/80">25</TableCell>
                    <TableCell className="text-white/80">100+</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white font-medium">Data Sources</TableCell>
                    <TableCell className="text-white/80">2 connectors</TableCell>
                    <TableCell className="text-white/80">All connectors</TableCell>
                    <TableCell className="text-white/80">All + premium APIs</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white font-medium">SSO and Audit Trail</TableCell>
                    <TableCell className="text-white/80">No</TableCell>
                    <TableCell className="text-white/80">No</TableCell>
                    <TableCell className="text-white/80">Yes</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white font-medium">Support</TableCell>
                    <TableCell className="text-white/80">Email</TableCell>
                    <TableCell className="text-white/80">Email + chat</TableCell>
                    <TableCell className="text-white/80">Priority + onboarding</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </FuturisticCard>

          {/* FAQ Section */}
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
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
