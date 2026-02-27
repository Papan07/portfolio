"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "IntelliBazar",
      subtitle: "AI-Powered E-Commerce Platform",
      description:
        "Full-stack MERN e-commerce platform with AI chatbot, voice search, wishlist, cart, and secure authentication. Integrated Gemini AI and PayPal for smart shopping experience.",
      tech: ["React", "Node.js", "MongoDB", "Express", "AI", "OAuth"],
      image: "/Intellibazar.png",
      github: "https://github.com/kalviumcommunity/S89_Papan-Namasudra_Capstone_IntelliBazar",
      live: "https://intelli-personal.vercel.app/",
    },
    {
      title: "Chataltra",
      subtitle: "Real-Time Chat & Video Platform",
      description:
        "Scalable real-time communication platform with messaging, WebRTC video calls, voice recording, encryption, and JWT authentication with Socket.io.",
      tech: ["React", "WebRTC", "Socket.io", "Node.js", "MongoDB"],
      image: "/Chataltra.png",
      github: "https://github.com/Papan07/Chataltra",
      live: "https://chataltra.vercel.app/",
    },
    {
      title: "EntertainHub",
      subtitle: "Movie Discovery Platform",
      description:
        "Movie discovery platform using TMDB API with search, watchlist, authentication and scalable MongoDB backend. Built responsive UI with modern design.",
      tech: ["React", "TMDB API", "MongoDB", "JWT", "REST API"],
      image: "/Entertainhub.png",
      github: "https://github.com/Papan07/EntertainHub",
      live: "https://entertainhub-ashy.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 sm:mb-20 text-center">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="space-y-20 sm:space-y-24 md:space-y-32">

          {projects.map((project, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
  >

    {/* IMAGE */}
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group cursor-pointer ${
        i % 2 !== 0 ? "md:order-2" : "md:order-1"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl border border-white/10 shadow-lg group-hover:scale-105 transition duration-500"
      />
    </a>

    {/* CONTENT */}
    <div className={`${i % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
      <p className="text-sm text-cyan-400 mb-2 tracking-widest uppercase">
        {project.subtitle}
      </p>

      <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{project.title}</h3>

      <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
        {project.description}
      </p>

      {/* TECH TAGS */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
        {project.tech.map((t, idx) => (
          <span
            key={idx}
            className="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-white/20 rounded-md hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            {t}
          </span>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex gap-6 sm:gap-8">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition"
        >
          <Github size={16} className="sm:w-[18px] sm:h-[18px]" /> View Code
        </a>

        <a
          href={project.live}
          target="_blank"
          className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-cyan-400 transition"
        >
          <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
))}

        </div>
      </div>
    </section>
  );
}