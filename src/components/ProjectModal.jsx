import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Layers, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProjectModal = ({ project, onClose, onOpenTender }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-3xl border border-white/20 bg-[#101316] text-white shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Top Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#14181b]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#c5a059]/15 text-[#c5a059] font-mono text-xs font-semibold uppercase">
              {project.categoryName}
            </span>
            <span className="font-mono text-xs text-[#8c969b]">
              Godina: {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
            aria-label="Zatvori prozor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          {/* Main Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101316] via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059] mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-4xl text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase text-[#c5a059] tracking-wider mb-2">
                  OBIM PROJEKTA & INŽENJERING:
                </h4>
                <p className="text-sm sm:text-base text-[#cfd7da] leading-relaxed">
                  {project.scope}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#161a1d] border border-white/10">
                <h5 className="font-display font-semibold text-white text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Standardi i Izvođenje na Objektu
                </h5>
                <ul className="space-y-2 text-xs text-[#95a0a5]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Razrada 3D radioničkih crteža sa dilatacionim fugama prema građevinskim tolerancijama.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Integrisana kablovska infrastruktura, bežično punjenje i soft-close mehanizmi.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Predato investitoru sa kompletnim atestima za upotrebljene pločaste materijale.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6">
              <div className="p-6 rounded-2xl bg-[#161a1d] border border-white/10">
                <span className="font-mono text-[10px] uppercase text-[#c5a059] tracking-wider block mb-2">
                  MATERIJALNI SISTEM:
                </span>
                <p className="font-mono text-xs text-white leading-relaxed">
                  {project.materials}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="font-mono text-[10px] uppercase text-[#8c969b] block mb-1">
                    IZVOĐAČ:
                  </span>
                  <p className="font-display font-semibold text-xs text-white">
                    BOMEX-ENTERIJERI DOO NOVI SAD
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenTender();
                }}
                className="w-full py-3.5 rounded-full bg-[#c5a059] text-black font-semibold text-xs tracking-tight hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <span>Pošaljite Upit za Sličan Projekat</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

