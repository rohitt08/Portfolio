import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description: "Developed and maintained full-stack web applications using React and Node.js. Improved database query performance by 40% through index optimization.",
  },
  {
    role: "Frontend Developer (Freelance)",
    company: "Various Clients",
    period: "2023 - 2024",
    description: "Designed and built highly responsive, SEO-optimized landing pages for local businesses using React and Tailwind CSS.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="md:col-span-1 mb-2 md:mb-0 text-secondary text-sm font-medium pt-1 md:text-right">
                  {exp.period}
                </div>
                
                <div className="md:col-span-3 relative pb-8 md:pb-0 border-l border-[rgba(255,255,255,0.1)] md:border-none pl-8 md:pl-0 ml-4 md:ml-0">
                  {/* Timeline Dot (Mobile) */}
                  <span className="md:hidden absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-1.5 border-4 border-primary"></span>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-accent font-medium mb-4">{exp.company}</h4>
                  <p className="text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
