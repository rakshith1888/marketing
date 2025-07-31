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
                <p className="font-semibold text-foreground/80 mb-1">
                  USA
                </p>
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

        {/* Third Row: Google Map */}
        {/* <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg border border-brand-purple/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.268544034615!2d-122.43459047315334!3d37.76433252849883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f9548ed7e8b%3A0xa850a0737979da5e!2sgroflexerp.com!5e0!3m2!1sen!2sin!4v1753876291989!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div> */}
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
