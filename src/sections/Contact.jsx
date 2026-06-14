import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    // Form submission logic is handled natively via Web3Forms by the form action
    // But we can add a simple loading state here if we want to hijack it.
    // For this example, we'll let the native form submit.
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's build something together.</h3>
            <p className="text-secondary mb-8 leading-relaxed">
              I am currently open to new opportunities and professional collaborations. Whether you have a specific project in mind, a question about my expertise, or simply wish to connect, my inbox is always open. I look forward to hearing from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-accent">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:bicky2005rohit@gmail.com" className="hover:text-accent transition-colors">bicky2005rohit@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-accent">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p>Arrah, Bihar, India</p>
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="p-8 md:p-10 border-white/10 shadow-[0_8px_32px_rgba(59,130,246,0.1)]">
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-8">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
              
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="text-xs font-bold text-secondary uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="text-xs font-bold text-secondary uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Your Email"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="text-xs font-bold text-secondary uppercase tracking-widest">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full mt-4 py-4 text-lg">
                <FiSend className="mr-2" /> Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
