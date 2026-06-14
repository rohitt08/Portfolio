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
    <section id="contact" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's build something together.</h3>
            <p className="text-secondary mb-8 leading-relaxed">
              I'm currently looking for new opportunities as a Software Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-accent">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <a href="mailto:hello@example.com" className="hover:text-accent transition-colors">hello@example.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-secondary">
                <div className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-accent">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Location</p>
                  <p>Patna, Bihar, India</p>
                </div>
              </div>
            </div>
          </div>

          <GlassCard className="p-8">
            <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE" />
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                <FiSend /> Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
