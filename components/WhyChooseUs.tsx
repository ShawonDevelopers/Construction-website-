import React from 'react';
import { FEATURES } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-800/30 skew-x-12 translate-x-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/2">
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-8">
              We Build to Last, <br/> We Build for You.
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Choosing Apex Construction means choosing excellence. We don't just build structures; we build relationships based on trust and performance.
            </p>
            <div className="p-8 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="italic text-slate-300 mb-6">
                "Apex transformed our vision into reality. Their attention to detail and commitment to the schedule was impressive. Highly recommended for any large-scale project."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-600 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                </div>
                <div>
                  <div className="font-bold">Michael Ross</div>
                  <div className="text-sm text-accent">CEO, Ross Industries</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="flex gap-6 p-6 rounded-lg hover:bg-slate-800/50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 bg-accent/20 text-accent rounded flex items-center justify-center">
                  <feature.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;