import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

        {/* Logo */}
        <img src={logo} alt="logo" className="h-16 cursor-pointer" />

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
          {["Home", "About","Skills", "Projects",  "Contact"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer transition-all duration-300 hover:text-white"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#00c6ff] to-[#179ca8] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Premium Toggle */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-16 h-8 flex items-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1 transition-all duration-500"
          >
            {/* Icons */}
            <Sun
              size={16}
              className={`absolute left-2 transition-all duration-500 ${
                darkMode ? "opacity-0 scale-50" : "opacity-100 scale-100 text-yellow-400"
              }`}
            />
            <Moon
              size={16}
              className={`absolute right-2 transition-all duration-500 ${
                darkMode ? "opacity-100 scale-100 text-cyan-300" : "opacity-0 scale-50"
              }`}
            />

            {/* Sliding Circle */}
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-700 shadow-lg transform transition-all duration-500 ${
                darkMode ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/5 border-t border-white/10 px-6 py-6 space-y-4 text-center text-gray-300">

          {["Home", "About","Skills", "Projects",  "Contact"].map((item) => (
            <p key={item} className="hover:text-white transition duration-300">
              {item}
            </p>
          ))}

          {/* Mobile Toggle */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-16 h-8 flex items-center rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1 transition-all duration-500"
            >
              <Sun
                size={16}
                className={`absolute left-2 transition-all duration-500 ${
                  darkMode ? "opacity-0 scale-50" : "opacity-100 scale-100 text-yellow-400"
                }`}
              />
              <Moon
                size={16}
                className={`absolute right-2 transition-all duration-500 ${
                  darkMode ? "opacity-100 scale-100 text-cyan-300" : "opacity-0 scale-50"
                }`}
              />
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-cyan-600 to-cyan-700 shadow-lg transform transition-all duration-500 ${
                  darkMode ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;