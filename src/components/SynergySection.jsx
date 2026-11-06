import React from 'react';
import { TargetConcentric, IsometricCube } from './GeometricIcons';
import { CheckCircle2, Cog, Layers, Sparkles } from 'lucide-react';

export const SynergySection = ({ t }) => {
  return (
    <section id="synergy" className="py-16 sm:py-24 bg-[#efefed] text-[#111416] border-b border-black/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c5a059]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white font-mono text-[11px] text-[#8a703a] font-semibold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>OPERATIVNA SINERGIJA</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#111416] tracking-tight">
            {t.synergy.title}
          </h2>
          <p className="mt-4 text-base text-black/60 leading-relaxed">
            {t.synergy.subtitle}
          </p>
        </div>

        {/* Venn Diagram Visual Architecture (EVOLUT inspired) */}
        <div className="relative max-w-4xl mx-auto my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Left Sphere: Architectural Engineering */}
            <div className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-xl relative group hover:border-[#8a703a] transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#8a703a] font-bold uppercase tracking-wider">
                  KOMPONENTA A
                </span>
                <TargetConcentric className="w-10 h-10 text-[#8a703a]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#111416] mb-3">
                {t.synergy.leftTitle}
              </h3>
              <p className="text-sm text-black/70 leading-relaxed mb-6">
                {t.synergy.leftDesc}
              </p>
              <ul className="space-y-2 text-xs font-mono text-black/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a]"></span>
                  AutoCAD & SolidWorks modelovanje
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a]"></span>
                  Radionički nacrti (Shop Drawings)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a]"></span>
                  Optimizacija krojnih lista i predmera
                </li>
              </ul>
            </div>

            {/* Right Sphere: Automated CNC Production */}
            <div className="p-8 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-xl relative group hover:border-[#8a703a] transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#8a703a] font-bold uppercase tracking-wider">
                  KOMPONENTA B
                </span>
                <IsometricCube className="w-10 h-10 text-[#8a703a]" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#111416] mb-3">
                {t.synergy.rightTitle}
              </h3>
              <p className="text-sm text-black/70 leading-relaxed mb-6">
                {t.synergy.rightDesc}
              </p>
              <ul className="space-y-2 text-xs font-mono text-black/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a]"></span>
                  CNC Nesting velikog formata (2.8m x 2.07m)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a]"></span>
                  Kantovanje PUR vodootpornim lepkom
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a]"></span>
                  Klimatizovana komora za lakiranje MDF-a
                </li>
              </ul>
            </div>
          </div>

          {/* Intersecting Badge in the Center */}
          <div className="mt-6 md:-mt-6 relative z-20 flex justify-center">
            <div className="p-6 sm:px-10 py-5 rounded-2xl bg-[#111416] text-white shadow-2xl border-4 border-[#efefed] text-center max-w-xl">
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#c5a059] text-black font-mono text-[10px] font-bold tracking-widest uppercase mb-1">
                {t.synergy.centerResult}
              </div>
              <p className="font-display font-bold text-base sm:text-lg text-white">
                {t.synergy.centerTagline}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
