
import { Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const legalLinks = [
    { name: 'Terms & Conditions', url: 'https://groflexerp.com/terms-and-conditions/' },
    { name: 'Privacy Policy', url: 'https://groflexerp.com/privacy-policy/' },
    { name: 'Cookie Policy', url: 'https://groflexerp.com/cookie-policy/' },
    { name: 'Imprint', url: 'https://groflexerp.com/imprint/' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/groflexERP',
      icon: Facebook 
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/grofleXERP',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/groflexerp',
      icon: Linkedin 
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@groflextech',
      icon: Youtube 
    },
  ];

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                style={{height: '40px', width: '40px'}}
                src="/lovable-uploads/logo.png" 
                alt="GrofleX Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="text-white/60 text-sm">
              <p className="font-medium text-white/80 mb-2">Headquarters</p>
              <p>2261 Market Street STE 5943</p>
              <p>San Francisco, CA, USA</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Legal</h3>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/60 hover:text-brand-purple transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-medium">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-brand-purple transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} GrofleX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
