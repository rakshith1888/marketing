
import React from 'react';
import Header from '../../components/wordpress-theme/Header';
import Footer from '../../components/wordpress-theme/Footer';

const PageSolutions = () => {
  return (
    <>
      <Header />
      
      <main className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="section-title">
              <span className="text-gradient">Clarity for Everyone—</span><br />
              <span>No Matter Your Role</span>
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.8)', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              Tailored solutions that address specific pain points and deliver measurable outcomes for every decision-maker
            </p>
          </div>

          {/* Role-based Solutions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {/* Business Leaders */}
            <div className="glass-card" style={{ padding: '3rem' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '3rem', 
                alignItems: 'center' 
              }}>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    marginBottom: '1.5rem' 
                  }}>
                    <div style={{ fontSize: '4rem' }}>👔</div>
                    <div>
                      <h2 className="text-gradient" style={{ 
                        fontSize: '2rem', 
                        marginBottom: '0.5rem' 
                      }}>
                        Business Leaders
                      </h2>
                      <p style={{ color: 'var(--brand-purple)', fontSize: '1.1rem' }}>
                        Strategic Decision Making
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    fontSize: '1.25rem', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    marginBottom: '2rem' 
                  }}>
                    See where you're heading and what to do about it—before others do.
                  </p>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '1.5rem', 
                    marginBottom: '2rem' 
                  }}>
                    <div style={{ 
                      background: 'rgba(220, 38, 38, 0.1)', 
                      border: '1px solid rgba(220, 38, 38, 0.3)', 
                      padding: '1rem', 
                      borderRadius: '8px' 
                    }}>
                      <h4 style={{ 
                        color: '#fca5a5', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem' 
                      }}>
                        Current Pain:
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Can't get cross-functional visibility
                      </p>
                    </div>
                    <div style={{ 
                      background: 'rgba(34, 197, 94, 0.1)', 
                      border: '1px solid rgba(34, 197, 94, 0.3)', 
                      padding: '1rem', 
                      borderRadius: '8px' 
                    }}>
                      <h4 style={{ 
                        color: '#86efac', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem' 
                      }}>
                        With GrofleX:
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Forecasting + ROI metrics on day 1
                      </p>
                    </div>
                  </div>
                  
                  <a href="#roi" className="btn-primary">See How GrofleX Drives ROI</a>
                </div>
                
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                  padding: '2rem', 
                  borderRadius: '12px' 
                }}>
                  <h4 style={{ 
                    color: 'var(--brand-cream)', 
                    fontWeight: '600', 
                    marginBottom: '1.5rem', 
                    textAlign: 'center' 
                  }}>
                    Key Features:
                  </h4>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '1rem' 
                  }}>
                    {['Executive Dashboards', 'Risk Forecasting', 'ROI Tracking', 'Strategic Planning'].map((feature, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          background: 'var(--brand-coral)', 
                          borderRadius: '50%', 
                          margin: '0 auto 0.5rem' 
                        }}></div>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BI Managers */}
            <div className="glass-card" style={{ padding: '3rem' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '3rem', 
                alignItems: 'center' 
              }}>
                <div style={{ order: 2 }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    marginBottom: '1.5rem' 
                  }}>
                    <div style={{ fontSize: '4rem' }}>📊</div>
                    <div>
                      <h2 className="text-gradient" style={{ 
                        fontSize: '2rem', 
                        marginBottom: '0.5rem' 
                      }}>
                        BI Managers
                      </h2>
                      <p style={{ color: 'var(--brand-purple)', fontSize: '1.1rem' }}>
                        Operational Intelligence
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    fontSize: '1.25rem', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    marginBottom: '2rem' 
                  }}>
                    Deliver predictive dashboards that tell leadership what matters.
                  </p>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '1.5rem', 
                    marginBottom: '2rem' 
                  }}>
                    <div style={{ 
                      background: 'rgba(220, 38, 38, 0.1)', 
                      border: '1px solid rgba(220, 38, 38, 0.3)', 
                      padding: '1rem', 
                      borderRadius: '8px' 
                    }}>
                      <h4 style={{ 
                        color: '#fca5a5', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem' 
                      }}>
                        Current Pain:
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Reporting fatigue + bottlenecks
                      </p>
                    </div>
                    <div style={{ 
                      background: 'rgba(34, 197, 94, 0.1)', 
                      border: '1px solid rgba(34, 197, 94, 0.3)', 
                      padding: '1rem', 
                      borderRadius: '8px' 
                    }}>
                      <h4 style={{ 
                        color: '#86efac', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem' 
                      }}>
                        With GrofleX:
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Instant insights with no analyst lag
                      </p>
                    </div>
                  </div>
                  
                  <a href="#platform" className="btn-primary">Explore the Platform</a>
                </div>
                
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                  padding: '2rem', 
                  borderRadius: '12px', 
                  order: 1 
                }}>
                  <h4 style={{ 
                    color: 'var(--brand-cream)', 
                    fontWeight: '600', 
                    marginBottom: '1.5rem', 
                    textAlign: 'center' 
                  }}>
                    Key Features:
                  </h4>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '1rem' 
                  }}>
                    {['Automated Reporting', 'Predictive Analytics', 'Team Collaboration', 'Data Governance'].map((feature, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          background: 'var(--brand-coral)', 
                          borderRadius: '50%', 
                          margin: '0 auto 0.5rem' 
                        }}></div>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Analysts */}
            <div className="glass-card" style={{ padding: '3rem' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '3rem', 
                alignItems: 'center' 
              }}>
                <div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    marginBottom: '1.5rem' 
                  }}>
                    <div style={{ fontSize: '4rem' }}>🔍</div>
                    <div>
                      <h2 className="text-gradient" style={{ 
                        fontSize: '2rem', 
                        marginBottom: '0.5rem' 
                      }}>
                        Analysts
                      </h2>
                      <p style={{ color: 'var(--brand-purple)', fontSize: '1.1rem' }}>
                        Advanced Analytics
                      </p>
                    </div>
                  </div>
                  
                  <p style={{ 
                    fontSize: '1.25rem', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    marginBottom: '2rem' 
                  }}>
                    Automate insight delivery and eliminate low-impact work.
                  </p>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '1.5rem', 
                    marginBottom: '2rem' 
                  }}>
                    <div style={{ 
                      background: 'rgba(220, 38, 38, 0.1)', 
                      border: '1px solid rgba(220, 38, 38, 0.3)', 
                      padding: '1rem', 
                      borderRadius: '8px' 
                    }}>
                      <h4 style={{ 
                        color: '#fca5a5', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem' 
                      }}>
                        Current Pain:
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Manual dashboards & reactive reporting
                      </p>
                    </div>
                    <div style={{ 
                      background: 'rgba(34, 197, 94, 0.1)', 
                      border: '1px solid rgba(34, 197, 94, 0.3)', 
                      padding: '1rem', 
                      borderRadius: '8px' 
                    }}>
                      <h4 style={{ 
                        color: '#86efac', 
                        fontWeight: '600', 
                        marginBottom: '0.5rem' 
                      }}>
                        With GrofleX:
                      </h4>
                      <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        Self-serve AI. Ask, predict, act.
                      </p>
                    </div>
                  </div>
                  
                  <a href="#trial" className="btn-primary">Try It Free</a>
                </div>
                
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(255, 107, 107, 0.2))', 
                  padding: '2rem', 
                  borderRadius: '12px' 
                }}>
                  <h4 style={{ 
                    color: 'var(--brand-cream)', 
                    fontWeight: '600', 
                    marginBottom: '1.5rem', 
                    textAlign: 'center' 
                  }}>
                    Key Features:
                  </h4>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gap: '1rem' 
                  }}>
                    {['Natural Language Queries', 'Automated Insights', 'Model Building', 'Data Exploration'].map((feature, idx) => (
                      <div key={idx} className="glass-card" style={{ padding: '1rem', textAlign: 'center' }}>
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          background: 'var(--brand-coral)', 
                          borderRadius: '50%', 
                          margin: '0 auto 0.5rem' 
                        }}></div>
                        <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', marginTop: '4rem' }}>
            <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>
              Ready to See GrofleX in Action?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '2rem' }}>
              Choose your path and discover how GrofleX delivers clarity for your specific role
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <a href="#trial" className="btn-primary">Start Free Trial</a>
              <a href="#demo" className="btn-secondary">Book a Demo</a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PageSolutions;
