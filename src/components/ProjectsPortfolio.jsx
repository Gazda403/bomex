import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Layers, Eye } from 'lucide-react';

export const ProjectsPortfolio = ({ t, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? t.projects.items
    : t.projects.items.filter((p) => p.category === activeFilter);

  const filters = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'corporate', label: t.projects.filterCorporate },
    { id: 'hospitality', label: t.projects.filterHospitality },
    { id: 'residential', label: t.projects.filterResidential },
    { id: 'processing', label: t.projects.filterProcessing }
  ];

  return (
    <section id="projects" className="py-16 sm:py-28 bg-[#090b0d] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Giant Header inspired by Reference 3 (OCKHAM) */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 mb-12">
          <div className="flex items-baseline gap-4">
            <h2 className="font-display font-black text-5xl sm:text-8xl md:text-9xl tracking-tighter text-white uppercase leading-none">
              PROJECTS
            </h2>
            <span className="font-mono text-xl sm:text-2xl text-[#c5a059] font-bold">
              ²⁶
            </span>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-[#8c969b] max-w-xs">
            ARHITEKTONSKE REALIZACIJE • POSLOVNI, UGOSTITELJSKI I STAMBENI ENTERIJERI
          </p>
        </div>

        {/* Filter Navigation Tabs (OCKHAM style) */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/10 mb-12 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f.id
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-white/5 text-[#8c969b] hover:bg-white/10 hover:text-white'
              }`}
            >
              [ {f.label} ]
            </button>
          ))}
        </div>

        {/* Project Cards (Asymmetric OCKHAM layout) */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer rounded-3xl border border-white/10 bg-[#121619] shadow-2xl hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Image Column */}
                  <div className={`lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#c5a059] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-lg border border-white/10">
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                    <div>
                      {/* Category & Year */}
                      <div className="flex items-center justify-between font-mono text-xs text-[#8c969b] mb-6 pb-4 border-b border-white/10">
                        <span className="uppercase tracking-wider font-semibold text-[#c5a059]">
                          {project.categoryName}
                        </span>
                        <span>{project.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight group-hover:text-[#c5a059] transition-colors mb-4">
                        {project.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8c969b] mb-6">
                        <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{project.location}</span>
                      </div>

                      {/* Scope Summary */}
                      <p className="text-sm text-[#9da8ae] leading-relaxed mb-6 font-normal">
                        {project.scope}
                      </p>
                    </div>

                    {/* Materials Tagline */}
                    <div className="pt-6 border-t border-white/10">
                      <span className="font-mono text-[10px] uppercase text-[#8c969b] block mb-1">
                        SPECIFIKACIJA MATERIJALA:
                      </span>
                      <p className="font-mono text-xs text-white/90 font-medium">
                        {project.materials}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
