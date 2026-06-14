import React from 'react';

const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-secondary ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
