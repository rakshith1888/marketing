
import { Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Imprint', path: '/imprint' },
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/groflexai/',
      icon: Facebook 
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/grofleXai',
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
      url: 'https://www.youtube.com/@grofleXai',
      icon: Youtube 
    },
  ];

  return (
    <footer className="backdrop-blur-md border-t mt-auto transition-colors duration-300 dark:bg-black/80 dark:border-white/10 light:bg-white/80 light:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                style={{height: '25px', width: '85px'}}
                src="/lovable-uploads/headerlogo.png" 
                alt="GrofleX Logo"
                className="h-8 w-auto"
              />
            </div>
            <div className="text-muted-foreground text-sm">
              <p className="font-medium mb-2 text-foreground/80">Headquarters</p>
              <p>2261 Market Street STE 5943</p>
              <p>San Francisco, CA, USA</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium">Legal</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-brand-purple transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-medium">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-brand-purple transition-colors"
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
        <div className="border-t mt-8 pt-8 text-center border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Groflex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
