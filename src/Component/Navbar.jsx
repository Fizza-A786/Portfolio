import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import "../Component/Navbar.css"

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`fixed w-full flex justify-between items-center p-4 transition-all duration-300
        ${darkMode 
          ? "bg-black/40 text-white backdrop-blur-2xl" 
          : "bg-white/20 text-black backdrop-blur-2xl"}`
      }
    >
      {/* Logo */}
      <h2 className="text-2xl font-extrabold cursor-pointer flex items-center gap-2">
        <FaReact className="text-cyan-400" size={28} /> Ates.dev
      </h2>

      {/* Nav Links */}
      <ul className="flex gap-6">
        {["Home", "About", "Projects", "Contact"].map((link) => (
          <li
            key={link}
            className="relative px-3 py-1 rounded-xl cursor-pointer transition-all duration-300 hover:bg-teal-500/20 hover:text-teal-400"
          >
            {link}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Dark/Light Toggle */}
      <button
        className="flex items-center gap-2 text-teal-400 hover:text-white transition-all duration-300"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <MdSunny size={20} /> : <FaMoon size={20} />}
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
};

export default Navbar;