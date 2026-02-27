"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="bg-black text-white py-16 sm:py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm tracking-widest text-cyan-400 mb-4 sm:mb-6">
            05 — GET IN TOUCH
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            Let's Create <br />
            <span className="text-cyan-400">Something Great</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-md">
            I'm currently seeking internship opportunities and open to
            collaborating on web development and AI-driven projects.
            Feel free to reach out and let's build something impactful.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">

            <a href="tel:+917628820646" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition flex-shrink-0">
                <Phone size={18} className="sm:w-[20px] sm:h-[20px]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                <p className="text-sm sm:text-base text-white group-hover:text-cyan-400 transition">+91 7628820646</p>
              </div>
            </a>

            <a href="mailto:papanns19@gmail.com" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition flex-shrink-0">
                <Mail size={18} className="sm:w-[20px] sm:h-[20px]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">Email</p>
                <p className="text-sm sm:text-base text-white group-hover:text-cyan-400 transition break-all">papanns19@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/papan-namasudra-b17b59312/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition flex-shrink-0">
                <Linkedin size={18} className="sm:w-[20px] sm:h-[20px]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">LinkedIn</p>
                <p className="text-sm sm:text-base text-white group-hover:text-cyan-400 transition">/papan-namasudra</p>
              </div>
            </a>

            <a href="https://github.com/Papan07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition flex-shrink-0">
                <Github size={18} className="sm:w-[20px] sm:h-[20px]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400">GitHub</p>
                <p className="text-sm sm:text-base text-white group-hover:text-cyan-400 transition">/Papan07</p>
              </div>
            </a>

          </div>

          {/* Availability */}
          <div className="mt-10 sm:mt-14">
            <p className="text-xs sm:text-sm tracking-widest text-gray-500 mb-2">
              AVAILABILITY
            </p>
            <p className="text-base sm:text-lg">
              Open for internships & freelance projects
            </p>
            <p className="text-green-400 text-xs sm:text-sm mt-1">
              ● Available for new opportunities
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

            <div>
              <label className="text-xs sm:text-sm text-gray-400">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-gray-400">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-gray-400">
                Your Message
              </label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-transparent border-b border-white/20 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-xs sm:text-sm">✓ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-xs sm:text-sm">✗ Failed to send. Please try again.</p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}
