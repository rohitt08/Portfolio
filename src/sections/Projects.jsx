import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import GlassCard from '../components/GlassCard';

const techColors = {
  "React 19": "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20 shadow-[0_0_10px_rgba(97,218,251,0.1)]",
  "Tailwind CSS": "text-[#38B2AC] bg-[#38B2AC]/10 border-[#38B2AC]/20 shadow-[0_0_10px_rgba(56,178,172,0.1)]",
  "Node.js": "text-[#339933] bg-[#339933]/10 border-[#339933]/20 shadow-[0_0_10px_rgba(51,153,51,0.1)]",
  "MongoDB": "text-[#47A248] bg-[#47A248]/10 border-[#47A248]/20 shadow-[0_0_10px_rgba(71,162,72,0.1)]",
  "Google Gemini AI": "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/20 shadow-[0_0_10px_rgba(66,133,244,0.1)]",
  "Express.js": "text-gray-300 bg-gray-500/10 border-gray-500/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]",
  "Docker": "text-[#2496ED] bg-[#2496ED]/10 border-[#2496ED]/20 shadow-[0_0_10px_rgba(36,150,237,0.1)]"
};

const projects = [
  {
    title: "HabitIQ",
    description: "A smart habit-tracking platform designed to build sustainable positive routines. Powered by the MERN stack and Google Gemini AI, offering personalized, actionable insights based on user behavior and consistency.",
    tech: ["React 19", "Tailwind CSS", "Node.js", "MongoDB", "Google Gemini AI"],
    github: "https://github.com/rohitt08/HabitIQ",
    live: "#",
    category: "Full Stack AI",
    image: "/habitiq.png",
    featured: true // Determines if it gets the ultra-wide layout
  },
  {
    title: "CrewNex",
    description: "A next-generation collaboration workspace for project creators and skilled seekers. Creators can post projects, manage applications, and assemble their dream teams securely.",
    tech: ["React 19", "Express.js", "MongoDB", "Docker"],
    github: "https://github.com/rohitt08/CrewNex",
    live: "#",
    category: "Workspace Platform",
    image: "/crewnex.png",
    featured: true
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="h-full"
            >
              <GlassCard 
                tilt={false} 
                className="h-full flex flex-col p-5 border-white/10 overflow-hidden shadow-[0_8px_32px_rgba(139,92,246,0.04),0_16px_48px_rgba(56,189,248,0.04)]"
              >
                {/* Image Container */}
                <div className="w-full h-48 mb-5 relative rounded-xl overflow-hidden border border-white/10 shadow-lg shrink-0">
                  <div className="absolute inset-0 bg-accent/10 z-10 mix-blend-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Container */}
                <div className="flex flex-col justify-center w-full flex-grow">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">
                    {project.category}
                  </span>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-4 text-secondary">
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <FiGithub size={22} />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <FiExternalLink size={22} />
                      </a>
                    </div>
                  </div>

                  <p className="text-secondary text-sm leading-relaxed mb-5 flex-grow line-clamp-3 text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => {
                      const colorClasses = techColors[t] || "text-accent bg-accent/10 border-accent/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]";
                      return (
                        <span key={idx} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${colorClasses}`}>
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
