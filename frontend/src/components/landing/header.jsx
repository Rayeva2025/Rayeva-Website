import { useState, useEffect } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" }, 
    { name: "Brands", path: "/brands" }, 
    { name: "Shop", path: "/shop" }, 
    { name: "Blog", path: "/blog" }, 
    { name: "Join", path: "/join" }, 
    { name: "Contact", path: "/contact" }, 
  ];


  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-full bg-white/20 backdrop-blur-lg shadow-lg ring-1 ring-white/10">
        <div className="flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-2xl  text-[#4da8b3] text-shadow-amber-400 font-extrabold hover:text-[#177e89] transition-colors duration-300 flex items-center"
              style={{ textShadow: "1px 1px 0px rgba(255, 255, 255, 0.4)" }}
            >
              <span className="relative flex justify-center items-center">
                <img src="/logo.svg" alt="logo" width={60} height={60} />
                Rayeva
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-300 origin-left transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className={`relative px-4 py-2 font-extrabold transition-all duration-300 ${
                  hoveredItem === index
                    ? "text-[#0751aa]"
                    : "text-black hover:text-white"
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
                {hoveredItem === index && (
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#4da8b3] rounded-full origin-left animate-underline"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-black/90 hover:text-emerald-300 transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-black/90 hover:text-emerald-300 transition-colors duration-300">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-black/90 hover:text-emerald-300 transition-colors duration-300 relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-emerald-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center animate-ping-once">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-black/90 hover:text-emerald-300 transition-colors duration-300"
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
        } transition-all duration-300 ease-in-out mt-2`}
      >
        <div className="rounded-2xl bg-black/20 backdrop-blur-lg shadow-lg ring-1 ring-white/10 px-4 py-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="block px-3 py-2 rounded-full text-base font-medium text-black/90 hover:text-emerald-300 hover:bg-white/10 transition-colors duration-300"
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
