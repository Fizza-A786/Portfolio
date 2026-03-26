import React from "react";
import { FaLinkedin, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`w-full py-8 px-6 md:px-20 transition-colors duration-500 ${
        darkMode ? "bg-[#895129] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding / Info */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-semibold font-serif">Fizza Amjad</h2>
          <p className={`text-sm ${darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"}`}>
            Frontend Developer | Crafting modern, interactive websites
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/fizza-amjad-377859381"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
              darkMode
                ? "bg-[#FAF9F6] text-[#895129] hover:shadow-[#FAF9F6]/50"
                : "bg-[#895129] text-[#FAF9F6] hover:shadow-[#895129]/50"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61588151390765"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
              darkMode
                ? "bg-[#FAF9F6] text-[#895129] hover:shadow-[#FAF9F6]/50"
                : "bg-[#895129] text-[#FAF9F6] hover:shadow-[#895129]/50"
            }`}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://wa.me/+923260569202"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
              darkMode
                ? "bg-[#FAF9F6] text-[#895129] hover:shadow-[#FAF9F6]/50"
                : "bg-[#895129] text-[#FAF9F6] hover:shadow-[#895129]/50"
            }`}
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://github.com/Fizza-A786"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
              darkMode
                ? "bg-[#FAF9F6] text-[#895129] hover:shadow-[#FAF9F6]/50"
                : "bg-[#895129] text-[#FAF9F6] hover:shadow-[#895129]/50"
            }`}
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className={`mt-6 text-center text-sm ${darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/70"}`}>
        &copy; {new Date().getFullYear()} Fizza Amjad. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;