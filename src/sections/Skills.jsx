import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import {
  SiReact, SiJavascript, SiTailwindcss, SiFramer, SiHtml5,
  SiNodedotjs, SiExpress, SiSpringboot, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiGithub, SiDocker, SiVite
} from 'react-icons/si';
import { FaJava, FaCss3Alt, FaAws } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscRocket } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Frontend",
    bgGlow: "rgba(97, 218, 251, 0.15)", // React Blue glow
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" }
    ]
  },
  {
    title: "Backend",
    bgGlow: "rgba(109, 179, 63, 0.15)", // Spring Green glow
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "REST APIs", icon: TbApi, color: "#007ACC" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" }
    ]
  },
  {
    title: "Database",
    bgGlow: "rgba(71, 162, 72, 0.15)", // MongoDB Green glow
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" }
    ]
  },
  {
    title: "DevOps & Tools",
    bgGlow: "rgba(255, 153, 0, 0.15)", // AWS Orange glow
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "CI/CD", icon: VscRocket, color: "#E34F26" },
      { name: "Vite", icon: SiVite, color: "#646CFF" }
    ]
  }
];

// Framer motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-6 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Technical Skills</h2>
            <div className="w-24 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <p className="text-accent mt-4 max-w-2xl text-lg md:text-xl font-bold tracking-widest uppercase">
              Code. Create. Deliver.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <GlassCard tilt={false} className="h-full flex flex-col relative overflow-hidden group p-6 border-white/5 hover:border-white/10 transition-colors duration-500">
                {/* Subtle Radial Glow specific to the category */}
                <div
                  className="absolute -top-32 -right-32 w-80 h-80 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: category.bgGlow }}
                ></div>

                <h3 className="text-xl font-bold text-white mb-4 pb-3 border-b border-white/10">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2.5 relative z-10 mt-1">
                  {category.skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={idx}
                        className="group/skill flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
                        style={{ '--hover-color': skill.color }}
                      >
                        <Icon className="text-lg transition-all duration-300 text-[var(--hover-color)] group-hover/skill:scale-110 drop-shadow-md" />
                        <span className="font-medium tracking-wide text-sm">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
