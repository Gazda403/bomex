import React from 'react';
import { ArrowUpRight, Check, Compass, Box, Cpu, FileSpreadsheet } from 'lucide-react';
import { IsometricCube, ConeWireframe, TargetConcentric, TriangleRay } from './GeometricIcons';

export const ServicesGrid = ({ t, onOpenTender }) => {
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <IsometricCube className="w-12 h-12 text-[#8a703a]" />;
      case 1:
        return <ConeWireframe className="w-12 h-12 text-[#8a703a]" />;
      case 2:
        return <TargetConcentric className="w-12 h-12 text-[#8a703a]" />;
      case 3:
      default:
        return <TriangleRay className="w-12 h-12 text-[#8a703a]" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-28 bg-[#f7f7f5] text-[#111416] border-b border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white font-mono text-[11px] text-[#8a703a] font-semibold uppercase tracking-widest mb-3 shadow-sm">
              <span>{t.services.tag}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111416] tracking-tight">
              {t.services.title}
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-normal leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 4-Card Bento Grid with Hairline Dividers (Reference UNCOMMON & EVOLUT inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-black/10 divide-y md:divide-y-0 md:divide-x divide-black/10 rounded-2xl overflow-hidden bg-white shadow-xl">
          {t.services.list.map((service, idx) => (
            <div
              key={service.code}
              className="p-8 flex flex-col justify-between group hover:bg-black/[0.02] transition-all duration-300 relative"
            >
              <div>
                {/* Header with Code and Wireframe Icon */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-mono text-xs text-[#8a703a] font-bold tracking-wider uppercase">
                    {service.code}
                  </span>
                  <div className="opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300">
                    {getIcon(idx)}
                  </div>
                </div>

                {/* Title and Scope Summary */}
                <h3 className="font-display font-bold text-xl text-[#111416] mb-3 group-hover:text-[#8a703a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-black/60 leading-relaxed mb-6">
                  {service.short}
                </p>

                {/* Scope Bullets */}
                <ul className="space-y-2.5 mb-8">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs text-black/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a] mt-1.5 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Spec Footer */}
              <div className="pt-6 border-t border-black/10 mt-auto">
                <span className="font-mono text-[10px] text-black/40 block uppercase mb-1 font-semibold">
                  TEHNIČKI STANDARD:
                </span>
                <p className="font-mono text-[11px] text-black/80 font-medium">
                  {service.spec}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Trigger */}
        <div className="mt-12 p-8 rounded-2xl border border-black/10 bg-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8a703a]/10 border border-[#8a703a]/30 flex items-center justify-center text-[#8a703a] shrink-0">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-[#111416] text-base">
                Imate spreman arhitektonski projekat ili predmer radova?
              </h4>
              <p className="text-xs text-black/60">
                Naš inženjerski tim u Novom Sadu vrši analizu i izradu detaljne tenderske ponude u roku od 48 sati.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenTender}
            className="group px-6 py-3 rounded-full bg-[#111416] text-white font-semibold text-xs tracking-tight hover:bg-[#c5a059] hover:text-black transition-all flex items-center gap-2 shrink-0 shadow-md"
          >
            <span>Zatražite Ponudu za Vaš Projekat</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
