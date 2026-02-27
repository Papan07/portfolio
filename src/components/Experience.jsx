"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, FileText, X } from "lucide-react";
import { useState } from "react";

export default function Experience() {
  const [showOfferLetter, setShowOfferLetter] = useState(false);
  return (
    <section id="experience" className="bg-black text-white pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-28 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 sm:mb-20"
        >
          Experience & <span className="text-cyan-400">Growth</span>
        </motion.h2>

        {/* Work Experience Label */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10 text-cyan-400">
          <Briefcase size={20} className="sm:w-[22px] sm:h-[22px]" />
          <h3 className="text-xl sm:text-2xl font-semibold">Work Experience</h3>
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative border border-white/10 bg-white/5 rounded-xl p-6 sm:p-8 hover:shadow-cyan-500/20 hover:shadow-xl transition"
        >

          {/* Left Glow Line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-xl"></div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 sm:mb-6">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold">
                Web Development Intern
              </h4>
              <p className="text-cyan-400 font-medium text-sm sm:text-base">
                Syntecxhub
              </p>
            </div>

            <div className="flex items-center gap-2 text-gray-400 mt-3 md:mt-0 text-sm sm:text-base">
              <Calendar size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>Feb 2026 – Present</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
            Contributing to real-world web development projects by building
            responsive frontend interfaces and scalable backend APIs using
            the MERN stack. Collaborating with the team to design,
            implement, and optimize full-stack applications while following
            clean coding and professional development practices.
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Git"].map((tech, i) => (
              <span
                key={i}
                className="px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Offer Letter Button */}
          <button
            onClick={() => setShowOfferLetter(true)}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 text-sm sm:text-base rounded-md bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/30 transition"
          >
            <FileText size={16} className="sm:w-[18px] sm:h-[18px]" />
            View Offer Letter
          </button>

        </motion.div>

      </div>

      {/* Fullscreen Offer Letter Modal */}
      {showOfferLetter && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setShowOfferLetter(false)}
        >
          <button
            onClick={() => setShowOfferLetter(false)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X size={20} className="sm:w-[24px] sm:h-[24px]" />
          </button>
          <img 
            src="/Offer_letter_Papan_Namasudra.png" 
            alt="Offer Letter" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}