import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const techColors = {
  "React 19": "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20 shadow-[0_0_10px_rgba(97,218,251,0.1)]",
  "Node.js": "text-[#339933] bg-[#339933]/10 border-[#339933]/20 shadow-[0_0_10px_rgba(51,153,51,0.1)]",
  "Tailwind CSS": "text-[#38B2AC] bg-[#38B2AC]/10 border-[#38B2AC]/20 shadow-[0_0_10px_rgba(56,178,172,0.1)]",
  "PostgreSQL": "text-[#336791] bg-[#336791]/10 border-[#336791]/20 shadow-[0_0_10px_rgba(51,103,145,0.1)]",
  "Figma": "text-[#F24E1E] bg-[#F24E1E]/10 border-[#F24E1E]/20 shadow-[0_0_10px_rgba(242,78,30,0.1)]",
  "Adobe Photoshop": "text-[#31A8FF] bg-[#31A8FF]/10 border-[#31A8FF]/20 shadow-[0_0_10px_rgba(49,168,255,0.1)]",
  "Adobe Illustrator": "text-[#FF9A00] bg-[#FF9A00]/10 border-[#FF9A00]/20 shadow-[0_0_10px_rgba(255,154,0,0.1)]",
  "Adobe After Effects": "text-[#9999FF] bg-[#9999FF]/10 border-[#9999FF]/20 shadow-[0_0_10px_rgba(153,153,255,0.1)]",
  "Canva": "text-[#00C4CC] bg-[#00C4CC]/10 border-[#00C4CC]/20 shadow-[0_0_10px_rgba(0,196,204,0.1)]",
  "React": "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20 shadow-[0_0_10px_rgba(97,218,251,0.1)]",
  "JavaScript": "text-[#F7DF1E] bg-[#F7DF1E]/10 border-[#F7DF1E]/20 shadow-[0_0_10px_rgba(247,223,30,0.1)]",
  "HTML": "text-[#E34F26] bg-[#E34F26]/10 border-[#E34F26]/20 shadow-[0_0_10px_rgba(227,79,38,0.1)]",
  "CSS": "text-[#1572B6] bg-[#1572B6]/10 border-[#1572B6]/20 shadow-[0_0_10px_rgba(21,114,182,0.1)]"
};

const experiences = [
  {
    role: "Graphic Designer",
    company: "HelpStartup - College Club",
    period: "July 2024 - May 2025",
    description: "Created visually compelling brand assets, marketing creatives, and high-converting landing page designs. Collaborated with teams to transform ideas into modern, user-centric digital experiences while maintaining brand consistency.",
    tech: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects", "Canva"]
  },
  {
    role: "Frontend Developer",
    company: "Outlier",
    period: "Apr 2024 - Jun 2024",
    description: "Worked on AI-powered web projects, contributing to frontend quality evaluation, user experience improvements, and product optimization across modern web applications.",
    tech: ["React", "JavaScript", "HTML", "CSS"]
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
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Experience</h2>
            <div className="w-24 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Glowing Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent/10 to-transparent"></div>

          <motion.div 
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => {
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative w-full"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-8 w-4 h-4 rounded-full bg-primary border-2 border-accent shadow-[0_0_15px_rgba(59,130,246,1)] -translate-x-[7px] z-10 mt-6 md:mt-8"></div>

                  {/* Content Card */}
                  <div className="w-full pl-14 md:pl-20">
                    <GlassCard 
                      tilt={false}
                      className="p-6 border-white/10 shadow-[0_8px_32px_rgba(139,92,246,0.04),0_16px_48px_rgba(56,189,248,0.04)]"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-block text-accent text-sm font-bold tracking-widest uppercase mt-1 md:mt-0 md:ml-4 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h4 className="text-base text-secondary font-medium mb-4">
                        {exp.company}
                      </h4>
                      
                      <p className="text-secondary text-sm leading-relaxed text-justify mb-5">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.tech.map((t, idx) => {
                          const colorClasses = techColors[t] || "text-accent bg-accent/10 border-accent/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]";
                          return (
                            <span key={idx} className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${colorClasses}`}>
                              {t}
                            </span>
                          );
                        })}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
