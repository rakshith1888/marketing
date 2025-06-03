import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Products',
    path: '/products'
  }, {
    name: 'Solutions',
    path: '/solutions'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Pricing',
    path: '/pricing'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/lovable-uploads/a3aae564-5196-4ed4-8841-3948ebfd1bfe.png" alt="Groflex" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className="">
                {item.name}
              </Link>)}
            <button className="bg-gradient-purple text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-purple transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-brand-purple' : 'text-white/80 hover:text-brand-purple'}`}>
                  {item.name}
                </Link>)}
              <button className="bg-gradient-purple text-white px-6 py-2 rounded-full self-start">
                Get Started
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;