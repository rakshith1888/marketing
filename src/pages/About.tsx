
import Layout from '../components/Layout';

const About = () => {
  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', image: '👨‍💼' },
    { name: 'Sarah Chen', role: 'CTO', image: '👩‍💻' },
    { name: 'Michael Rodriguez', role: 'Head of Design', image: '👨‍🎨' },
    { name: 'Emily Davis', role: 'VP of Sales', image: '👩‍💼' }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About Groflex</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're on a mission to revolutionize how businesses operate in the digital age
            </p>
          </div>

          {/* Story Section */}
          <div className="glass-card p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gradient mb-6">Our Story</h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Founded in 2020, Groflex emerged from a simple vision: to make advanced technology 
                  accessible to businesses of all sizes. Our journey began when our founders recognized 
                  the growing gap between technological possibilities and practical implementation.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Today, we serve over 10,000 businesses worldwide, helping them transform their 
                  operations and achieve unprecedented growth through innovative solutions.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-brand rounded-lg opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-6xl">🚀</div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Innovation', icon: '💡', desc: 'Pushing boundaries with cutting-edge technology' },
              { title: 'Integrity', icon: '🤝', desc: 'Building trust through transparency and honesty' },
              { title: 'Excellence', icon: '⭐', desc: 'Delivering exceptional quality in everything we do' }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gradient mb-4">{value.title}</h3>
                <p className="text-white/80">{value.desc}</p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-8">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-brand-purple">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-4">Join Our Journey</h2>
            <p className="text-white/80 mb-8">Be part of the future of business technology</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-brand text-black font-semibold px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300">
                Careers
              </button>
              <button className="glass-card border border-brand-purple/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-brand-purple/20 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
