import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2800&auto=format&fit=crop" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-3 rounded bg-accent/20 text-accent font-bold text-sm uppercase tracking-widest mb-6 animate-[fadeInUp_0.8s_ease-out_forwards]">
            Established 1995
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            Building the <span className="text-accent">Foundation</span> <br/>
            of the Future.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            We deliver premium construction solutions with precision, safety, and unwavering commitment to quality. From concept to concrete, we are your trusted partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded transition-colors"
            >
              View Our Projects
              <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold rounded transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;