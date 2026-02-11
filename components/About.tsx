import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" 
                alt="Architects discussing plans" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-accent p-6 md:p-10 rounded-lg shadow-xl text-white hidden sm:block">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-1">28+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Years of<br/>Experience</div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">About Our Company</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
              We Construct Buildings with <span className="text-accent">Integrity</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Apex Construction has been a cornerstone in the industry for over two decades. We pride ourselves on transparent communication, superior craftsmanship, and an unyielding dedication to our client's vision.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {['Certified Engineers', 'Award Winning', 'Sustainable Building', 'Global Standards'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                  <span className="font-medium text-primary">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#about" 
              className="text-primary font-bold border-b-2 border-accent hover:text-accent pb-1 transition-colors inline-block"
            >
              Learn More About Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;