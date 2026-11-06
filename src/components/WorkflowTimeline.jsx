import React from 'react';
import { CheckSquare, ArrowRight, ShieldCheck, Truck, Cog, FileText } from 'lucide-react';

export const WorkflowTimeline = ({ t }) => {
  const icons = [
    <FileText className="w-5 h-5 text-[#c5a059]" />,
    <Cog className="w-5 h-5 text-[#c5a059]" />,
    <ShieldCheck className="w-5 h-5 text-[#c5a059]" />,
    <Truck className="w-5 h-5 text-[#c5a059]" />
  ];

  return (
    <section id="process" className="py-16 sm:py-28 bg-[#0b0d0f] text-white border-b border-white/10 relative bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#c5a059] font-semibold block mb-2">
              / {t.process.tag}
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              {t.process.title}
            </h2>
          </div>
          <p className="text-sm text-[#8c969b] max-w-md font-normal leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-8 rounded-3xl border border-white/15 bg-[#121619] shadow-2xl flex flex-col justify-between group hover:border-[#c5a059] hover:-translate-y-1 transition-all duration-300 relative"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-2xl font-bold text-[#c5a059]">
                    /{step.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center">
                    {icons[idx]}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9da8ae] leading-relaxed mb-6 font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Deliverable Pill at bottom */}
              <div className="pt-6 border-t border-white/10 mt-auto">
                <span className="font-mono text-[10px] text-[#8c969b] block uppercase tracking-wider mb-1">
                  ISPORUČENI REZULTAT:
                </span>
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
