import { Facebook, Linkedin, Youtube } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isMobilePage = location.pathname.toLowerCase().startsWith("/ftf");

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
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
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

  if (isMobilePage) {
    return <MobileFooter legalLinks={legalLinks} socialLinks={socialLinks} />;
  }

  return <DesktopFooter legalLinks={legalLinks} socialLinks={socialLinks} />;
};

// Mobile-optimized footer for /ftf route
const MobileFooter = ({ legalLinks, socialLinks }) => {
  return (
    <footer className="bg-black border-t border-gradient-to-r from-brand-purple to-brand-coral py-14 px-6">
      <div className="px-4 py-8">
        {/* Address Locations */}
        <div className="mb-8">
          <h4 className="text-center text-lg font-semibold mb-4 text-slate-200">
            Our Locations
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {/* Location 1 */}
            <div className="bg-slate-700/50 rounded-xl border border-slate-600/30 p-4 text-center">
              <h5 className="text-sm font-semibold text-slate-200 mb-1">USA</h5>
              <p className="text-xs text-slate-300 leading-tight">
                San Francisco
                <br />
                CA 94114
              </p>
            </div>

            {/* Location 2 */}
            <div className="bg-slate-700/50 rounded-xl border border-slate-600/30 p-4 text-center">
              <h5 className="text-sm font-semibold text-slate-200 mb-1">
                Asia
              </h5>
              <p className="text-xs text-slate-300 leading-tight">
                India
                <br />
                Bengaluru 560068
              </p>
            </div>

            {/* Location 3 */}
            <div className="bg-slate-700/50 rounded-xl border border-slate-600/30 p-4 text-center">
              <h5 className="text-sm font-semibold text-slate-200 mb-1">
                Middle East
              </h5>
              <p className="text-xs text-slate-300 leading-tight">
                Qatar
                <br />
                Doha
              </p>
            </div>

            {/* Location 4 */}
            <div className="bg-slate-700/50 rounded-xl border border-slate-600/30 p-4 text-center">
              <h5 className="text-sm font-semibold text-slate-200 mb-1">
                Europe
              </h5>
              <p className="text-xs text-slate-300 leading-tight">
                Germany
                <br />
                Dusseldorf 40213
              </p>
            </div>
          </div>
        </div>

        {/* Social Links - Large, Card-style */}
        <div className="mb-8">
          <h4 className="text-center text-lg font-semibold mb-4 text-slate-200">
            Connect With Us
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-6 h-6 mr-3 text-slate-300" />
                  <span className="text-sm font-medium text-slate-200">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links - Compact Pills */}
        <div className="mb-6">
          <h4 className="text-center text-sm font-medium mb-4 text-slate-400 uppercase tracking-wide">
            Quick Links
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                to={`/ftf${link.path}`}
                className="px-3 py-2 bg-slate-700/30 rounded-full text-xs text-slate-300 hover:bg-slate-600/40 hover:text-white transition-colors duration-200 border border-slate-600/20"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright - Minimal */}
        <div className="text-center pt-4 border-t border-slate-700/50">
          <p className="text-xs text-slate-400">
            © 2025 GrofleX AI • All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// Keep existing desktop footer design
const DesktopFooter = ({ legalLinks, socialLinks }) => {
  return (
    <footer className="bg-black border-t border-gradient-to-r from-brand-purple to-brand-coral py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* First Row: Headquarters, Legal, Follow Us */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 col-span-1">
            <img
              src="/lovable-uploads/headerlogo.png"
              alt="Groflex Logo"
              className="h-7 w-auto"
            />
            <div className="text-sm text-foreground/60 space-y-4">
              <div>
                <p className="font-semibold text-foreground/80 mb-2">
                  Headquarters
                </p>
                <p className="font-semibold text-foreground/80 mb-1">USA</p>
                <p>2261 Market Street STE 5943</p>
                <p>San Francisco, CA, USA 94114</p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
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
          <div className="col-span-1">
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
                    className="group inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-coral text-white hover:scale-105 transition-transform shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Second Row: Satellite Offices */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-12 mb-12">
          <div className="text-sm text-foreground/60">
            <p className="font-semibold text-foreground/80 mb-1">India</p>
            <p>Groflex Technology Pvt. Ltd.</p>
            <p>
              42, P5, Kudlu Main Rd, Muneshwara Layout, Haralukunte, Muneshwara
              Nagar, Bengaluru 560068, Karnataka, India
            </p>
          </div>
          <div className="text-sm text-foreground/60">
            <p className="font-semibold text-foreground/80 mb-1">Qatar</p>
            <p>Groflex Technology LLC</p>
            <p>
              QFC Business Centre, Office No. 8, situated at First Floor, QFC
              Tower 1, West Bay, Doha
            </p>
          </div>
          <div className="text-sm text-foreground/60">
            <p className="font-semibold text-foreground/80 mb-1">Germany</p>
            <p>Groflex Technology U.G.</p>
            <p>Tech Hub K67, Kasernenstraße 67, 40213 Düsseldorf, Germany.</p>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-12 border-t border-brand-purple/20 pt-6 text-center">
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} Groflex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
