
import React from 'react';
import Header from '../../components/wordpress-theme/Header';
import Footer from '../../components/wordpress-theme/Footer';

const PageProducts = () => {
  return (
    <>
      <Header />
      
      <main className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="section-title">
              <span className="text-gradient">AI that connects systems,</span><br />
              <span>predicts outcomes, and prescribes next steps</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              —in plain language
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="dashboard-preview" style={{ marginBottom: '4rem' }}>
            <div className="dashboard-placeholder">
              📊 Product Dashboard Screenshot/Video<br />
              <small>Insert product demo video or interactive dashboard here</small>
            </div>
          </div>

          {/* Architecture Overview */}
          <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="text-gradient">
              How GrofleX Works
            </h2>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '2rem' 
            }}>
              <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-coral))', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '2rem', 
                  margin: '0 auto 1rem' 
                }}>
                  📥
                </div>
                <h3 style={{ color: 'var(--brand-purple)', fontWeight: '600' }}>Data Sources</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  APIs, Databases, Files
                </p>
              </div>
              
              <div style={{ color: 'var(--brand-coral)', fontSize: '2rem' }}>→</div>
              
              <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--brand-coral), #FF8E8E)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '2rem', 
                  margin: '0 auto 1rem' 
                }}>
                  🧠
                </div>
                <h3 style={{ color: 'var(--brand-coral)', fontWeight: '600' }}>GrofleX AI</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  Process, Predict, Prescribe
                </p>
              </div>
              
              <div style={{ color: 'var(--brand-coral)', fontSize: '2rem' }}>→</div>
              
              <div style={{ textAlign: 'center', flex: '1', minWidth: '200px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-coral))', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '2rem', 
                  margin: '0 auto 1rem' 
                }}>
                  📊
                </div>
                <h3 style={{ color: 'var(--brand-cream)', fontWeight: '600' }}>Insights</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                  Dashboards, Alerts, Actions
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }} className="text-gradient">
              Product Features
            </h2>
            <div className="grid-3">
              <div className="card">
                <div className="card-icon">🔗</div>
                <h3 className="card-title">Data Integration Layer</h3>
                <p className="card-description">
                  Connect any data source, from databases to APIs, with our universal connectors
                </p>
                <ul style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <li>• 200+ pre-built connectors</li>
                  <li>• Real-time and batch processing</li>
                  <li>• Secure API management</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-icon">🧠</div>
                <h3 className="card-title">GrofleX AI Engine</h3>
                <p className="card-description">
                  Self-learning algorithms that get smarter with every decision you make
                </p>
                <ul style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <li>• Machine learning models</li>
                  <li>• Pattern recognition</li>
                  <li>• Continuous optimization</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-icon">🎯</div>
                <h3 className="card-title">Predictive Models & Prescriptive Actions</h3>
                <p className="card-description">
                  Not just what will happen, but what you should do about it
                </p>
                <ul style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <li>• Risk forecasting</li>
                  <li>• Opportunity identification</li>
                  <li>• Action recommendations</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-icon">💬</div>
                <h3 className="card-title">Natural Language Q&A</h3>
                <p className="card-description">
                  Ask business questions in plain English, get insights in seconds
                </p>
                <ul style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <li>• Conversational interface</li>
                  <li>• Context-aware responses</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-icon">📊</div>
                <h3 className="card-title">Role-Based Dashboards</h3>
                <p className="card-description">
                  Customized views for executives, managers, and analysts
                </p>
                <ul style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <li>• Executive summaries</li>
                  <li>• Operational metrics</li>
                  <li>• Detailed analytics</li>
                </ul>
              </div>
              
              <div className="card">
                <div className="card-icon">🔒</div>
                <h3 className="card-title">Security & Governance</h3>
                <p className="card-description">
                  Enterprise-grade security with compliance built-in
                </p>
                <ul style={{ marginTop: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  <li>• SOC 2 Type II</li>
                  <li>• Data encryption</li>
                  <li>• Access controls</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>
              See GrofleX in Action
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
              Experience the power of predictive analytics and prescriptive insights
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <a href="#demo" className="btn-primary">Try Live Demo</a>
              <a href="#walkthrough" className="btn-secondary">Schedule Walkthrough</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PageProducts;
