import { useState } from 'react';
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  const getPrice = (monthlyPrice: number) => {
    if (isYearly) {
      switch (monthlyPrice) {
        case 49: return 588;
        case 99: return 1188;
        case 249: return 2988;
        default: return monthlyPrice * 12;
      }
    }
    return monthlyPrice;
  };

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 49,
      features: [
        { label: 'Incoming Data Size', value: '1GB' },
        { label: 'AI Assistant', value: 'Guided (basic Q&A)' },
        { label: 'Dashboards', value: '3' },
        { label: 'Data Sources', value: '2 connectors' },
        { label: 'SSO and Audit Trail', value: 'No' },
        { label: 'Support', value: 'Email' }
      ],
      popular: false
    },
    {
      name: 'Pro',
      monthlyPrice: 99,
      features: [
        { label: 'Incoming Data Size', value: '5GB' },
        { label: 'AI Assistant', value: 'Predictive insights' },
        { label: 'Dashboards', value: '25' },
        { label: 'Data Sources', value: 'All connectors' },
        { label: 'SSO and Audit Trail', value: 'No' },
        { label: 'Support', value: 'Email + chat' }
      ],
      popular: true
    },
    {
      name: 'Growth',
      monthlyPrice: 249,
      features: [
        { label: 'Incoming Data Size', value: '25GB' },
        { label: 'AI Assistant', value: 'Prescriptive + "What-If"' },
        { label: 'Dashboards', value: '100+' },
        { label: 'Data Sources', value: 'All + premium APIs' },
        { label: 'SSO and Audit Trail', value: 'Yes' },
        { label: 'Support', value: 'Priority + onboarding' }
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
            <p className="text-xl text-white/80 dark:text-white/80 light:text-foreground/80 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core features.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/20 light:border-black/20 rounded-full p-2 flex">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  !isYearly 
                    ? 'bg-gradient-to-r from-brand-purple to-brand-coral text-white' 
                    : 'text-white/80 dark:text-white/80 light:text-foreground/80 hover:text-white dark:hover:text-white light:hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  isYearly 
                    ? 'bg-gradient-to-r from-brand-purple to-brand-coral text-white' 
                    : 'text-white/80 dark:text-white/80 light:text-foreground/80 hover:text-white dark:hover:text-white light:hover:text-foreground'
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-md border ${
                  plan.popular 
                    ? 'border-brand-purple/60 shadow-lg shadow-brand-purple/20' 
                    : 'border-white/20 dark:border-white/20 light:border-black/20'
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
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-foreground mb-6">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-4xl font-bold text-white dark:text-white light:text-foreground">${getPrice(plan.monthlyPrice)}</span>
                    <span className="text-white/60 dark:text-white/60 light:text-foreground/60 ml-2">
                      {isYearly ? '/year' : '/user/month'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex justify-between items-start">
                      <span className="text-white/70 dark:text-white/70 light:text-foreground/70 text-sm font-medium">{feature.label}:</span>
                      <span className="text-white dark:text-white light:text-foreground text-sm font-semibold text-right ml-2">{feature.value}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button 
                  onClick={handleGetStarted}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-coral to-brand-purple text-white hover:shadow-lg'
                      : 'border border-white/30 dark:border-white/30 light:border-black/30 text-white dark:text-white light:text-foreground hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10'
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
                    <TableHead className="text-white dark:text-white light:text-foreground font-semibold">Tier</TableHead>
                    <TableHead className="text-white dark:text-white light:text-foreground font-semibold">Starter</TableHead>
                    <TableHead className="text-white dark:text-white light:text-foreground font-semibold">Pro</TableHead>
                    <TableHead className="text-white dark:text-white light:text-foreground font-semibold">Growth</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white dark:text-white light:text-foreground font-medium">Price</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">
                      ${getPrice(49)}{isYearly ? '/year' : '/user/month'}
                    </TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">
                      ${getPrice(99)}{isYearly ? '/year' : '/user/month'}
                    </TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">
                      ${getPrice(249)}{isYearly ? '/year' : '/user/month'}
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white dark:text-white light:text-foreground font-medium">Incoming Data Size</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">1GB</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">5GB</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">25GB</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white dark:text-white light:text-foreground font-medium">AI Assistant</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">Guided (basic Q&A)</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">Predictive insights</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">Prescriptive + "What-If"</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white dark:text-white light:text-foreground font-medium">Dashboards</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">3</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">25</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">100+</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white dark:text-white light:text-foreground font-medium">Data Sources</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">2 connectors</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">All connectors</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">All + premium APIs</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white dark:text-white light:text-foreground font-medium">SSO and Audit Trail</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">No</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">No</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">Yes</TableCell>
                  </TableRow>
                  <TableRow className="border-brand-purple/20">
                    <TableCell className="text-white dark:text-white light:text-foreground font-medium">Support</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">Email</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">Email + chat</TableCell>
                    <TableCell className="text-white/80 dark:text-white/80 light:text-foreground/80">Priority + onboarding</TableCell>
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
                  <AccordionItem key={index} value={`item-${index}`} className="border border-white/20 dark:border-white/20 light:border-black/20 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-2 text-left hover:bg-brand-purple/20 hover:text-brand-cream transition-all duration-300 text-sm font-semibold text-white dark:text-white light:text-foreground [&[data-state=open]]:bg-brand-purple/30 [&[data-state=open]]:text-brand-cream">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-2 text-white/80 dark:text-white/80 light:text-foreground/80 bg-white/5 text-sm">
                      <p>{faq.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FuturisticCard>

          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 dark:text-white/80 light:text-foreground/80 mb-8">Join thousands of businesses already using Groflex</p>
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
