import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { ArrowRight, Zap, Brain, Target, Users, TrendingUp, Shield, CheckCircle, MessageSquare, BarChart3, Database, Cloud, ChevronDown, Play, Briefcase, PresentationChart, ChartBar } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Predictive Forecasts',
      description: 'Built-in ML models forecast risks and opportunities before they happen'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Natural Language Q&A',
      description: 'Ask business questions in plain English, get context-aware recommendations'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Prescriptive Next Steps',
      description: 'Suggested next-best actions with decision framing tools'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-Time Sync',
      description: 'Live data updates ensure your decisions are based on current information'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Multi-Cloud Data Engine',
      description: 'Connect and analyze data from any source, anywhere'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI for Everyone',
      description: 'Natural language interface works across all roles—executives to analysts'
    }
  ];

  const audienceCards = [
    {
      title: 'Executives',
      description: 'See where you\'re heading and what to do about it—before others do.',
      icon: <Briefcase className="w-12 h-12" />
    },
    {
      title: 'BI Managers',
      description: 'Deliver predictive dashboards that tell leadership what matters.',
      icon: <PresentationChart className="w-12 h-12" />
    },
    {
      title: 'Analysts',
      description: 'Automate insight delivery and eliminate low-impact work.',
      icon: <ChartBar className="w-12 h-12" />
    }
  ];

  const testimonials = [
    {
      quote: "GrofleX helped us identify market shifts 3 months ahead of our competition",
      author: "Sarah Chen",
      role: "VP Strategy",
      company: "TechCorp"
    },
    {
      quote: "Finally, dashboards that tell us what to do, not just what happened",
      author: "Michael Rodriguez",
      role: "Director of BI",
      company: "DataFlow Inc"
    },
    {
      quote: "I spend 80% less time on reports and 80% more time on insights",
      author: "Emily Watson",
      role: "Senior Analyst",
      company: "Analytics Pro"
    }
  ];

  const integrations = [
    'Google', 'Salesforce', 'Mailchimp', 'Looker', 'Microsoft', 'AWS', 'Snowflake', 'Tableau'
  ];

  const faqs = [
    {
      question: "How does GrofleX's AI explainability work?",
      answer: "Our AI provides transparent reasoning for every recommendation, showing you the data sources, confidence levels, and logic behind each suggestion."
    },
    {
      question: "What data integrations does GrofleX support?",
      answer: "GrofleX connects to 150+ data sources including CRMs, ERPs, marketing platforms, cloud databases, and custom APIs."
    },
    {
      question: "How does this benefit our BI team specifically?",
      answer: "BI teams can automate report generation, focus on strategic analysis, and deliver prescriptive insights that drive executive action."
    },
    {
      question: "Is our data secure with GrofleX?",
      answer: "Yes, we use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and never store your raw data."
    },
    {
      question: "How quickly can we see results?",
      answer: "Most customers see predictive insights within 2 weeks of connecting their first data source."
    },
    {
      question: "What makes GrofleX different from traditional BI tools?",
      answer: "Unlike traditional BI that shows what happened, GrofleX predicts what will happen and prescribes what you should do about it."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-coral rounded-full blur-3xl opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">Clarity to Know</span><br />
            <span className="text-white">What to Do Next</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Predictive analytics. Prescriptive next steps.<br />
            Powered by AI, designed for decisive leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
              See How It Works
            </button>
          </div>
        </div>
      </div>

      {/* 2. PROBLEM SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Why Can't You See</span><br />
              <span className="text-white">What's Coming—Or What to Do About It?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                stat: '86%', 
                issue: 'Siloed Systems', 
                description: 'say their systems are too fragmented',
                quote: '"We have data everywhere but insights nowhere"' 
              },
              { 
                stat: '72%', 
                issue: 'Gut Decisions Still Dominate', 
                description: 'rely on intuition over dashboards',
                quote: '"I trust my gut more than our reports"' 
              },
              { 
                stat: '92%', 
                issue: 'No Prescriptive Path', 
                description: 'don\'t trust BI to tell them what to do next',
                quote: '"Our dashboards show what happened, not what to do"' 
              }
            ].map((item, index) => (
              <FuturisticCard key={index} variant="hologram">
                <div className="text-6xl font-bold text-gradient mb-6">{item.stat}</div>
                <h3 className="text-xl font-bold text-brand-purple mb-2">{item.issue}</h3>
                <p className="text-white/70 mb-4">{item.description}</p>
                <div className="border-l-4 border-brand-coral pl-4 italic text-white/70">
                  {item.quote}
                </div>
              </FuturisticCard>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
              Learn Why Clarity Matters
            </button>
          </div>
        </div>
      </section>

      {/* 3. AUDIENCE NAVIGATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Clarity, for Everyone</span><br />
              <span className="text-white">Who Makes Decisions</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {audienceCards.map((card, index) => (
              <FuturisticCard key={index} variant="neon" className="text-center">
                <div className="text-brand-purple mb-6 flex justify-center">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{card.title}</h3>
                <p className="text-white/80 mb-6">{card.description}</p>
                <button className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                  Explore {card.title}
                </button>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT GROFLEX DOES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">From Prediction to Action</span><br />
              <span className="text-white">In Real Time</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: 'Predictive Intelligence',
                description: 'Built-in ML models forecast risks and opportunities'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Prescriptive Recommendations',
                description: 'Suggested next-best actions with decision framing tools'
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: 'AI for Everyone',
                description: 'Natural language Q&A works across all roles—executives to analysts'
              }
            ].map((concept, index) => (
              <FuturisticCard key={index} variant="hologram" className="text-center">
                <div className="text-brand-purple mb-6 flex justify-center">
                  {concept.icon}
                </div>
                <h3 className="text-xl font-bold text-gradient mb-4">{concept.title}</h3>
                <p className="text-white/80">{concept.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURE GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-coral/5 via-transparent to-brand-purple/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">What You'll Get</span><br />
              <span className="text-white">With GrofleX</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} variant="neon">
                <div className="text-brand-purple mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gradient mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Trusted by Leaders</span><br />
              <span className="text-white">Who Act Ahead of the Curve</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} variant="neon">
                <div className="text-white/80 mb-6 italic">"{testimonial.quote}"</div>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-gradient">{testimonial.author}</div>
                  <div className="text-white/70">{testimonial.role}</div>
                  <div className="text-brand-purple text-sm">{testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI INTERFACE DEMO - CHATBOT SCREENSHOTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Ask Anything.</span><br />
              <span className="text-white">Get Clarity.</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Experience our AI-powered interface with natural language queries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Chatbot Screenshot 1 */}
            <FuturisticCard variant="hologram">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-lg p-4 relative">
                {/* GrofleX Icon in top right */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">G</span>
                </div>
                
                {/* Chat header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                  <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">GrofleX AI Assistant</span>
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Chat messages */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-brand-purple/20 border border-brand-purple/30 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">Why is our customer churn increasing?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 max-w-xs">
                      <p className="text-white/90 text-sm mb-2">Based on your data analysis, churn is up 23% due to:</p>
                      <ul className="text-white/80 text-xs space-y-1">
                        <li>• Pricing sensitivity (40%)</li>
                        <li>• Support response time (35%)</li>
                        <li>• Feature gaps (25%)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FuturisticCard>

            {/* Chatbot Screenshot 2 */}
            <FuturisticCard variant="hologram">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-lg p-4 relative">
                {/* GrofleX Icon in top right */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">G</span>
                </div>
                
                {/* Chat header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                  <div className="w-8 h-8 bg-brand-coral rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">Revenue Insights</span>
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                {/* Chat messages */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-brand-coral/20 border border-brand-coral/30 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">What should we focus on this quarter?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 max-w-xs">
                      <p className="text-white/90 text-sm mb-2">Recommended priorities:</p>
                      <div className="space-y-2">
                        <div className="bg-green-500/20 rounded px-2 py-1">
                          <p className="text-green-400 text-xs font-semibold">1. Enterprise expansion (+34% revenue)</p>
                        </div>
                        <div className="bg-yellow-500/20 rounded px-2 py-1">
                          <p className="text-yellow-400 text-xs font-semibold">2. Product feature gap closure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FuturisticCard>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
              <Play className="w-5 h-5" />
              Try the Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Clarity Starts Here</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Whether you're leading, enabling, or building insight—GrofleX helps you know what to do next
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <FuturisticCard variant="neon" className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gradient mb-4">For Leaders</h3>
              <p className="text-white/80 mb-6">Get strategic clarity and predictive insights</p>
              <button className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
            </FuturisticCard>
            
            <FuturisticCard variant="neon" className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gradient mb-4">For Teams</h3>
              <p className="text-white/80 mb-6">See how GrofleX transforms your workflow</p>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-6 py-3 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                Book a Demo
              </button>
            </FuturisticCard>
          </div>
        </div>
      </section>

      {/* 9. TOOL INTEGRATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">We Work with What</span><br />
              <span className="text-white">You Already Use</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <FuturisticCard key={index} variant="hologram" className="text-center opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-2xl font-bold text-white/80">{integration}</div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Still Not Clear?</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FuturisticCard key={index} variant="hologram">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gradient">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-purple transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                )}
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PARTNERS & FOOTER INFO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gradient mb-8">Backed by Leading Investors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {['Investor A', 'Accelerator B', 'Fund C', 'Partner D'].map((partner, index) => (
              <div key={index} className="text-white/60 font-semibold">{partner}</div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center gap-8">
            <a href="#" className="text-brand-purple hover:text-brand-coral transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-brand-purple hover:text-brand-coral transition-colors">
              X (Twitter)
            </a>
            <a href="#" className="text-brand-purple hover:text-brand-coral transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
