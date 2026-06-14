import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlassCard = ({ children, className = '', animate = true, tilt = true }) => {
  const ref = useRef(null);
  
  // Mouse position values from -0.5 to 0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform mouse values to degrees for 3D rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly when mouse leaves
    x.set(0);
    y.set(0);
  };

  const CardContent = tilt ? (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className={`glass-card p-6 w-full ${className}`}
    >
      {/* Content wrapper with translateZ for 3D parallax pop */}
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  ) : (
    <div className={`glass-card p-6 w-full ${className}`}>
      {children}
    </div>
  );

  if (!animate) {
    return (
      <div style={{ perspective: 1000, width: '100%', height: '100%' }}>
        {CardContent}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000, width: '100%', height: '100%' }}
    >
      {CardContent}
    </motion.div>
  );
};

export default GlassCard;
