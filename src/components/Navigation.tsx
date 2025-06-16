import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing', path: '/pricing' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 dark:bg-black/80 light:bg-white/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              style={{ height: '25px', width: '85px' }}
              src="/lovable-uploads/headerlogo.png" 
              alt="GrofleX Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-brand-purple'
                    : 'text-white/80 dark:text-white/80 light:text-foreground/80 hover:text-brand-purple'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Get Started Button */}
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>

            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile menu button and CTA */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Get Started Button */}
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>

            {/* <ThemeToggle /> */}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 dark:text-white/80 light:text-foreground/80 hover:text-white dark:hover:text-white light:hover:text-foreground transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 dark:border-white/10 light:border-black/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-brand-purple'
                      : 'text-white/80 dark:text-white/80 light:text-foreground/80 hover:text-brand-purple'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* CTA for mobile */}
              <a
                href="https://app.groflex.ai/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 text-center bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
