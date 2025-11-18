import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon, Heart, Menu, X } from "lucide-react";
import Home1 from "../assets/header/Home1.svg";
import Title from "../assets/header/Title1.svg";
import { toggleTheme } from "../redux/themeSlice";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);
  const { count } = useSelector((state) => state.favorites);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
    { href: "#testimonial", label: "Testimonial" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className="bg-no-repeat bg-cover sticky top-0 z-50 shadow-md"
      style={{ backgroundImage: `url(${Home1})` }}
    >
      <div className="flex items-center justify-between h-20 max-w-9/12 mx-auto px-4 lg:px-0">
        <div className="">
          <img className="h-12 w-40 md:w-full" src={Title} alt="Title" />
        </div>
        <nav className="hidden lg:flex justify-center">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-amber-700 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors shadow-sm"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-amber-800" />
            ) : (
              <Moon className="h-5 w-5 text-amber-800" />
            )}
          </button>

          {/* Favorites */}
          <button className="relative p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors shadow-sm">
            <Heart className="h-5 w-5 text-amber-800" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors shadow-sm ml-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-amber-800" />
            ) : (
              <Menu className="h-5 w-5 text-amber-800" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bg-amber-800/95 backdrop-blur-lg shadow-lg z-40 animate-slideDown">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-amber-200 font-medium py-3 px-4 border-b border-amber-700/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-30 top-20"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
