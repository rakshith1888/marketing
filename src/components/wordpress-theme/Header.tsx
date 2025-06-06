
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('.main-nav');
      const target = event.target as Node;
      
      if (nav && !nav.contains(target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <>
      <nav className="main-nav glass-card">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <span style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-coral))', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                GrofleX
              </span>
            </Link>
          </div>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li><Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link to="/products" className={isActive('/products') ? 'active' : ''}>Products</Link></li>
            <li><Link to="/solutions" className={isActive('/solutions') ? 'active' : ''}>Solutions</Link></li>
            <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link></li>
            <li><Link to="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</Link></li>
            <li><a href="#trial" className="nav-cta">Get Started</a></li>
          </ul>
          
          <button className="mobile-toggle" onClick={toggleMobileMenu}>☰</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
