import React from "react";
import F2 from "../assets/F2.jpg";
import {
  FaCode,
  FaWandSparkles,
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaMobileScreen,
} from "react-icons/fa6";

const About = () => {
  const services = [
    {
      icon: <FaLaptopCode size={22} className="text-teal-400" />,
      title: "Web Development",
      description: "Modern responsive websites.",
    },
    {
      icon: <FaPalette size={22} className="text-teal-400" />,
      title: "UI/UX Design",
      description: "Clean user interfaces.",
    },
    {
      icon: <FaRocket size={22} className="text-teal-400" />,
      title: "Performance",
      description: "Fast web applications.",
    },
    {
      icon: <FaMobileScreen size={22} className="text-teal-400" />,
      title: "Responsive",
      description: "Perfect on all devices.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* IMAGE */}
        <div className="relative flex justify-center lg:w-1/2">

          {/* floating icon */}
          <div className="absolute md:left-8 left-5 top-4 md:top-10 z-1">
            <div className="bg-teal-500 text-white p-3 rounded-full shadow-lg hover:rotate-12  transition duration-500">
              <FaCode size={18} />
            </div>
          </div>

          <div className="relative group">

            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-[0_0_40px_rgba(20,184,166,0.4)] group-hover:scale-105 transition duration-500">

              <img
                src={F2}
                alt="profile"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="absolute md:bottom-6 bottom-3 right-6 md:right-8">
              <div className="bg-yellow-500 text-white p-3 rounded-full shadow-lg group-hover:rotate-12 transition duration-500">
                <FaWandSparkles size={18} />
              </div>
            </div>

          </div>
        </div>

        {/* TEXT */}
        <div className="lg:w-5xl space-y-10 text-center lg:text-left">

          {/* Title */}
          <div className="space-y-6 text-white">

            {/* Top Highlight Line (Hero style) */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-10 h-[2px] bg-yellow-400 "></span>
              <p className="text-sm tracking-[3px] text-yellow-400  font-medium">
                ABOUT ME
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif">
              Passionate{" "}
              <span className="relative text-teal-300 italic">
                Frontend Developer
                {/* <span className="absolute left-0 bottom-1 w-full h-2 bg-teal-400/30 -z-10 rounded"></span> */}
              </span>
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              I'm a frontend developer who loves creating
              modern, responsive and interactive websites
              
              I work with
              React, JavaScript, HTML and CSS
              to build fast and user-friendly web applications.
            </p>

          </div>

          {/* SERVICES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:-translate-y-2 hover:shadow-xl transition duration-500"
              >

                <div className="flex justify-center mb-3 text-xl">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;