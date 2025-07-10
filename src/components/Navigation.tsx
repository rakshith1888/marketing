import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();
  const solutionsRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
          >
            <img
              style={{ height: "20px", width: "68px" }}
              src="/lovable-uploads/headerlogo.png"
              alt="Groflex Logo"
              className="h-5 w-auto sm:h-6 md:h-7 lg:h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  ref={solutionsRef}
                  className="relative group"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      to={item.path}
                      className={`text-sm lg:text-base transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-brand-purple"
                          : "text-white/80 hover:text-brand-purple"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSolutionsOpen(!isSolutionsOpen);
                      }}
                      className="text-white/80 hover:text-brand-purple transition-colors"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isSolutionsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 bg-white dark:bg-black border border-white/10 rounded-lg shadow-xl z-10 min-w-[200px] transform transition-all duration-200 origin-top ${
                      isSolutionsOpen
                        ? "opacity-100 scale-y-100"
                        : "opacity-0 scale-y-0 pointer-events-none"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-3 text-sm text-black dark:text-white hover:bg-brand-purple/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        onClick={() => setIsSolutionsOpen(false)}
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
                  className={`text-sm lg:text-base transition-colors duration-200 ${
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
              className="ml-2 lg:ml-4 bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button and CTA */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
            >
              Get Started
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="sm:w-6 sm:h-6" />
              ) : (
                <Menu size={20} className="sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-white/10">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.name} className="py-1">
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-2 px-1 font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? "text-brand-purple"
                          : "text-white/80 hover:text-brand-purple"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-1.5 px-1 text-sm text-white/70 hover:text-brand-purple transition-colors"
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
                    className={`block py-2 px-1 transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-brand-purple"
                        : "text-white/80 hover:text-brand-purple"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href="https://app.groflex.ai/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
