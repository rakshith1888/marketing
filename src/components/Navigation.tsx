import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    {
      name: "Solutions",
      path: "/solutions",
      children: [
        { name: "Manufacturing", path: "/manufacturing" },
        { name: "Retail", path: "/retail" },
        { name: "Healthcare", path: "/healthcare" },
        { name: "Finance", path: "/finance" },
        { name: "E-commerce", path: "/e-commerce" },
        { name: "Financial Services", path: "/financial-services" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              style={{ height: "25px", width: "85px" }}
              src="/lovable-uploads/headerlogo.png"
              alt="Groflex Logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      to={item.path}
                      className={`transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-brand-purple"
                          : "text-white/80 hover:text-brand-purple"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault(); // prevent navigation
                        setIsSolutionsOpen(!isSolutionsOpen);
                      }}
                      className="text-white/80 hover:text-brand-purple"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full mt-2 bg-white dark:bg-black border border-white/10 rounded-md shadow-lg z-10 min-w-[180px] transform transition-all duration-300 origin-top ${
                      isSolutionsOpen
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-brand-purple/10"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-brand-purple"
                      : "text-white/80 hover:text-brand-purple"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}

            {/* Get Started Button */}
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`font-semibold transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-brand-purple"
                          : "text-white/80 hover:text-brand-purple"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 mt-1 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-sm text-white/70 hover:text-brand-purple"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-brand-purple"
                        : "text-white/80 hover:text-brand-purple"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

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
