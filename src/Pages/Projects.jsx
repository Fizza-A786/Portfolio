import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // fixed import

// Import images
import carRent from "../assets/carrent.jpg";
import charityImg from "../assets/charity.jpeg";
import serviceImg from "../assets/service.png";
import lawyerImg from "../assets/lawyer.jpg";
import laundryImg from "../assets/lundary.jpg";
import bookImg from "../assets/book.png";

const projects = [
  {
    title: "Car Rental",
    desc: "A responsive car rental platform built with HTML, CSS & JS.",
    category: "HTML&CSS",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    image: carRent,
    github: "#",
    live: "https://car-rental-yellow.vercel.app/",
  },
  {
    title: "Charity Blush",
    desc: "React-powered charity platform with interactive UI.",
    category: "React",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: charityImg,
    github: "#",
    live: "https://charity-blush-psi.vercel.app/",
  },
  {
    title: "IT Services",
    desc: "Task management web app using JS, Node & API integration.",
    category: "JavaScript",
    tech: ["HTML", "CSS", "JS", "Node", "API"],
    image: serviceImg,
    github: "#",
    live: "https://it-service-red.vercel.app/",
  },
  {
    title: "Lawyer",
    desc: "Professional site for lawyers built with React & Tailwind.",
    category: "React",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: lawyerImg,
    github: "#",
    live: "#",
  },
  {
    title: "Laundry Management",
    desc: "Complete laundry service website built using HTML, CSS & JS.",
    category: "HTML&CSS",
    tech: ["HTML", "CSS", "JS", "Bootstrap"],
    image: laundryImg,
    github: "#",
    live: "https://lundary.vercel.app/",
  },
  {
    title: "Book Cover Design",
    desc: "Creative landing page showcasing book designs with HTML & CSS.",
    category: "HTML&CSS",
    tech: ["HTML", "CSS", "JS", "Tailwind"],
    image: bookImg,
    github: "#",
    live: "https://book-cover-design.vercel.app/",
  },
];

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category.trim().toLowerCase() === filter.trim().toLowerCase()
        );

  return (
    <section
      id="projects"
      className={`py-24 transition-colors duration-500 ${
        darkMode ? "bg-[#895129] text-[#FAF9F6]" : "bg-[#FAF9F6] text-[#895129]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-14">
          <h2
            className={`text-4xl font-serif italic ${
              darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
            }`}
          >
            My Projects
          </h2>
          <p
            className={`text-sm tracking-widest mt-2 ${
              darkMode ? "text-[#FAF9F6]/80" : "text-[#895129]/80"
            }`}
          >
            FEATURED WORK
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {["All", "HTML&CSS", "JavaScript", "React"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === btn
                  ? darkMode
                    ? "bg-[#FAF9F6] text-[#895129] shadow-lg scale-105"
                    : "bg-[#895129] text-[#FAF9F6] shadow-lg scale-105"
                  : darkMode
                  ? "bg-white/10 text-[#FAF9F6] border border-[#FAF9F6]/30 hover:bg-white/20"
                  : "bg-white border text-[#895129] hover:bg-gray-100"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-[1px] overflow-hidden"
            >
              {/* Glassy Card */}
              <div
                className={`rounded-2xl h-full transition duration-500 backdrop-blur-xl hover:-translate-y-1 ${
                  darkMode
                    ? "bg-[#FAF9F6]/10 border border-[#FAF9F6]/20 shadow-[0_8px_30px_rgba(250,249,246,0.6)] hover:shadow-[0_10px_40px_rgba(250,249,246,0.8)]"
                    : "bg-[#895129]/10 border border-[#895129]/20 shadow-[0_8px_20px_rgba(137,81,41,0.4)] hover:shadow-[0_10px_25px_rgba(137,81,41,0.6)]"
                }`}
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY ICONS */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6 ${
                      darkMode
                        ? "bg-black/60"
                        : "bg-white/70 backdrop-blur-sm"
                    }`}
                  >
                    <a
                      href={project.github}
                      className={`p-3 rounded-full transition ${
                        darkMode ? "bg-[#FAF9F6] text-[#895129]" : "bg-[#895129] text-[#FAF9F6]"
                      } hover:scale-110 shadow-lg`}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      className={`p-3 rounded-full transition ${
                        darkMode ? "bg-[#FAF9F6] text-[#895129]" : "bg-[#895129] text-[#FAF9F6]"
                      } hover:scale-110 shadow-lg`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-4">
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`text-sm ${
                      darkMode ? "text-[#FAF9F6]/70" : "text-[#895129]/70"
                    }`}
                  >
                    {project.desc}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-full backdrop-blur-sm border ${
                          darkMode
                            ? "bg-[#FAF9F6]/10 text-[#FAF9F6] border-[#FAF9F6]/30"
                            : "bg-[#895129]/10 text-[#895129] border-[#895129]/30"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="flex gap-6 pt-3 text-sm">
                    <a
                      href={project.github}
                      className={`flex items-center gap-2 transition hover:text-cyan-500 ${
                        darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
                      }`}
                    >
                      <FaGithub /> Code
                    </a>

                    <a
                      href={project.live}
                      className={`flex items-center gap-2 transition hover:text-cyan-500 ${
                        darkMode ? "text-[#FAF9F6]" : "text-[#895129]"
                      }`}
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;