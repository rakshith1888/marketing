
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';

const Solutions = () => {
  const solutions = [
    {
      id: 'business-leaders',
      title: 'Business Leaders',
      subtitle: 'Strategic Decision Making',
      pain: 'Can\'t get cross-functional visibility',
      gain: 'Forecasting + ROI metrics on day 1',
      description: 'See where you\'re heading and what to do about it—before others do.',
      icon: '👔',
      features: ['Executive Dashboards', 'Risk Forecasting', 'ROI Tracking', 'Strategic Planning'],
      cta: 'See How GrofleX Drives ROI',
      metrics: ['85% faster decision making', '3x ROI visibility', '67% reduction in strategic risks']
    },
    {
      id: 'bi-managers',
      title: 'BI Managers',
      subtitle: 'Operational Intelligence',
      pain: 'Reporting fatigue + bottlenecks',
      gain: 'Instant insights with no analyst lag',
      description: 'Deliver predictive dashboards that tell leadership what matters.',
      icon: '📊',
      features: ['Automated Reporting', 'Predictive Analytics', 'Team Collaboration', 'Data Governance'],
      cta: 'Explore the Platform',
      metrics: ['90% less manual reporting', '5x faster insights delivery', '60% analyst time savings']
    },
    {
      id: 'analysts',
      title: 'Analysts',
      subtitle: 'Advanced Analytics',
      pain: 'Manual dashboards & reactive reporting',
      gain: 'Self-serve AI. Ask, predict, act.',
      description: 'Automate insight delivery and eliminate low-impact work.',
      icon: '🔍',
      features: ['Natural Language Queries', 'Automated Insights', 'Model Building', 'Data Exploration'],
      cta: 'Try It Free',
      metrics: ['70% reduction in manual work', '4x faster analysis', '95% query automation']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Clarity for Everyone—</span>
              <br />
              <span className="text-white">No Matter Your Role</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Tailored solutions that address specific pain points and deliver measurable outcomes for every decision-maker
            </p>
          </div>

          {/* Tabbed Interface */}
          <FuturisticCard variant="neon" className="p-8">
            <Tabs defaultValue="business-leaders" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/5 border border-white/10">
                {solutions.map((solution) => (
                  <TabsTrigger 
                    key={solution.id}
                    value={solution.id} 
                    className="text-white data-[state=active]:bg-brand-purple/20 data-[state=active]:text-brand-cream"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{solution.icon}</span>
                      <span className="font-semibold">{solution.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {solutions.map((solution) => (
                <TabsContent key={solution.id} value={solution.id} className="mt-0">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Content Side - Takes 2 columns */}
                    <div className="lg:col-span-2">
                      <div className="mb-8">
                        <h2 className="text-4xl font-bold text-gradient mb-4">{solution.title}</h2>
                        <p className="text-brand-purple text-xl mb-6">{solution.subtitle}</p>
                        <p className="text-xl text-white/90 mb-8">{solution.description}</p>
                      </div>
                      
                      {/* Pain/Gain Cards */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <FuturisticCard className="bg-red-500/10 border-red-500/30 p-6">
                          <h4 className="text-red-400 font-semibold mb-3 text-lg">Current Pain:</h4>
                          <p className="text-white/80 text-lg">{solution.pain}</p>
                        </FuturisticCard>
                        <FuturisticCard className="bg-green-500/10 border-green-500/30 p-6">
                          <h4 className="text-green-400 font-semibold mb-3 text-lg">With GrofleX:</h4>
                          <p className="text-white/80 text-lg">{solution.gain}</p>
                        </FuturisticCard>
                      </div>

                      {/* Metrics */}
                      <div className="mb-8">
                        <h4 className="text-brand-cream font-semibold mb-4 text-lg">Key Outcomes:</h4>
                        <div className="space-y-3">
                          {solution.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-brand-coral rounded-full"></div>
                              <span className="text-white/80">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-6 text-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        {solution.cta}
                      </Button>
                    </div>
                    
                    {/* Compact Features Side - Takes 1 column */}
                    <div>
                      <FuturisticCard className="bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 p-6">
                        <h4 className="text-brand-cream font-semibold mb-6 text-center text-lg">Key Features</h4>
                        <div className="space-y-3">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                              <div className="w-2 h-2 bg-brand-coral rounded-full flex-shrink-0"></div>
                              <p className="text-white/80 font-medium text-sm">{feature}</p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Compact Sample Dashboard Preview */}
                        <div className="mt-6 p-4 bg-black/20 rounded-lg border border-white/10">
                          <h5 className="text-brand-cream text-xs font-semibold mb-3 text-center">Dashboard Preview</h5>
                          <div className="space-y-2">
                            <div className="h-2 bg-gradient-to-r from-brand-purple/40 to-brand-coral/40 rounded-full w-3/4"></div>
                            <div className="h-2 bg-gradient-to-r from-brand-purple/40 to-brand-coral/40 rounded-full w-1/2"></div>
                            <div className="h-2 bg-gradient-to-r from-brand-purple/40 to-brand-coral/40 rounded-full w-5/6"></div>
                          </div>
                        </div>
                      </FuturisticCard>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </FuturisticCard>

          {/* GrofleX Q&A Demo Section */}
          <FuturisticCard variant="hologram" className="p-12 mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gradient mb-4">Ask GrofleX Anything</h2>
              <p className="text-white/80 text-lg">Experience our AI-powered Q&A interface with natural language queries</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FuturisticCard className="bg-black/40 p-8 border border-brand-purple/30">
                <div className="space-y-4 mb-6">
                  <div className="bg-brand-purple/20 p-4 rounded-lg border-l-4 border-brand-purple">
                    <p className="text-white/90">"Why is our churn rate increasing in Q3?"</p>
                  </div>
                  <div className="bg-brand-coral/20 p-4 rounded-lg border-l-4 border-brand-coral">
                    <p className="text-white/90">"What's our highest revenue risk this quarter?"</p>
                  </div>
                  <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-white/90">"Which marketing channels should we prioritize?"</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full">
                    Try Live Demo
                  </Button>
                </div>
              </FuturisticCard>
            </div>
          </FuturisticCard>

          {/* Final CTA Section */}
          <FuturisticCard variant="neon" className="p-12 text-center mt-16">
            <h2 className="text-3xl font-bold text-gradient mb-4">Ready to See GrofleX in Action?</h2>
            <p className="text-white/80 mb-8 text-lg">Choose your path and discover how GrofleX delivers clarity for your specific role</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                Book a Demo
              </Button>
            </div>
          </FuturisticCard>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
