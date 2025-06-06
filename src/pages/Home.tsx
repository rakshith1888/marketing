
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { ArrowRight, Zap, Brain, Target, Users, TrendingUp, Shield, CheckCircle, MessageSquare, BarChart3, Database, Cloud, ChevronDown, Play } from 'lucide-react';
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
      icon: '👔'
    },
    {
      title: 'BI Managers',
      description: 'Deliver predictive dashboards that tell leadership what matters.',
      icon: '📊'
    },
    {
      title: 'Analysts',
      description: 'Automate insight delivery and eliminate low-impact work.',
      icon: '🔍'
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

  const sampleQuestions = [
    "Why is churn rising?",
    "Where's my highest risk?",
    "What should we do this quarter?",
    "Which customers are most likely to expand?",
    "What's driving our revenue decline?"
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
              See How It Works
            </button>
          </div>

          {/* Animated Flywheel */}
          <FuturisticCard variant="neon" className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: '🔗', title: 'Connect', step: '01' },
                { icon: '🔮', title: 'Predict', step: '02' },
                { icon: '📋', title: 'Prescribe', step: '03' },
                { icon: '⚡', title: 'Act', step: '04' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-sm text-brand-purple font-mono mb-2">STEP {item.step}</div>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gradient">{item.title}</h3>
                </div>
              ))}
            </div>
          </FuturisticCard>
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
                <div className="text-6xl mb-6">{card.icon}</div>
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

      {/* 6. HOW IT WORKS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">How GrofleX Helps You</span><br />
              <span className="text-white">Make the Right Move—Fast</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: '01',
                title: 'Connect',
                description: 'Connect systems and data sources'
              },
              {
                step: '02',
                title: 'Predict',
                description: 'GrofleX predicts trends and flags emerging risks'
              },
              {
                step: '03',
                title: 'Recommend',
                description: 'You get recommended actions and insights'
              },
              {
                step: '04',
                title: 'Visualize',
                description: 'Visualize trade-offs and act'
              },
              {
                step: '05',
                title: 'Learn',
                description: 'Platform learns from each outcome'
              }
            ].map((step, index) => (
              <FuturisticCard key={index} variant="hologram" className="text-center">
                <div className="text-sm text-brand-purple font-mono mb-4">STEP {step.step}</div>
                <h3 className="text-lg font-bold text-gradient mb-4">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF */}
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

      {/* 8. AI INTERFACE DEMO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Ask Anything.</span><br />
              <span className="text-white">Get Clarity.</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Type a business question—GrofleX will respond with context-aware recommendations
            </p>
          </div>
          
          <FuturisticCard variant="hologram" className="max-w-4xl mx-auto">
            <div className="bg-black/50 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white/70 ml-4 text-sm">GrofleX AI Interface</span>
              </div>
              <div className="space-y-4">
                {sampleQuestions.map((question, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                    <MessageSquare className="w-4 h-4 text-brand-purple" />
                    <span className="text-white/80">{question}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto">
                <Play className="w-5 h-5" />
                Try the Live Demo
              </button>
            </div>
          </FuturisticCard>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
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

      {/* 10. TOOL INTEGRATIONS */}
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

      {/* 11. FAQ SECTION */}
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

      {/* 12. PARTNERS & FOOTER INFO */}
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
