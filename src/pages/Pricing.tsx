
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
      price: '$49',
      period: '/user/month',
      description: 'Perfect for small businesses getting started',
      dataSize: '1GB',
      aiAssistant: 'Guided (basic Q&A)',
      dashboards: '3',
      dataSources: '2 connectors',
      ssoAudit: 'No',
      support: 'Email',
      popular: false
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/user/month',
      description: 'Ideal for growing businesses',
      dataSize: '5GB',
      aiAssistant: 'Predictive insights',
      dashboards: '25',
      dataSources: 'All connectors',
      ssoAudit: 'No',
      support: 'Email + chat',
      popular: true
    },
    {
      name: 'Growth',
      price: '$249',
      period: '/user/month',
      description: 'For established companies scaling fast',
      dataSize: '25GB',
      aiAssistant: 'Prescriptive + "What-If"',
      dashboards: '100+',
      dataSources: 'All + premium APIs',
      ssoAudit: 'Yes',
      support: 'Priority + onboarding',
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
            <FuturisticCard className="p-2 flex rounded-full">
              <button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white px-6 py-2 rounded-full">Monthly</button>
              <button className="text-white/80 px-6 py-2 rounded-full hover:text-white transition-colors">
                Yearly (Save 20%)
              </button>
            </FuturisticCard>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
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

                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex justify-between text-white/80">
                    <span>Incoming Data Size:</span>
                    <span className="text-white font-semibold">{plan.dataSize}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>AI Assistant:</span>
                    <span className="text-white font-semibold text-right flex-1 ml-2">{plan.aiAssistant}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Dashboards:</span>
                    <span className="text-white font-semibold">{plan.dashboards}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Data Sources:</span>
                    <span className="text-white font-semibold text-right flex-1 ml-2">{plan.dataSources}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>SSO and Audit Trail:</span>
                    <span className="text-white font-semibold">{plan.ssoAudit}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Support:</span>
                    <span className="text-white font-semibold text-right flex-1 ml-2">{plan.support}</span>
                  </div>
                </div>

                <button 
                  onClick={handleGetStarted}
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-brand-purple to-brand-coral text-white hover:shadow-xl'
                      : 'glass-card border border-brand-purple/50 text-white hover:bg-brand-purple/20'
                  }`}
                >
                  Get Started
                </button>
              </FuturisticCard>
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
