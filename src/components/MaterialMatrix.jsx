import React, { useState } from 'react';
import { Layers, Shield, Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const MaterialMatrix = ({ t, onOpenTender }) => {
  const [activeCategory, setActiveCategory] = useState('boards');

  const categories = t.materials.categories;
  const currentCat = categories.find((c) => c.id === activeCategory) || categories[0];

  // Visual sample mockups for each material category
  const sampleVisuals = {
    boards: {
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Gustina ploče", val: "720 - 780 kg/m³" },
        { label: "Emisija formaldehida", val: "E1 / Carb 2 cert" },
        { label: "Vodootpornost", val: "P3 / P5 hidrofobni MDF" }
      ]
    },
    wood: {
      image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Vlažnost građe", val: "8% - 10% kontrolisano" },
        { label: "Završni lak", val: "PU mikron nanošenjem" },
        { label: "Selekcija goda", val: "Tangencijalni & Radijalni" }
      ]
    },
    hardware: {
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Test otvaranja", val: "> 200.000 ciklusa" },
        { label: "Nosivost vodica", val: "Do 70 kg po fioci" },
        { label: "Regulacija", val: "3D mikrometarska u frontu" }
      ]
    },
    surfaces: {
      image: "https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Apsorpcija vlage", val: "0.0% (monolit)" },
        { label: "Spojevi", val: "Hemijski bešavni var" },
        { label: "Antibakterijski sloj", val: "ISO 22196 standard" }
      ]
    }
  };

  const activeVisual = sampleVisuals[activeCategory] || sampleVisuals.boards;

  return (
    <section id="materials" className="py-16 sm:py-28 bg-[#f7f7f5] text-[#111416] border-b border-black/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white font-mono text-[11px] text-[#8a703a] font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Layers className="w-3 h-3" />
            <span>{t.materials.tag}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111416] tracking-tight">
            {t.materials.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-black/60 leading-relaxed">
            {t.materials.subtitle}
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-black/10 max-w-2xl mb-12 shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-1 min-w-[130px] py-3 px-4 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all duration-300 text-center ${
                activeCategory === cat.id
                  ? 'bg-[#111416] text-white shadow-md'
                  : 'text-black/60 hover:text-black hover:bg-black/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Material Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl border border-black/10 bg-white p-6 sm:p-10 shadow-xl">
          {/* Left Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase text-[#8a703a] font-bold tracking-wider">
                  SPECIFIKACIJA KLASE
                </span>
                <span className="w-1 h-1 rounded-full bg-black/30"></span>
                <span className="text-xs text-black/60">Evropski standard EN 14322</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111416] mb-3">
                {currentCat.name}
              </h3>
              <p className="text-sm text-black/70 leading-relaxed mb-8">
                {currentCat.desc}
              </p>

              {/* Brands & Partners */}
              <div className="mb-8">
                <span className="font-mono text-[11px] uppercase tracking-wider text-black/50 font-semibold block mb-3">
                  SERTIFIKOVANI PARTNERI I PROIZVOĐAČI:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {currentCat.brands.map((brand, bIdx) => (
                    <div
                      key={bIdx}
                      className="px-3.5 py-1.5 rounded-lg border border-black/10 bg-[#f7f7f5] font-display font-semibold text-xs text-[#111416] flex items-center gap-2"
                    >
                      <Award className="w-3.5 h-3.5 text-[#8a703a]" />
                      <span>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Finishes and Textures */}
              <div className="mb-8">
                <span className="font-mono text-[11px] uppercase tracking-wider text-black/50 font-semibold block mb-3">
                  DOSTUPNE ZAVRŠNE OBRADE I TEKSTURE:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {currentCat.finishes.map((finish, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-3 rounded-xl border border-black/10 bg-[#f7f7f5] flex items-center gap-2.5 text-xs text-black/80 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{finish}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quality Lead Info */}
            <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-black/60">
                <strong className="text-black">Prednost: </strong>
                {currentCat.lead}
              </div>
              <button
                onClick={onOpenTender}
                className="px-4 py-2 rounded-full border border-black/20 bg-black/5 hover:border-[#8a703a] hover:bg-black/10 text-xs font-mono text-black transition-colors shrink-0"
              >
                Zatražite uzorke materijala →
              </button>
            </div>
          </div>

          {/* Right Visual & Technical Data Box */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden border border-black/10 bg-[#f7f7f5] relative">
            <div className="h-56 sm:h-64 relative overflow-hidden">
              <img
                src={activeVisual.image}
                alt={currentCat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f7f7f5] via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <span className="font-mono text-[10px] uppercase text-[#8a703a] font-bold tracking-widest block mb-3">
                LABORATORIJSKA ISPITIVANJA & NORME
              </span>
              <div className="divide-y divide-black/10 font-mono text-xs">
                {activeVisual.stats.map((st, sIdx) => (
                  <div key={sIdx} className="py-2.5 flex items-center justify-between">
                    <span className="text-black/60">{st.label}</span>
                    <span className="text-black font-semibold">{st.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
