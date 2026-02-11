import React from 'react';
import { Construction, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded text-white">
                <Construction size={24} />
              </div>
              <span className="text-2xl font-bold font-heading">
                APEX<span className="text-accent">CONST</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We are a leading construction company dedicated to transforming visions into reality. Quality, integrity, and safety are the pillars of our work.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-l-4 border-accent pl-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-l-4 border-accent pl-4">Our Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>General Contracting</li>
              <li>Construction Management</li>
              <li>Design-Build</li>
              <li>Pre-Construction</li>
              <li>Renovations</li>
            </ul>
          </div>

          {/* Newsletter (Visual only) */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 border-l-4 border-accent pl-4">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Subscribe for latest updates and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 text-white px-4 py-3 rounded-l w-full focus:outline-none border border-slate-700 focus:border-accent"
              />
              <button className="bg-accent px-4 rounded-r hover:bg-accent-hover transition-colors">
                <ArrowUp size={20} className="rotate-90" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Apex Construction Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center hover:bg-accent transition-colors md:ml-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;