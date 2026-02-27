"use client";

import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      const sections = ["#home", "#about", "#skills", "#projects", "#certifications", "#experience", "#contact"];
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsScrolling(true);
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          PN
        </motion.div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {["Home", "About", "Skills", "Projects", "Certifications", "Experience", "Contact"].map((label, index) => {
            const href = `#${label.toLowerCase()}`;
            const isActive = activeLink === href;
            return (
              <li key={index} className="relative">
                <motion.a 
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`transition relative py-2 ${
                    isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* Resume Button - Desktop */}
        <motion.a
          href="/Papan_Namasudra_resume.pdf"
          download
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm"
          whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={18} />
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <ul className="flex flex-col px-4 py-6 space-y-4">
              {["Home", "About", "Skills", "Projects", "Certifications", "Experience", "Contact"].map((label, index) => {
                const href = `#${label.toLowerCase()}`;
                const isActive = activeLink === href;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className={`block py-2 text-lg transition ${
                        isActive ? "text-cyan-400" : "text-gray-300"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-4">
                <a
                  href="/Papan_Namasudra_resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}