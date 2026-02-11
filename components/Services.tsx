import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-6">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-slate-600">
            We provide a wide range of services tailored to meet the specific needs of residential, commercial, and industrial clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group bg-white p-8 md:p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-accent hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-8">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-heading text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-primary uppercase tracking-wider group-hover:text-accent transition-colors">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;