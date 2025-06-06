
import React from 'react';
import Header from '../../components/wordpress-theme/Header';
import Footer from '../../components/wordpress-theme/Footer';

const PagePricing = () => {
  return (
    <>
      <Header />
      
      <main className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="section-title">
              <span className="text-gradient">Simple, Transparent Pricing</span><br />
              <span>Choose the Plan That Fits Your Needs</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              Start with our free trial and scale as your business grows
            </p>
          </div>

          {/* Pricing Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            maxWidth: '1000px', 
            margin: '0 auto' 
          }}>
            {/* Starter Plan */}
            <div className="card" style={{ position: 'relative' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ 
                  color: 'var(--brand-purple)', 
                  fontSize: '1.5rem', 
                  marginBottom: '0.5rem' 
                }}>
                  Starter
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Perfect for small teams</p>
              </div>
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 'bold', 
                  color: 'var(--brand-purple)' 
                }}>
                  $99
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>per month</div>
              </div>
              
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Up to 5 data sources
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Basic predictive models
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Natural language Q&A
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Email support
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  5 users included
                </li>
              </ul>
              
              <a 
                href="#trial" 
                className="btn-secondary" 
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                Start Free Trial
              </a>
            </div>
            
            {/* Professional Plan */}
            <div className="card" style={{ 
              position: 'relative', 
              border: '2px solid var(--brand-purple)' 
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '-12px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'var(--brand-purple)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '20px', 
                fontSize: '0.8rem' 
              }}>
                MOST POPULAR
              </div>
              
              <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '1rem' }}>
                <h3 style={{ 
                  color: 'var(--brand-coral)', 
                  fontSize: '1.5rem', 
                  marginBottom: '0.5rem' 
                }}>
                  Professional
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>For growing businesses</p>
              </div>
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: 'bold', 
                  color: 'var(--brand-coral)' 
                }}>
                  $299
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>per month</div>
              </div>
              
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Up to 25 data sources
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Advanced ML models
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Prescriptive recommendations
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Priority support
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  25 users included
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Custom dashboards
                </li>
              </ul>
              
              <a 
                href="#trial" 
                className="btn-primary" 
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                Start Free Trial
              </a>
            </div>
            
            {/* Enterprise Plan */}
            <div className="card" style={{ position: 'relative' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ 
                  color: 'var(--brand-cream)', 
                  fontSize: '1.5rem', 
                  marginBottom: '0.5rem' 
                }}>
                  Enterprise
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>For large organizations</p>
              </div>
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: 'var(--brand-cream)' 
                }}>
                  Custom
                </div>
                <div style={{ color: 'rgba(255, 255, 255, 0.7)' }}>pricing</div>
              </div>
              
              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Unlimited data sources
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Custom ML models
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  White-label options
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Dedicated support
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  Unlimited users
                </li>
                <li style={{ 
                  marginBottom: '1rem', 
                  display: 'flex', 
                  alignItems: 'center' 
                }}>
                  <span style={{ color: 'var(--brand-coral)', marginRight: '0.5rem' }}>✓</span>
                  On-premise deployment
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="btn-secondary" 
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div style={{ marginTop: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="text-gradient">
              Frequently Asked Questions
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  color: 'var(--brand-purple)', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem' 
                }}>
                  Can I change plans at any time?
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.
                </p>
              </div>
              
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  color: 'var(--brand-purple)', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem' 
                }}>
                  What's included in the free trial?
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  The free trial includes full access to Professional plan features for 14 days. No credit card required.
                </p>
              </div>
              
              <div className="card" style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  color: 'var(--brand-purple)', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem' 
                }}>
                  Do you offer discounts for annual billing?
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Yes, we offer 20% off when you pay annually. Contact our sales team for more details.
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

export default PagePricing;
