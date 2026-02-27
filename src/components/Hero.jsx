"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center brightness-90 contrast-110"
        style={{ backgroundImage: "url('photo1.jpg')", backgroundPosition: 'center 30%' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Teal + Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-teal-900/80 to-teal-900/40" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
            <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-wide text-gray-100 leading-tight"
            >
            Papan Namasudra
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 sm:mt-6 text-base xs:text-lg sm:text-xl text-gray-200"
            >
            Full-Stack | MERN Stack | UI/UX Developer | AI Enthusiast
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 leading-relaxed"
            >
            Second-year BTech student passionate about MERN stack, AI projects,
            and building real-world applications. Exploring machine learning
            and actively seeking internship opportunities.
            </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            <a
              href="https://github.com/Papan07"
              target="_blank"
              className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-cyan-500/30 transition"
            >
              <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/papan-namasudra-b17b59312/"
              target="_blank"
              className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-cyan-500/30 transition"
            >
              <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>

            <a
              href="mailto:papanns19@gmail.com"
              className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-cyan-500/30 transition"
            >
              <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
            </a>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-8 sm:mt-10"
          >
            <motion.a
              href="#contact"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-lg"
              animate={{
                opacity: [1, 0.3, 1],
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                  "0 0 40px rgba(6, 182, 212, 0.8)",
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Let's Connect
            </motion.a>
          </motion.div>

          

        </div>
      </div>

      {/* bottom fade gradient */}
    <div 
      className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black">
    </div>
    </section>
  );
}