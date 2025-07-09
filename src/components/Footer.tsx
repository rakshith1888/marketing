import { Facebook, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const legalLinks = [
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Imprint", path: "/imprint" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/groflexai/",
      icon: Facebook,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/grofleXai",
      icon: () => (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/groflexai",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@grofleXai",
      icon: Youtube,
    },
  ];

  return (
    <footer className="bg-black border-t border-gradient-to-r from-brand-purple to-brand-coral py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <img
            src="/lovable-uploads/headerlogo.png"
            alt="Groflex Logo"
            className="h-7 w-auto"
          />
          <div className="text-sm text-foreground/60">
            <p className="font-semibold text-foreground/80">Headquarters</p>
            <p>2261 Market Street STE 5943</p>
            <p>San Francisco, CA, USA</p>
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-foreground font-semibold mb-4">Legal</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-foreground/60 hover:text-brand-purple hover:underline transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-foreground font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-coral text-white hover:scale-105 transition-transform shadow-lg"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-brand-purple/20 pt-6 text-center">
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} Groflex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
