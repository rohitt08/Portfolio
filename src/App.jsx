import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

// Lazy loaded components (Below the fold)
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  return (
    <div className="bg-primary min-h-screen font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        {/* Instantly loaded sections */}
        <Hero />
        <About />
        
        {/* Lazy loaded sections */}
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-secondary">Loading...</div>}>
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
