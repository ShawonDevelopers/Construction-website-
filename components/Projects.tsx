import React from 'react';
import { PROJECTS } from '../constants';
import { Plus } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Portfolio</h4>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary">
              Featured Projects
            </h2>
          </div>
          <a href="#contact" className="px-6 py-3 border border-slate-200 text-primary font-bold hover:border-accent hover:text-accent transition-colors rounded">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-80 overflow-hidden rounded-lg cursor-pointer"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-sm font-bold uppercase tracking-wider block mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold font-heading">{project.title}</h3>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <Plus size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;