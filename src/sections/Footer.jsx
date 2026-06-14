import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-[rgba(255,255,255,0.05)] text-center text-secondary text-sm">
      <p>
        &copy; {new Date().getFullYear()} Rohit Kumar. Designed & Built with React and Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
