
import React from 'react';
import Header from '../../components/wordpress-theme/Header';
import Footer from '../../components/wordpress-theme/Footer';

const PageAbout = () => {
  return (
    <>
      <Header />
      
      <main className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="section-title">
              <span className="text-gradient">About GrofleX</span><br />
              <span>Bringing Clarity to Every Decision</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              We believe every business leader deserves to see what's coming and know exactly what to do about it.
            </p>
          </div>

          {/* Mission Section */}
          <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '3rem', 
              alignItems: 'center' 
            }}>
              <div>
                <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                  Our Mission
                </h2>
                <p style={{ 
                  fontSize: '1.25rem', 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  marginBottom: '1.5rem' 
                }}>
                  To transform how businesses make decisions by providing predictive insights and prescriptive actions powered by AI.
                </p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  We're building a world where data doesn't just show what happened—it reveals what's next and guides you toward the best possible outcome.
                </p>
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                padding: '2rem', 
                borderRadius: '12px', 
                textAlign: 'center' 
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
                <h3 style={{ color: 'var(--brand-purple)', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  A future where every business decision is made with complete clarity and confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="text-gradient">
              Meet Our Team
            </h2>
            <div className="grid-3">
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-coral))', 
                  borderRadius: '50%', 
                  margin: '0 auto 1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '3rem' 
                }}>
                  👨‍💼
                </div>
                <h3 style={{ color: 'var(--brand-purple)', marginBottom: '0.5rem' }}>John Smith</h3>
                <p style={{ color: 'var(--brand-coral)', marginBottom: '1rem' }}>CEO & Co-Founder</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Former VP of Analytics at Fortune 500 company. 15+ years in predictive analytics and business intelligence.
                </p>
              </div>
              
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'linear-gradient(135deg, var(--brand-coral), #FF8E8E)', 
                  borderRadius: '50%', 
                  margin: '0 auto 1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '3rem' 
                }}>
                  👩‍💻
                </div>
                <h3 style={{ color: 'var(--brand-coral)', marginBottom: '0.5rem' }}>Jane Doe</h3>
                <p style={{ color: 'var(--brand-purple)', marginBottom: '1rem' }}>CTO & Co-Founder</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  AI/ML expert with PhD from Stanford. Previously led AI initiatives at leading tech companies.
                </p>
              </div>
              
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-coral))', 
                  borderRadius: '50%', 
                  margin: '0 auto 1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '3rem' 
                }}>
                  📊
                </div>
                <h3 style={{ color: 'var(--brand-cream)', marginBottom: '0.5rem' }}>Mike Johnson</h3>
                <p style={{ color: 'var(--brand-coral)', marginBottom: '1rem' }}>Head of Product</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Product leader with deep expertise in enterprise analytics and user experience design.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="text-gradient">
              Our Values
            </h2>
            <div className="grid-3">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                <h3 style={{ color: 'var(--brand-purple)', marginBottom: '1rem' }}>Clarity First</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  We believe complex data should translate into clear, actionable insights.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                <h3 style={{ color: 'var(--brand-coral)', marginBottom: '1rem' }}>Innovation</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  We push the boundaries of what's possible with AI and predictive analytics.
                </p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
                <h3 style={{ color: 'var(--brand-cream)', marginBottom: '1rem' }}>Partnership</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  We work alongside our clients to ensure their success with our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PageAbout;
