
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Users, Target, Lightbulb, ArrowRight, Linkedin, Twitter, Mail } from 'lucide-react';

const About = () => {
  const handleGetStarted = () => {
    window.open('https://app.groflex.ai', '_blank');
  };

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      bio: 'Former McKinsey consultant with 15+ years in data analytics and business intelligence.',
      image: '/placeholder.svg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-founder',
      bio: 'Ex-Google engineer specializing in machine learning and predictive analytics platforms.',
      image: '/placeholder.svg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science from Stanford, published researcher in predictive modeling.',
      image: '/placeholder.svg'
    },
    {
      name: 'James Thompson',
      role: 'VP of Product',
      bio: 'Former Salesforce product leader with expertise in enterprise software solutions.',
      image: '/placeholder.svg'
    }
  ];

  const values = [
    {
      title: 'Clarity First',
      description: 'We believe complex data should deliver simple, actionable insights.',
      icon: '🎯'
    },
    {
      title: 'Predictive Power',
      description: 'Our AI doesn\'t just analyze the past—it illuminates the future.',
      icon: '🔮'
    },
    {
      title: 'Human-Centered',
      description: 'Technology should amplify human decision-making, not replace it.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'Our platform evolves with your business, getting smarter over time.',
      icon: '📈'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-purple-dark/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">Building the Future</span>
            <br />
            <span className="text-white">of Decision Intelligence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to transform how organizations make decisions by providing clarity, 
            predictive insights, and prescriptive actions—all powered by AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={handleGetStarted}
              className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-brand-purple/50 transition-all duration-300 transform hover:scale-105"
            >
              Join Our Mission
            </button>
            <button className="bg-gradient-purple text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <FuturisticCard variant="neon" className="p-12 mb-16 text-center">
        <h2 className="text-3xl font-bold text-gradient mb-6">Our Mission</h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
          To transform how businesses understand their data by providing predictive insights 
          and prescriptive actions that eliminate guesswork and accelerate growth.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-4xl">📊</div>
            <h3 className="text-xl font-semibold text-gradient">Data Intelligence</h3>
            <p className="text-white/70">Turning complex data into clear, actionable insights</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">⚡</div>
            <h3 className="text-xl font-semibold text-gradient">Speed to Insight</h3>
            <p className="text-white/70">Real-time analysis that keeps pace with your business</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">🎯</div>
            <h3 className="text-xl font-semibold text-gradient">Precision Focus</h3>
            <p className="text-white/70">Targeted recommendations for maximum impact</p>
          </div>
        </div>
      </FuturisticCard>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gradient text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FuturisticCard key={index} className="p-6 text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gradient mb-3">{value.title}</h3>
              <p className="text-white/70 text-sm">{value.description}</p>
            </FuturisticCard>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gradient text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <FuturisticCard key={index} className="p-6 text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 bg-brand-purple/20"
              />
              <h3 className="text-lg font-semibold text-gradient mb-1">{member.name}</h3>
              <p className="text-brand-coral text-sm mb-3">{member.role}</p>
              <p className="text-white/70 text-xs">{member.bio}</p>
            </FuturisticCard>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <FuturisticCard className="p-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-white/80">
            <p className="text-lg">
              GrofleX was born from a simple frustration: why was it so hard for smart business 
              leaders to get clear answers from their data? Despite having access to more 
              information than ever before, decision-makers were still operating on gut instinct 
              rather than data-driven insights.
            </p>
            <p className="text-lg">
              Our founders, Sarah and Marcus, experienced this challenge firsthand while working 
              at Fortune 500 companies. They saw executives making million-dollar decisions 
              based on incomplete information, simply because their data was trapped in silos 
              and their analytics tools required PhD-level expertise to operate.
            </p>
            <p className="text-lg">
              Today, GrofleX serves hundreds of businesses worldwide, from fast-growing startups 
              to established enterprises. Our platform has helped companies increase revenue by 
              an average of 34% and reduce operational costs by 28% through better decision-making.
            </p>
          </div>
        </div>
      </FuturisticCard>

      {/* CTA Section */}
      <FuturisticCard variant="neon" className="p-12 text-center">
        <h2 className="text-3xl font-bold text-gradient mb-4">Ready to Join Our Mission?</h2>
        <p className="text-white/80 mb-8 text-lg">
          Experience the clarity and confidence that comes with predictive analytics
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300"
          >
            Start Free Trial
          </button>
          <button className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </FuturisticCard>
    </Layout>
  );
};

export default About;
