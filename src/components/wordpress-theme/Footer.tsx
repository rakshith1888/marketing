
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  useEffect(() => {
    // Add smooth scrolling
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href') || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add scroll effects
    const handleScroll = () => {
      const nav = document.querySelector('.main-nav') as HTMLElement;
      if (nav) {
        if (window.scrollY > 100) {
          nav.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
          nav.style.background = 'rgba(255, 255, 255, 0.05)';
        }
      }
    };

    // Initialize animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = '0';
      cardElement.style.transform = 'translateY(30px)';
      cardElement.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <footer className="section" style={{ 
      background: 'rgba(255, 255, 255, 0.05)', 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem', 
          marginBottom: '3rem' 
        }}>
          <div>
            <img 
              src="/assets/logo.png" 
              alt="GrofleX" 
              style={{ height: '32px', marginBottom: '1rem' }} 
            />
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              marginBottom: '1rem' 
            }}>
              Predictive analytics and prescriptive next steps, powered by AI.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--brand-purple)', fontSize: '1.5rem' }}>📧</a>
              <a href="#" style={{ color: 'var(--brand-purple)', fontSize: '1.5rem' }}>💼</a>
              <a href="#" style={{ color: 'var(--brand-purple)', fontSize: '1.5rem' }}>🐦</a>
              <a href="#" style={{ color: 'var(--brand-purple)', fontSize: '1.5rem' }}>📺</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ 
              color: 'var(--brand-purple)', 
              marginBottom: '1rem', 
              fontWeight: '600' 
            }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Features</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>API</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Integrations</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              color: 'var(--brand-purple)', 
              marginBottom: '1rem', 
              fontWeight: '600' 
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ 
              color: 'var(--brand-purple)', 
              marginBottom: '1rem', 
              fontWeight: '600' 
            }}>
              Support
            </h4>
            <ul style={{ listStyle: 'none', color: 'rgba(255, 255, 255, 0.7)' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Documentation</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Help Center</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          paddingTop: '2rem', 
          textAlign: 'center', 
          color: 'rgba(255, 255, 255, 0.6)' 
        }}>
          <p>&copy; {new Date().getFullYear()} GrofleX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
