import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';

export const StatementAccordion = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = t.statements.items[activeIndex] || t.statements.items[0];

  return (
    <section id="statements" className="py-16 sm:py-28 bg-[#0b0d0f] text-white transition-colors duration-500 relative overflow-hidden bg-grid-subtle border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tag & Big Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/10 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-2">
              / {t.statements.tag}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-2xl">              {t.statements.title}
            </h2>
          </div>
          <div className="font-mono text-xs text-[#8c969b] max-w-xs">
            BOMEX-ENTERIJERI DOO • Inženjerska disciplina i automatizovano upravljanje kvalitetom.
          </div>
        </div>

        {/* Dual Column: Image on Left + Stacked Statement Accordion on Right (UNCOMMON inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Responsive Image Preview */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/5 aspect-[4/3] sm:aspect-[4/5] border border-white/15 group">
              <img
                src={activeItem.image}
                alt={activeItem.heading}
                key={activeItem.id}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md font-mono text-[11px] uppercase tracking-wider mb-2 self-start">
                  {activeItem.tag}
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {activeItem.heading}
                </h4>
                <p className="text-xs text-white/80 mt-1 leading-relaxed max-w-sm">
                  {activeItem.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Giant Interactive Statement Typography Lines */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col divide-y divide-white/10">
            {t.statements.items.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-[#c5a059] font-bold">
                        /{item.id}
                      </span>
                      <h3
                        className={`font-display font-bold text-xl sm:text-3xl lg:text-5xl tracking-tight transition-transform duration-300 ${
                          isActive ? 'text-white translate-x-1' : 'text-white/60'
                        }`}
                      >
                        {item.heading}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-[#c5a059] text-black rotate-90 scale-110 shadow-lg'
                          : 'group-hover:border-white text-white'
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Expanded Description when active */}
                  {isActive && (
                    <div className="mt-4 pl-8 sm:pl-12 max-w-xl animate-fadeIn">
                      <p className="text-sm sm:text-base text-[#a2adb2] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
