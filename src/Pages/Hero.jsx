import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero min-h-screen flex items-center bg-gray-50 dark:bg-gray-900 px-19">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#005461]  font-family: 'Crimson Pro', serif;">
            Hi, I'm Fizza
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "UI Designer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl font-medium text-[#0C7779]"
          />

          <p className="text-gray-700 dark:text-gray-300 text-base mt-6 md:text-lg max-w-md mx-auto md:mx-0">
            I build modern, responsive, and interactive web applications using
            React and modern technologies.
          </p>

          <button
            className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-transform duration-300 transform hover:scale-105"
            style={{ background: "linear-gradient(90deg, #005461, #0C7779)" }}
          >
            View Projects
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://png.pngtree.com/png-clipart/20241117/original/pngtree-smiling-muslim-woman-in-pink-hijab-clipart-illustration-png-image_17160530.png"
            alt="Ates Hero"
            className="w-64 md:w-96 rounded-full shadow-4xl shadow-[#005461] hover:scale-105 transition-transform duration-500  border border-2 border-[#005461] img-shadow"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;