import { useState, useEffect } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Brands", path: "/brands" },
    { name: "Shop", path: "/shop" },
    { name: "More", path: "/more" },
  ];

  return (
    <header
      className={`fixed w-full rounded-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl font-bold text-emerald-700 hover:text-emerald-600 transition-colors duration-300 flex items-center"
            >
              <span className="relative">
                Rayeva
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  hoveredItem === index
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
                {hoveredItem === index && (
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-emerald-600 rounded-full origin-left animate-underline"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-ping-once">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div
          className={`px-2 pt-2 pb-4 space-y-1 ${
            isScrolled ? "bg-white/95" : "bg-white/90"
          } backdrop-blur-md shadow-lg`}
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
