
import Layout from '../components/Layout';

const About = () => {
  const values = [
    {
      title: 'Clarity',
      description: 'We believe every decision should be made with complete understanding of the outcomes',
      icon: '🔍'
    },
    {
      title: 'Simplicity',
      description: 'Complex problems deserve simple solutions that anyone can understand and use',
      icon: '⚡'
    },
    {
      title: 'Trust',
      description: 'Our AI explanations are transparent, so you always know why we recommend what we do',
      icon: '🤝'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About GrofleX</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Empower decision-makers with insight they can trust—instantly
            </p>
          </div>

          {/* Mission Statement */}
          <div className="glass-card p-12 mb-16 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              To empower decision-makers with insight they can trust—instantly. We believe that in a world 
              drowning in data, what matters most is knowing what to do next.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-6">Our Story</h2>
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p>
                  <strong className="text-brand-coral">Born from frustration with dashboards.</strong> Built to act in real time.
                </p>
                <p>
                  GrofleX emerged from a simple observation: organizations have more data than ever, 
                  yet decision-makers still struggle to know what to do next. Traditional BI tools 
                  show what happened, but they don't provide the clarity leaders need to act decisively.
                </p>
                <p>
                  Our founders experienced this frustration firsthand—watching executives make 
                  gut decisions despite having access to sophisticated analytics platforms. 
                  The problem wasn't lack of data; it was lack of actionable insight.
                </p>
                <p>
                  Today, we're building the bridge between prediction and action, helping leaders 
                  see not just what's coming, but what to do about it.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gradient mb-4">The Journey</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-purple rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="text-brand-purple font-semibold">Problem Identified</h4>
                      <p className="text-white/70 text-sm">Leaders needed clarity, not just data</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="text-brand-coral font-semibold">Solution Designed</h4>
                      <p className="text-white/70 text-sm">AI that predicts and prescribes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center text-black font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="text-brand-cream font-semibold">Platform Launched</h4>
                      <p className="text-white/70 text-sm">Helping leaders act with confidence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient mb-6">Our Core Values</h2>
              <p className="text-white/80 max-w-3xl mx-auto">
                These principles guide everything we build and every decision we make
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-gradient mb-4">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="glass-card p-12 mb-16">
            <h2 className="text-3xl font-bold text-gradient text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { metric: '10,000+', label: 'Decisions Enhanced Daily' },
                { metric: '500+', label: 'Organizations Trust Us' },
                { metric: '95%', label: 'Faster Decision Making' },
                { metric: '24/7', label: 'AI-Powered Insights' }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl font-bold text-gradient">{stat.metric}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Preview */}
          <div className="glass-card p-12 text-center mb-16">
            <h2 className="text-3xl font-bold text-gradient mb-6">Leadership Team</h2>
            <p className="text-white/80 mb-8">
              Industry veterans from AI, analytics, and enterprise software, united by a mission to bring clarity to decision-making
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { role: 'CEO & Co-Founder', icon: '👨‍💼', expertise: 'Enterprise Strategy' },
                { role: 'CTO & Co-Founder', icon: '👩‍💻', expertise: 'AI & Machine Learning' },
                { role: 'VP of Product', icon: '👨‍🎨', expertise: 'User Experience' },
                { role: 'VP of Engineering', icon: '👩‍🔬', expertise: 'Scalable Systems' }
              ].map((member, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-6xl">{member.icon}</div>
                  <div>
                    <h3 className="text-brand-purple font-semibold">{member.role}</h3>
                    <p className="text-white/70 text-sm">{member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">Join Our Mission</h2>
            <p className="text-white/80 mb-8">
              Help us bring clarity to decision-making across every industry and organization
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300">
                View Open Positions
              </button>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
