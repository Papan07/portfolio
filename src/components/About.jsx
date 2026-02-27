"use client";

import { motion } from "framer-motion";
import { Code, Brain, Target } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Hey there! I'm <span className="text-cyan-400">Papan Namasudra</span>, 
              a Second-year BTech student passionate about Full-stack development and artificial intelligence.
              I love transforming ideas into functional, beautiful applications that solve real-world problems.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Currently, I'm diving deep into the MERN stack and exploring the fascinating world of machine learning.
              My journey in tech is driven by curiosity and a desire to build impactful solutions.
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              I'm actively seeking internship opportunities where I can contribute my skills,
              collaborate with talented teams, and continue growing as a developer.
            </p>

            <p className="mt-4 sm:mt-6 text-cyan-400 font-semibold text-sm sm:text-base">
              Goal: Becoming a proficient Full-Stack & AI Engineer
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >

            {/* Card 1 */}
            <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-md hover:scale-105 transition">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-cyan-500/20 rounded-lg flex-shrink-0">
                  <Code className="text-cyan-400 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Full-Stack Development</h3>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    Building end-to-end web applications using MERN stack, Next.js,
                    creating seamless user experiences with modern technologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-md hover:scale-105 transition">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-pink-500/20 rounded-lg flex-shrink-0">
                  <Brain className="text-pink-400 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">AI & Machine Learning</h3>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    Exploring computer vision, emotion detection,
                    and integrating AI capabilities into real-world applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-xl backdrop-blur-md hover:scale-105 transition">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-green-500/20 rounded-lg flex-shrink-0">
                  <Target className="text-green-400 w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">Continuous Learning</h3>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    Currently mastering DSA, exploring Machine Learning,
                    and staying updated with the latest tech trends.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}