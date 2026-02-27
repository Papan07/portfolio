"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certs = [
    {
      title: "AI Hackathon Participation",
      issuer: "Kalvium × Promptrepo",
      year: "2025",
      description: "Participated in a competitive AI hackathon as part of Team TechTitans, competing with hundreds of participants across multiple teams. During the event, we designed and presented an AI-based prototype solution within limited time constraints.",
      fullDescription: "This experience strengthened my skills in teamwork, rapid problem solving, innovation, and real-world AI application development. It also enhanced my ability to work under pressure and transform ideas into functional prototypes.",
      skills: "Teamwork, Rapid Problem Solving, Innovation, AI Application Development",
      image: "/Hackaton.png",
      highlight: true,
    },
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM SkillsBuild",
      year: "2026",
      description: "This certification strengthened my understanding of user-centered design and innovation-driven problem solving. Through an intensive learning program and a one-week in-person industry-led session, I explored how real-world companies design products and solve user problems using structured design thinking frameworks.",
      fullDescription: "I developed skills in empathy-driven research, ideation, prototyping, and collaborative teamwork. This experience helped me realize that building technology is not just about coding but also about understanding user needs and creating meaningful solutions.",
      skills: "Design Thinking, User Experience (UX), Team Collaboration, Innovation Strategy",
      image: "/Design_thinking.png",
    },
    {
      title: "Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      year: "2025",
      description: "This comprehensive full-stack development program provided deep practical knowledge of both frontend and backend technologies. Through extensive hands-on projects, I built and deployed dynamic web applications using modern tools and frameworks.",
      fullDescription: "I gained strong experience in building responsive user interfaces, developing RESTful APIs, implementing authentication systems, and managing databases. This certification strengthened my ability to design and develop scalable full-stack applications from scratch.",
      skills: "MERN Stack Development, REST APIs, Authentication Systems, Deployment, Responsive UI Design",
      image: "/Web-development.png",
    },
    {
      title: "Complete Python Bootcamp",
      issuer: "Udemy",
      year: "2025",
      description: "This certification helped me build a strong foundation in Python programming and problem solving. I explored core programming concepts, object-oriented programming, data structures, file handling, and API integration.",
      fullDescription: "Through structured exercises and mini-projects, I improved my logical thinking and learned how to write efficient, modular, and scalable code. This knowledge now supports my work in automation, AI projects, and backend development.",
      skills: "Python Programming, Object-Oriented Programming, Data Handling, API Integration, Problem Solving",
      image: "/Python.png",
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Accenture Nordics (Forage)",
      year: "2025",
      description: "This virtual job simulation provided exposure to real-world software engineering practices followed in global companies. I worked on simulated tasks related to system architecture, security implementation, testing strategies, and agile workflows.",
      fullDescription: "The experience improved my understanding of how large-scale software systems are designed, tested, and maintained in professional environments.",
      skills: "Software Architecture, Security Fundamentals, Testing Practices, Agile Development",
      image: "/Forage.png",
    },
  ];

  return (
    <>
    <section id="certifications" className="bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8"
        >
          My <span className="text-cyan-400">Certifications</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 leading-relaxed text-sm sm:text-base"
        >
          I believe continuous learning and practical exposure are essential for becoming a strong software engineer. Through industry-recognized certifications, bootcamps, and hackathons, I have built a solid foundation in full-stack development, design thinking, and artificial intelligence.
          <br /><br />
          Each certification represents not only theoretical knowledge but also hands-on implementation, real-world problem solving, and collaboration with peers and industry professionals.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden border transition duration-300 group flex flex-col
              ${
                cert.highlight
                  ? "bg-gradient-to-br from-red-500/10 to-black border-red-400/30 hover:shadow-red-500/20"
                  : "bg-white/5 border-white/10 hover:shadow-cyan-500/20"
              }
              hover:scale-[1.03] hover:shadow-2xl`}
            >

              {/* Certificate Image */}
              <div className="overflow-hidden cursor-pointer" onClick={() => setSelectedImage(cert.image)}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">
                  {cert.title}
                </h3>

                {/* Hackathon badge */}
                {cert.highlight && (
                  <span className="inline-block mb-2 text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full">
                    Hackathon
                  </span>
                )}

                <p className="text-xs sm:text-sm text-cyan-400 mb-2 sm:mb-3">
                  {cert.issuer} • {cert.year}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  {cert.description}
                </p>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                  {cert.fullDescription}
                </p>

                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold mb-1 text-cyan-400">Key Skills Gained:</p>
                  <p className="text-gray-400 text-xs">{cert.skills}</p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>

    {/* Fullscreen Modal */}
    {selectedImage && (
      <div 
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <X size={20} className="sm:w-[24px] sm:h-[24px]" />
        </button>
        <img 
          src={selectedImage} 
          alt="Certificate" 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    )}
    </>
  );
}