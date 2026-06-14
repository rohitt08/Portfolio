import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { SiLeetcode, SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiDocker, SiGithub as SiGithubLogo, SiCss, SiSpringboot } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Button from '../components/Button';
import Badge from '../components/Badge';

const floatingIcons = [
  { Icon: SiReact, color: "text-[#61DAFB]", top: "15%", left: "10%", size: 40, duration: 12, delay: 0 },
  { Icon: SiJavascript, color: "text-[#F7DF1E]", top: "60%", left: "5%", size: 35, duration: 15, delay: 2 },
  { Icon: SiMongodb, color: "text-[#47A248]", top: "25%", right: "15%", size: 45, duration: 14, delay: 1 },
  { Icon: SiNodedotjs, color: "text-[#339933]", bottom: "20%", right: "20%", size: 35, duration: 10, delay: 3 },
  { Icon: FaJava, color: "text-[#007396]", top: "40%", right: "5%", size: 50, duration: 18, delay: 0.5 },
  { Icon: SiSpringboot, color: "text-[#6DB33F]", bottom: "25%", left: "15%", size: 35, duration: 16, delay: 2.5 },
  { Icon: SiDocker, color: "text-[#2496ED]", top: "10%", right: "35%", size: 30, duration: 11, delay: 1.5 },
  { Icon: SiGithubLogo, color: "text-white", bottom: "35%", right: "8%", size: 40, duration: 13, delay: 4 },
  { Icon: SiCss, color: "text-[#1572B6]", top: "70%", left: "20%", size: 30, duration: 14, delay: 3.5 },
];

const floatingDots = [
  { color: "bg-blue-500", top: "20%", left: "30%", duration: 6, delay: 0 },
  { color: "bg-red-500", top: "50%", right: "25%", duration: 8, delay: 1 },
  { color: "bg-green-500", bottom: "30%", left: "40%", duration: 7, delay: 2 },
  { color: "bg-white", top: "15%", right: "45%", duration: 9, delay: 0.5 },
  { color: "bg-blue-400", bottom: "10%", right: "35%", duration: 6, delay: 3 },
  { color: "bg-red-400", top: "75%", left: "10%", duration: 8, delay: 1.5 },
  { color: "bg-green-400", top: "45%", left: "25%", duration: 5, delay: 0.8 },
  { color: "bg-white", bottom: "40%", left: "5%", duration: 7, delay: 2.2 },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        {/* Colorful Glows for ambient lighting (Static to save mobile GPU) */}
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-accent/10 rounded-full blur-[80px] md:blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-purple-500/10 rounded-full blur-[80px] md:blur-[100px]" />

        {/* Floating Tech Logos */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            animate={{ 
              y: [0, -30, 0], 
              rotate: [0, 15, -15, 0],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            className={`absolute ${item.color} hidden md:block`}
            style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}

        {/* Floating Colored Dots */}
        {floatingDots.map((dot, index) => (
          <motion.div
            key={`dot-${index}`}
            animate={{ 
              y: [0, 30, 0], 
              x: [0, 15, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: dot.duration, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
            className={`absolute hidden md:block w-2 h-2 rounded-full ${dot.color} blur-[1px]`}
            style={{ top: dot.top, left: dot.left, right: dot.right, bottom: dot.bottom }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
          Code that scales. <br className="hidden md:block" />
          <span className="text-gradient">Design that speaks.</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-secondary mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A Frontend Developer and Graphic Designer bridging the gap between pixel-perfect aesthetics and robust web performance.
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
          <a href="https://github.com/rohitt08" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-white hover:scale-110 transition-all p-2"><FiGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/rohit-kumar-46222038a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-white hover:scale-110 transition-all p-2"><FiLinkedin size={24} /></a>
          <a href="#" aria-label="LeetCode Profile" className="hover:text-white hover:scale-110 transition-all p-2"><SiLeetcode size={24} /></a>
          <a href="mailto:bicky2005rohit@gmail.com" aria-label="Send Email" className="hover:text-white hover:scale-110 transition-all p-2"><FiMail size={24} /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
