import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import Button from '../components/Button';
import Badge from '../components/Badge';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-6">
            <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse"></span>
            Available for new opportunities
          </Badge>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building scalable digital experiences with <span className="text-gradient">MERN Stack</span> and Java.
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm Rohit Kumar. A Software Engineer passionate about crafting premium, high-performance web applications that solve real-world problems.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button href="#projects">
            View Projects <FiArrowRight />
          </Button>
          <Button variant="secondary" href="YOUR_RESUME_LINK_HERE">
            Download Resume
          </Button>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center gap-6 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#" className="hover:text-white transition-colors p-2"><FiGithub size={24} /></a>
          <a href="#" className="hover:text-white transition-colors p-2"><FiLinkedin size={24} /></a>
          <a href="#" className="hover:text-white transition-colors p-2"><FiMail size={24} /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
