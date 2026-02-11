import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Contact Info & Form */}
          <div className="p-8 md:p-12 lg:p-16">
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-8">
              Start Your Project Today
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded text-accent">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1">Call Us</h5>
                  <p className="text-slate-600 text-sm">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 rounded text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1">Email Us</h5>
                  <p className="text-slate-600 text-sm">info@apexconst.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <div className="p-3 bg-slate-100 rounded text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-primary mb-1">Visit Us</h5>
                  <p className="text-slate-600 text-sm">123 Construction Ave, Industry City, ST 90210</p>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primary mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-primary mb-2">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                >
                  <option value="">Select a Service</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="residential">Residential Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded transition-colors uppercase tracking-widest shadow-lg shadow-accent/20"
              >
                Send Request
              </button>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="bg-slate-200 min-h-[400px] lg:min-h-full relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%)' }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;