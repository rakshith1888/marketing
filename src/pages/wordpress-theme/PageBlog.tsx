
import React from 'react';
import Header from '../../components/wordpress-theme/Header';
import Footer from '../../components/wordpress-theme/Footer';

const PageBlog = () => {
  return (
    <>
      <Header />
      
      <main className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="section-title">
              <span className="text-gradient">GrofleX Blog</span><br />
              <span>Insights on AI, Analytics & Decision Making</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              Stay updated with the latest trends in predictive analytics and business intelligence
            </p>
          </div>

          {/* Featured Post */}
          <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '3rem', 
              alignItems: 'center' 
            }}>
              <div>
                <div style={{ 
                  background: 'var(--brand-purple)', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  display: 'inline-block', 
                  fontSize: '0.8rem', 
                  marginBottom: '1rem' 
                }}>
                  FEATURED
                </div>
                <h2 style={{ 
                  color: 'var(--brand-purple)', 
                  fontSize: '2rem', 
                  marginBottom: '1rem' 
                }}>
                  The Future of Predictive Analytics in Business Decision Making
                </h2>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  marginBottom: '1.5rem' 
                }}>
                  Explore how AI-powered predictive analytics is transforming how businesses make strategic decisions and stay ahead of market trends.
                </p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '1.5rem' 
                }}>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                    March 15, 2024
                  </div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>•</div>
                  <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                    5 min read
                  </div>
                </div>
                <a href="#" className="btn-primary">Read More</a>
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                padding: '2rem', 
                borderRadius: '12px', 
                textAlign: 'center', 
                minHeight: '250px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <div style={{ fontSize: '4rem' }}>📊</div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid-3">
            <div className="card">
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                height: '200px', 
                borderRadius: '12px', 
                marginBottom: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '3rem' 
              }}>
                🧠
              </div>
              <div style={{ 
                background: 'var(--brand-coral)', 
                color: 'white', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '15px', 
                display: 'inline-block', 
                fontSize: '0.7rem', 
                marginBottom: '1rem' 
              }}>
                AI & MACHINE LEARNING
              </div>
              <h3 style={{ color: 'var(--brand-purple)', marginBottom: '1rem' }}>
                How AI is Revolutionizing Business Intelligence
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1rem' }}>
                Discover the key ways artificial intelligence is transforming traditional BI approaches.
              </p>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                March 10, 2024
              </div>
              <a href="#" style={{ color: 'var(--brand-purple)', textDecoration: 'none' }}>
                Read More →
              </a>
            </div>
            
            <div className="card">
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                height: '200px', 
                borderRadius: '12px', 
                marginBottom: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '3rem' 
              }}>
                📈
              </div>
              <div style={{ 
                background: 'var(--brand-purple)', 
                color: 'white', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '15px', 
                display: 'inline-block', 
                fontSize: '0.7rem', 
                marginBottom: '1rem' 
              }}>
                ANALYTICS
              </div>
              <h3 style={{ color: 'var(--brand-coral)', marginBottom: '1rem' }}>
                5 Signs Your Business Needs Predictive Analytics
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1rem' }}>
                Learn when it's time to move beyond traditional reporting to predictive insights.
              </p>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                March 5, 2024
              </div>
              <a href="#" style={{ color: 'var(--brand-coral)', textDecoration: 'none' }}>
                Read More →
              </a>
            </div>
            
            <div className="card">
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                height: '200px', 
                borderRadius: '12px', 
                marginBottom: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '3rem' 
              }}>
                🎯
              </div>
              <div style={{ 
                background: 'var(--brand-cream)', 
                color: 'black', 
                padding: '0.3rem 0.8rem', 
                borderRadius: '15px', 
                display: 'inline-block', 
                fontSize: '0.7rem', 
                marginBottom: '1rem' 
              }}>
                DECISION MAKING
              </div>
              <h3 style={{ color: 'var(--brand-cream)', marginBottom: '1rem' }}>
                From Data to Decisions: A Complete Guide
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '1rem' }}>
                A comprehensive guide to turning business data into actionable decisions.
              </p>
              <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                February 28, 2024
              </div>
              <a href="#" style={{ color: 'var(--brand-cream)', textDecoration: 'none' }}>
                Read More →
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', marginTop: '4rem' }}>
            <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Stay Updated</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
              Get the latest insights on AI, analytics, and decision-making delivered to your inbox
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              maxWidth: '400px', 
              margin: '0 auto' 
            }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  flex: '1', 
                  padding: '0.75rem 1rem', 
                  borderRadius: '25px', 
                  border: '1px solid rgba(255, 255, 255, 0.3)', 
                  background: 'rgba(255, 255, 255, 0.1)', 
                  color: 'white', 
                  minWidth: '200px' 
                }} 
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PageBlog;
