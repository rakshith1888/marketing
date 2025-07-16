import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Solutions", path: "/solutions", hasDropdown: true },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Pricing", path: "/pricing" },
  ];

  const solutionsDropdownItems = [
    { name: "Healthcare", path: "/healthcare" },
    { name: "Finance", path: "/finance" },
    { name: "Financial Services", path: "/financial-services" },
    { name: "Retail", path: "/retail" },
    { name: "E-commerce", path: "/e-commerce" },
    { name: "Manufacturing", path: "/manufacturing" },
  ];

  const isActive = (path: string) => location.pathname === path;

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
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSolutionsClick = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

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
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.hasDropdown ? dropdownRef : null}
              >
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm lg:text-base transition-colors duration-200 ${
                        isActive(item.path) ||
                        solutionsDropdownItems.some((dropdownItem) =>
                          isActive(dropdownItem.path)
                        )
                          ? "text-brand-purple"
                          : "text-white/80 hover:text-brand-purple"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <ChevronDown
                      size={16}
                      className={`text-white/80 group-hover:text-brand-purple transition-all duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-lg py-2 z-50">
                        {solutionsDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            onClick={handleDropdownItemClick}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              isActive(dropdownItem.path)
                                ? "text-brand-purple bg-white/5"
                                : "text-white/80 hover:text-brand-purple hover:bg-white/5"
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )}
              </div>
            ))}

            {/* Free Trial Button */}
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 lg:ml-4 bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              Free Trial
            </a>
            <Link
              to="/Contactus"
              className="ml-2 lg:ml-4 bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle & CTA */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
            >
              Free Trial
            </a>
            <Link
              to="/Contactus"
              className="ml-2 lg:ml-4 bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              Contact Us
            </Link>
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
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between py-2 px-1">
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`transition-colors duration-200 ${
                            isActive(item.path) ||
                            solutionsDropdownItems.some((dropdownItem) =>
                              isActive(dropdownItem.path)
                            )
                              ? "text-brand-purple"
                              : "text-white/80 hover:text-brand-purple"
                          }`}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={handleSolutionsClick}
                          className="p-1 ml-2"
                          aria-label="Toggle solutions dropdown"
                        >
                          <ChevronDown
                            size={16}
                            className={`text-white/80 transition-transform duration-200 ${
                              isMobileDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {isMobileDropdownOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {solutionsDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileDropdownOpen(false);
                              }}
                              className={`block py-2 px-2 text-sm transition-colors duration-200 ${
                                isActive(dropdownItem.path)
                                  ? "text-brand-purple"
                                  : "text-white/60 hover:text-brand-purple"
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
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
                  )}
                </div>
              ))}

              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href="https://app.groflex.ai/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Free Trial
                </a>
                <Link
                  to="/Contactus"
                  className="mt-3 block text-center bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
