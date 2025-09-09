import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isMobile = location.pathname.toLowerCase().startsWith("/ftf");
  const logoPath = isMobile ? "/ftf" : "/";

  // Exclude /FTF from navigation unless on /FTF path
  const navItems = isMobile
    ? []
    : [
        { name: "Home", path: "/" },
        { name: "Product", path: "/product" },
        { name: "Solutions", path: "/solutions", hasDropdown: true },
        { name: "About", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Pricing", path: "/pricing" },
      ];

  const solutionsDropdownItems = {
    Industries: [
      { name: "Healthcare", path: "/healthcare" },
      { name: "Finance", path: "/finance" },
      { name: "Retail", path: "/retail" },
      { name: "E-commerce", path: "/e-commerce" },
      { name: "Manufacturing", path: "/manufacturing" },
      { name: "Financial services", path: "/financial-services" },
    ],
    Functions: [
      { name: "Marketing", path: "/marketing" },
      { name: "Sales", path: "/sales" },
      { name: "Operations", path: "/operations" },
      { name: "Human-Resources", path: "/human-resources" },
      { name: "Finance-and-accounting ", path: "/finance-and-accounting" },
      { name: "IT", path: "/It" },
    ],
    Roles: [
      { name: "Business-leaders", path: "/business-leaders" },
      { name: "BI-managers", path: "/bi-managers" },
      { name: "Data-analysts", path: "/data-analysts" },
    ],
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  }, [location.pathname]);

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
          {/* Left side */}
          <div className="flex items-center space-x-12">
            <Link
              to={logoPath}
              className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
            >
              <img
                style={{ height: "45px", width: "135px" }}
                src="/lovable-uploads/headerlogo.png"
                alt="Groflex Logo"
                className="h-5 w-auto sm:h-6 md:h-7 lg:h-8"
              />
            </Link>

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
                        className={`text-base lg:text-xl transition-colors duration-200 ${
                          isActive(item.path) ||
                          Object.values(solutionsDropdownItems)
                            .flat()
                            .some((dropdownItem) => isActive(dropdownItem.path))
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
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-[700px] bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-lg py-6 px-6 grid grid-cols-3 gap-4 z-50">
                          {Object.entries(solutionsDropdownItems).map(
                            ([category, items]) => (
                              <div key={category}>
                                <h4 className="text-white/70 font-semibold mb-3 text-base uppercase tracking-wider">
                                  {category}
                                </h4>
                                {items.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={handleDropdownItemClick}
                                    className={`block py-2 text-base transition-colors duration-200 ${
                                      isActive(item.path)
                                        ? "text-brand-purple"
                                        : "text-white/80 hover:text-brand-purple"
                                    }`}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-base lg:text-xl transition-colors duration-200 ${
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
            </div>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              Free Trial
            </a>
            <Link
              to="/Contactus"
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
            >
              Contact Us
            </Link>
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              // className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-4 py-2 lg:px-6 lg:py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-base whitespace-nowrap"
              className="text-white/80 text-lg font-semibold"
            >
              Login
            </a>
          </div>

          {/* Mobile menu toggle */}
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
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
            >
              Contact Us
            </Link>
            <a
              href="https://app.groflex.ai/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              // className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
            >
              Login
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
          className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
                            Object.values(solutionsDropdownItems)
                              .flat()
                              .some((dropdownItem) =>
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
                          {Object.values(solutionsDropdownItems)
                            .flat()
                            .map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setIsMobileDropdownOpen(false);
                                }}
                                className={`block py-2 px-2 text-base transition-colors duration-200 ${
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
