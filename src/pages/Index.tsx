
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Why Can't You See What's Coming—</span>
              <br />
              <span className="text-white">Or What to Do About It?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Siloed Systems',
                stat: '86%',
                description: 'say their systems are too fragmented',
                quote: '"We have data everywhere but insights nowhere"'
              },
              {
                title: 'Gut Decisions Still Dominate',
                stat: '72%',
                description: 'rely on intuition over dashboards',
                quote: '"I trust my gut more than our reports"'
              },
              {
                title: 'No Prescriptive Path',
                stat: '92%',
                description: "don't trust BI to tell them what to do next",
                quote: '"Our dashboards show what happened, not what to do"'
              }
            ].map((problem, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                <div className="text-6xl font-bold text-gradient mb-4">{problem.stat}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-white/80 mb-6">{problem.description}</p>
                <div className="absolute bottom-4 left-8 right-8">
                  <div className="bg-brand-purple/20 border-l-4 border-brand-coral p-4 rounded italic text-white/70">
                    {problem.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-purple text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300">
              Learn Why Clarity Matters
            </button>
          </div>
        </div>
      </section>

      {/* Audience Navigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/10 to-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Clarity, for Everyone</span>
              <br />
              <span className="text-white">Who Makes Decisions</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Executives',
                description: 'See where you\'re heading and what to do about it—before others do.',
                icon: '👔'
              },
              {
                role: 'BI Managers',
                description: 'Deliver predictive dashboards that tell leadership what matters.',
                icon: '📊'
              },
              {
                role: 'Analysts',
                description: 'Automate insight delivery and eliminate low-impact work.',
                icon: '🔍'
              }
            ].map((persona, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="text-6xl mb-6 group-hover:animate-bounce">{persona.icon}</div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{persona.role}</h3>
                <p className="text-white/80 mb-6">{persona.description}</p>
                <button className="bg-gradient-coral text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Explore Use Cases
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What GrofleX Does */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">From Prediction to Action—</span>
              <br />
              <span className="text-white">In Real Time</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Predictive Intelligence',
                description: 'Built-in ML models forecast risks and opportunities',
                icon: '🔮'
              },
              {
                title: 'Prescriptive Recommendations',
                description: 'Suggested next-best actions with decision framing tools',
                icon: '🎯'
              },
              {
                title: 'AI for Everyone',
                description: 'Natural language Q&A works across all roles—executives to analysts',
                icon: '🤖'
              }
            ].map((concept, index) => (
              <div key={index} className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="text-6xl mb-6 group-hover:animate-pulse">{concept.icon}</div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{concept.title}</h3>
                <p className="text-white/80">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">What You'll Get With GrofleX</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Predictive Forecasts', icon: '📈' },
              { title: 'Natural Language Q&A', icon: '💬' },
              { title: 'Prescriptive Next Steps', icon: '➡️' },
              { title: 'Real-Time Sync', icon: '⚡' },
              { title: 'Multi-Cloud Data Engine', icon: '☁️' }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gradient">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">How GrofleX Helps You</span>
              <br />
              <span className="text-white">Make the Right Move—Fast</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {[
              'Connect systems and data sources',
              'GrofleX predicts trends and flags emerging risks',
              'You get recommended actions',
              'Visualize trade-offs and act',
              'Platform learns from each outcome'
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-6 glass-card p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg text-white/90">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/10 to-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Trusted by Leaders</span>
              <br />
              <span className="text-white">Who Act Ahead of the Curve</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "GrofleX helped us identify market shifts 3 months before our competitors.",
                author: "Sarah Chen",
                role: "VP Strategy, TechCorp"
              },
              {
                quote: "Finally, our dashboards tell us what to do, not just what happened.",
                author: "Michael Rodriguez", 
                role: "Director of BI, DataFlow"
              },
              {
                quote: "I spend 70% less time on manual reports and 70% more time on strategic analysis.",
                author: "Emily Davis",
                role: "Senior Analyst, GrowthCo"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300">
                <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-brand-coral font-semibold">{testimonial.author}</p>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Interface Demo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Ask Anything.</span>
              <br />
              <span className="text-white">Get Clarity.</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Type a business question—GrofleX will respond with context-aware recommendations
            </p>
          </div>
          
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="bg-black/40 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-brand-coral rounded-full"></div>
                <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
                <div className="w-3 h-3 bg-brand-cream rounded-full"></div>
              </div>
              <input 
                type="text" 
                placeholder="Ask GrofleX anything..."
                className="w-full bg-transparent text-white placeholder-white/50 text-lg focus:outline-none"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Why is churn rising?',
                'Where\'s my highest risk?',
                'What should we do this quarter?'
              ].map((question, index) => (
                <button key={index} className="glass-card border border-brand-purple/30 p-4 text-white/80 hover:bg-brand-purple/20 hover:text-white transition-all duration-300 rounded-lg">
                  {question}
                </button>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
                Try the Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Clarity Starts Here</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Whether you're leading, enabling, or building insight—GrofleX helps you know what to do next
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-gradient mb-4">For Leaders</h3>
              <p className="text-white/80 mb-6">Start making data-driven decisions today</p>
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
                Start Free Trial
              </button>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gradient mb-4">For Teams</h3>
              <p className="text-white/80 mb-6">See GrofleX in action with your data</p>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Integrations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 to-brand-coral/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gradient mb-12">
            We Work with What You Already Use
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
            {['Google', 'Salesforce', 'Mailchimp', 'Looker', 'Slack', 'Tableau'].map((tool, index) => (
              <div key={index} className="glass-card p-4 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 font-semibold">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gradient mb-6">Still Not Clear?</h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "How does GrofleX's AI actually work?",
                a: "Our AI combines machine learning models with natural language processing to analyze your data patterns and provide actionable recommendations in plain English."
              },
              {
                q: "What data sources can GrofleX integrate with?",
                a: "GrofleX connects with 200+ data sources including CRMs, databases, cloud platforms, and analytics tools through secure APIs."
              },
              {
                q: "How will this help my BI team specifically?",
                a: "Your BI team can automate routine reporting, focus on strategic analysis, and deliver predictive insights that executives actually use."
              },
              {
                q: "Is our data secure with GrofleX?",
                a: "Yes, we use enterprise-grade encryption, compliance with SOC 2 Type II, and never store your raw data—only insights and patterns."
              },
              {
                q: "How quickly can we see results?",
                a: "Most teams see initial insights within 24 hours of connecting their first data source, with full predictive capabilities in 1-2 weeks."
              },
              {
                q: "Do we need technical expertise to use GrofleX?",
                a: "No coding required. Business users can ask questions in natural language, while technical teams can access APIs and advanced configurations."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-semibold text-brand-purple mb-3">{faq.q}</h3>
                <p className="text-white/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
