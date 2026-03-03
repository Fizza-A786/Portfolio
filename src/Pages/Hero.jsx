import React from "react";
import F1 from "../assets/F1.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br px-6 md:px-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row mt-23 items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left space-y-8 text-white">

          {/* Small Tag */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-15">
            <span className="w-10 h-[2px] bg-yellow-400"></span>
            <p className="text-sm tracking-[3px] text-yellow-400 font-medium">
              PREMIUM FRONTEND DEVELOPER
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-serif leading-tight">
            Hi, I'm
            <br />
            <span className="relative inline-block italic text-teal-300">
              Fizza Amjad.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-[18px] max-w-xl -mt-3 mx-auto md:mx-0 leading-relaxed">
            React Frontend Developer passionate about building{" "}
            <span className="font-semibold text-white">
              responsive, high-performance web applications
            </span>{" "}
            using modern UI technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-5 pt-4">

            {/* Download CV */}
            <button className="inline-block px-7 py-3 rounded-full bg-gradient-to-r from-[#0097b2] to-[#0C7779] text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40 hover:shadow-xl active:translate-y-0">
              Download CV
            </button>

            {/* See My Work */}
            <button className="inline-block px-7 py-2.5 rounded-full border-2 border-teal-300 text-teal-300 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r from-[#0097b2] to-[#0C7779] hover:text-white hover:shadow-cyan-500/40 hover:shadow-xl active:translate-y-0">
              See My Work
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-teal-600 shadow-[0_0_40px_rgba(20,184,166,0.4)] transition-all duration-500 hover:scale-105">
            <img
              src={F1}
              alt="Fizza"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;