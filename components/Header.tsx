import React, { useState, useEffect } from 'react';
import { Menu, X, Construction } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-accent p-2 rounded text-white group-hover:bg-accent-hover transition-colors">
              <Construction size={24} />
            </div>
            <span className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">
              APEX<span className="text-accent">CONST</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-white/90 hover:text-accent font-medium text-sm uppercase tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase tracking-wider rounded transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-primary border-t border-slate-800 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
        }`}
      >
        <div className="flex flex-col py-4 px-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-white/80 hover:text-accent font-medium py-2 border-b border-slate-800"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="text-center w-full py-3 bg-accent text-white font-bold rounded mt-2"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;