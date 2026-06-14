import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import GlassCard from '../components/GlassCard';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce application with user authentication, a shopping cart, and Stripe payment integration. Built with a modern microservices approach.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "YOUR_GITHUB_LINK_HERE",
    live: "YOUR_LIVE_LINK_HERE",
    category: "Full Stack"
  },
  {
    title: "Kanban Task Manager",
    description: "A drag-and-drop task management tool with dark mode, subtasks, and local storage persistence. Features a beautiful, minimalist UI inspired by Linear.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Zustand"],
    github: "YOUR_GITHUB_LINK_HERE",
    live: "YOUR_LIVE_LINK_HERE",
    category: "Frontend"
  },
  {
    title: "Real-time Chat API",
    description: "A robust microservice architecture for real-time messaging using WebSockets and Redis caching. Handles concurrent connections efficiently.",
    tech: ["Express", "Socket.io", "Redis", "Docker"],
    github: "YOUR_GITHUB_LINK_HERE",
    live: "YOUR_LIVE_LINK_HERE",
    category: "Backend"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[rgba(255,255,255,0.01)]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlassCard key={index} className="flex flex-col group hover:border-[rgba(255,255,255,0.2)] transition-colors duration-300">
              <div className="h-48 w-full bg-[rgba(255,255,255,0.02)] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-[rgba(255,255,255,0.05)]">
                {/* Placeholder for project image - user can replace with actual <img> */}
                <span className="text-secondary opacity-50 group-hover:scale-110 transition-transform duration-500">Image Placeholder</span>
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <div className="flex gap-3 text-secondary">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {t}
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

export default Projects;
