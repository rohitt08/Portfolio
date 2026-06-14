import React from 'react';
import GlassCard from '../components/GlassCard';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "GraphQL"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "AWS", "CI/CD", "Vite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-6 pb-4 border-b border-[rgba(255,255,255,0.05)]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 text-sm rounded-lg bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] text-secondary hover:text-white hover:border-[rgba(255,255,255,0.2)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
