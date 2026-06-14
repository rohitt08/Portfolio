import React, { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import { FiCode, FiMapPin, FiCoffee, FiTerminal, FiDatabase, FiLayout, FiServer, FiLayers } from 'react-icons/fi';
import { FaJava } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 relative overflow-hidden">
      {/* Header (Centered) */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Behind the Code</h2>
            <div className="w-24 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Bio Card (Matches Website Container) */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <GlassCard tilt={false} className="flex flex-col justify-center relative overflow-hidden group py-8 px-6 md:px-10 w-full">
          
          {/* Content restricted to max-width */}
          <div className="w-full relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-4 text-white flex items-center gap-3">
                <FiCoffee className="text-accent" /> About Me
              </h3>
              <p className="text-secondary leading-relaxed mb-3 text-base text-justify">
                I am a driven Software Engineer specializing in full-stack development with a strong focus on the <span className="text-white font-semibold">MERN stack</span> and <span className="text-white font-semibold">Java</span>. 
              </p>
              <p className="text-secondary leading-relaxed text-base mb-3 text-justify">
                I don't just write code; I architect scalable solutions and design intuitive user interfaces. My ultimate goal is to build premium digital products that bridge the gap between complex backend logic and seamless frontend aesthetics.
              </p>
              <p className="text-secondary leading-relaxed text-base mb-4 text-justify">
                Whether it's optimizing database queries for high-performance applications or crafting pixel-perfect, responsive web experiences, I thrive on solving complex technical challenges. I am constantly exploring new technologies, refining my system design skills, and striving to write code that is as clean as it is efficient.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white mt-5">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/10">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span> Full-Stack
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/10">
                  <FaJava className="text-[#007396]"/> Java
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/10">
                  <FiLayers className="text-purple-500"/> DSA
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 shadow-lg backdrop-blur-sm transition-colors hover:bg-white/10">
                  <FiLayout className="text-accent"/> UI/UX
                </div>
              </div>
            </div>
            
            {/* 3D Portrait Avatar */}
            <div className="hidden md:flex flex-shrink-0 relative items-center">
              {/* Glass Frame */}
              <div className="w-56 h-56 rounded-full glass-card flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-10 transition-all duration-500 p-2">
                <img src="/avatar.png" alt="Rohit 3D Portrait" className="w-full h-full rounded-full object-cover shadow-inner" />
              </div>
            </div>

          </div>
        </GlassCard>
      </div>

      {/* Grid for bottom 3 cards */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Location */}
          <GlassCard className="h-full md:col-span-1 relative overflow-hidden group flex flex-col justify-center items-center text-center min-h-[250px]">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "15px 15px" }}></div>
            
            <div className="relative z-10 flex flex-col items-center w-full">
              {/* Map Pin Icon */}
              <div className="relative mb-6 flex items-center justify-center">
                <div className="bg-accent/20 p-4 rounded-full border border-accent/30 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <FiMapPin size={28} className="text-accent" />
                </div>
              </div>
              
              <div className="text-xl font-bold text-white mb-1">
                Arrah, Bihar (India)
              </div>
              <div className="text-sm text-secondary font-medium mb-6 tracking-widest uppercase">
                Hometown
              </div>
              
              {/* Remote Work Badge */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full shadow-lg">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                </div>
                <span className="text-sm text-white font-medium">Remote Ready</span>
              </div>
            </div>
          </GlassCard>

          {/* Card 2: Data Flow Stack */}
          <GlassCard className="h-full md:col-span-1 relative overflow-hidden group flex flex-col justify-center items-center p-6 min-h-[250px]">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Core Stack</h4>
            
            <div className="flex flex-col w-full max-w-[200px] gap-4 relative">
              {/* Animated Data Line Behind */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 z-0 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ y: ['-100%', '300%'] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} 
                  className="w-full h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent"
                />
              </div>

              {/* Stack Layers */}
              <div className="relative z-10 w-full bg-[#0A0A0A] backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center gap-3 transform transition-all duration-300 group-hover:-translate-y-1 hover:!border-[#61DAFB] shadow-lg">
                <div className="bg-[#61DAFB]/10 p-2 rounded-lg"><FiLayout className="text-[#61DAFB]" size={18} /></div>
                <span className="text-white text-sm font-semibold">Frontend</span>
              </div>
              
              <div className="relative z-10 w-full bg-[#0A0A0A] backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center gap-3 transform transition-all duration-300 group-hover:-translate-y-1 hover:!border-purple-500 shadow-lg" style={{ transitionDelay: '50ms' }}>
                <div className="bg-purple-500/10 p-2 rounded-lg"><FiServer className="text-purple-500" size={18} /></div>
                <span className="text-white text-sm font-semibold">Backend</span>
              </div>

              <div className="relative z-10 w-full bg-[#0A0A0A] backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center gap-3 transform transition-all duration-300 group-hover:-translate-y-1 hover:!border-success shadow-lg" style={{ transitionDelay: '100ms' }}>
                <div className="bg-success/10 p-2 rounded-lg"><FiDatabase className="text-success" size={18} /></div>
                <span className="text-white text-sm font-semibold">Database</span>
              </div>
            </div>
          </GlassCard>

          {/* Card 3: Terminal Matrix */}
          <GlassCard className="h-full md:col-span-1 relative overflow-hidden group flex flex-col min-h-[250px] !p-0">
            {/* Mac Terminal Header */}
            <div className="bg-white/5 border-b border-white/10 w-full px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 text-xs text-secondary/70 font-mono tracking-wider">architecture.js</span>
            </div>
            
            {/* Terminal Body */}
            <div className="p-5 font-mono text-xs md:text-[13px] flex flex-col gap-1.5 relative flex-1 overflow-hidden bg-[#0A0A0A]/50">
               <div><span className="text-secondary/50 w-4 inline-block">1</span><span className="text-purple-400">import</span> {`{ CleanCode }`} <span className="text-purple-400">from</span> <span className="text-accent">'@rohit/core'</span>;</div>
               <div><span className="text-secondary/50 w-4 inline-block">2</span></div>
               <div><span className="text-secondary/50 w-4 inline-block">3</span><span className="text-blue-400">function</span> <span className="text-[#E5C07B]">buildSystem</span>() {`{`}</div>
               <div className="pl-4"><span className="text-secondary/50 w-4 inline-block -ml-4">4</span><span className="text-purple-400">return</span> <span className="text-[#E5C07B]">CleanCode</span>.optimize({`{`}</div>
               <div className="pl-8"><span className="text-secondary/50 w-4 inline-block -ml-8">5</span>scalable: <span className="text-[#D19A66]">true</span>,</div>
               <div className="pl-8"><span className="text-secondary/50 w-4 inline-block -ml-8">6</span>maintainable: <span className="text-[#D19A66]">true</span>,</div>
               <div className="pl-4"><span className="text-secondary/50 w-4 inline-block -ml-4">7</span>{`}`});</div>
               <div><span className="text-secondary/50 w-4 inline-block">8</span>{`}`}</div>
               <div className="mt-2"><span className="text-accent font-bold">~</span> <span className="text-white animate-pulse">_</span></div>
               
               {/* O(1) Badge */}
               <div className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white font-bold text-[10px] md:text-xs shadow-lg flex items-center gap-2 transform transition-transform group-hover:scale-110 whitespace-nowrap z-20">
                 <FiCode className="text-accent" /> O(1) Optimized
               </div>
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default About;
