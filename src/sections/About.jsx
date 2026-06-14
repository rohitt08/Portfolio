import React from 'react';
import GlassCard from '../components/GlassCard';
import { FiCode, FiTarget, FiCoffee } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-white">Who I am</h3>
            <p className="text-secondary leading-relaxed mb-6">
              I am a driven Software Engineer specializing in full-stack development with a strong focus on the MERN stack and Java. Based in Patna, I have a passion for architecting scalable applications and designing intuitive user interfaces that deliver exceptional digital experiences.
            </p>
            <p className="text-secondary leading-relaxed">
              When I'm not writing code, I'm constantly learning about new system architectures, contributing to open-source, or exploring the latest frontend trends. My ultimate goal is to build software that makes a tangible impact.
            </p>
          </GlassCard>

          <div className="flex flex-col gap-6">
            <GlassCard className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <FiCode size={24} />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Clean Code</h4>
                <p className="text-sm text-secondary">Writing maintainable and scalable architectures.</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <FiTarget size={24} />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Goal Oriented</h4>
                <p className="text-sm text-secondary">Focused on delivering high-quality products on time.</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <FiCoffee size={24} />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Continuous Learner</h4>
                <p className="text-sm text-secondary">Always adapting to new technologies and paradigms.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
