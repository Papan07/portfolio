"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub,
  FaPython, FaJava, FaDocker, FaDatabase, FaCode
} from "react-icons/fa";

import {
  SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiFigma,
  SiNpm, SiGit, SiNetlify, SiVercel, SiRender, SiGooglecloud
} from "react-icons/si";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  ];

  const learning = [
    "AI & Machine Learning",
    "ML Basics",
    "Face Emotion Detection",
    "Python AI Libraries",
    "Computer Vision"
  ];

  const tools = [
    { name: "NPM", icon: <SiNpm className="text-red-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
    { name: "Bruno", icon: <FaDatabase className="text-purple-400" /> },
    { name: "Netlify", icon: <SiNetlify className="text-cyan-400" /> },
    { name: "MongoDB Atlas", icon: <SiMongodb className="text-green-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Render", icon: <SiRender className="text-purple-500" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-blue-400" /> },
  ];

  return (
    <section id="skills" className="bg-black text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div 
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
          onViewportEnter={() => setIsVisible(true)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateY: 0
              }}
              transition={{ 
                delay: i * 0.12,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)"
              }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center backdrop-blur-sm hover:border-cyan-400/50 transition cursor-pointer group"
            >
              <motion.div 
                className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:text-cyan-400 transition"
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {skill.icon}
              </motion.div>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Tools Section */}
        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-cyan-400">
            Tech Tools
          </h3>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateY: 0
              }}
              transition={{ 
                delay: i * 0.12,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)"
              }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center backdrop-blur-sm hover:border-cyan-400/50 transition cursor-pointer group"
            >
              <motion.div 
                className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:text-cyan-400 transition"
                whileHover={{ rotate: 12, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {tool.icon}
              </motion.div>
              <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-cyan-400">
            Currently Learning 🚀
          </h3>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {learning.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: i * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(34, 211, 238, 0.25)"
                }}
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 hover:border-cyan-400/60 transition cursor-pointer"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}