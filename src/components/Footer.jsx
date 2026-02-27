"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-3 sm:mb-4">
            Papan Namasudra
          </h2>

          <p className="text-gray-400 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
            Full-stack / MERN-Stack Developer | UI/UX desiner
          </p>

          {/* Social icons */}
          <div className="flex gap-3 sm:gap-4">

            <a
              href="https://github.com/Papan07"
              target="_blank"
              className="p-2 sm:p-3 border border-white/20 rounded hover:bg-cyan-500/20 transition"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/papan-namasudra-b17b59312/"
              target="_blank"
              className="p-2 sm:p-3 border border-white/20 rounded hover:bg-cyan-500/20 transition"
            >
              <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>

            <a
              href="mailto:papanns19@gmail.com"
              className="p-2 sm:p-3 border border-white/20 rounded hover:bg-cyan-500/20 transition"
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-cyan-400">
            Quick Links
          </h3>

          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">

            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>

          </ul>
        </div>

        {/* CURRENT */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-cyan-400">
            Currently
          </h3>

          <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
            <p>
              <span className="text-white">Exploring Machine Learning</span><br/>
              Implementing Automation in webpage
            </p>

            <p>
              <span className="text-white">Learning</span><br/>
              DevOps, AI/ML, DSA
            </p>

            <p>
              <span className="text-white">Location</span><br/>
              India
            </p>
          </div>
        </div>

      </div>

      {/* bottom line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm gap-3">

        <p>© 2026 Papan Namasudra. All rights reserved.</p>

        <button
          onClick={scrollTop}
          className="flex items-center gap-2 hover:text-cyan-400 mt-4 md:mt-0 transition text-xs sm:text-sm"
        >
          Back to top <ArrowUp size={14} className="sm:w-[16px] sm:h-[16px]" />
        </button>

      </div>
    </footer>
  );
}
