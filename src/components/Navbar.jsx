import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Fallback: Clear active section when scrolled to the very top (Hero section)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Let IntersectionObserver handle the active tab naturally as the page scrolls
  };

  return (
    <>
      {/* Desktop & Tablet Floating Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 pt-6 pb-4 sm:px-6 lg:px-8 flex justify-center pointer-events-none">
        <div className="w-full max-w-7xl flex items-center justify-between transition-all duration-500 px-6 py-3 pointer-events-auto">
          
          {/* Logo */}
          <a href="#" aria-label="Home" className="flex items-center outline-none group">
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-xl font-black tracking-tighter flex items-center"
            >
              <span className="text-white">Rohit</span>
              <span className="text-secondary group-hover:text-white transition-colors duration-300 ml-1">Kumar</span>
            </motion.h1>
          </a>

          {/* Desktop Nav Links (Floating Pill) */}
          <div className="hidden lg:flex items-center gap-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-md rounded-full px-2 py-1.5 absolute left-1/2 -translate-x-1/2 border border-[rgba(255,255,255,0.08)] shadow-lg">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-2 rounded-full text-sm font-semibold transition-colors outline-none"
                >
                  <span className={`relative z-10 ${isActive ? "text-white" : "text-secondary hover:text-white"}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent px-6 py-2 rounded-xl text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:bg-accent-hover transition-colors"
              >
                Hire Me
              </motion.button>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 text-secondary hover:text-white hover:bg-white/10 rounded-xl transition-colors focus:outline-none"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0A0A0A] border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)] z-50 lg:hidden flex flex-col overflow-hidden"
          >
            <div className="relative flex items-center justify-between p-6 border-b border-white/5">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Navigation
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-secondary hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all border border-white/5"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="relative p-6 overflow-y-auto flex-1 flex flex-col">
              <motion.div 
                className="space-y-3 mb-8"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
              >
                {navLinks.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0 }
                      }}
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl transition-all border ${
                        isActive
                          ? "bg-accent/10 text-white font-bold border-accent/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                          : "bg-white/5 text-secondary font-semibold border-white/5 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.name}
                      <FiArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? "text-accent translate-x-0 opacity-100" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`} />
                    </motion.a>
                  );
                })}
              </motion.div>

              <div className="mt-auto pt-6 pb-8 px-2 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-4 text-sm font-bold text-white bg-accent rounded-2xl transition-all hover:bg-accent-hover shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-accent"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
