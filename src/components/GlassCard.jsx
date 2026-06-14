import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', animate = true }) => {
  const CardContent = (
    <div className={`glass-card p-6 ${className}`}>
      {children}
    </div>
  );

  if (!animate) return CardContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {CardContent}
    </motion.div>
  );
};

export default GlassCard;
