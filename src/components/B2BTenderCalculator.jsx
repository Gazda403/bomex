import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, UploadCloud, Send, FileSpreadsheet } from 'lucide-react';

export const B2BTenderCalculator = ({ t, onOpenTender }) => {
  const [spaceType, setSpaceType] = useState('office');
  const [area, setArea] = useState(250);
  const [materialTier, setMaterialTier] = useState('mdf');
  const [hardwareTier, setHardwareTier] = useState('blum');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic cost calculation heuristic
  const baseRates = {
    office: 190,
    hotel: 280,
    luxury: 340,
    cnc: 85
  };

  const materialMultipliers = {
    egger: 1.0,
    mdf: 1.35,
    veneer: 1.8,
    compact: 1.95
  };

  const hardwareMultipliers = {
    standard: 1.0,
    blum: 1.25,
    electric: 1.55
  };

  const estimatedTotal = Math.round(
    area *
    (baseRates[spaceType] || 200) *
    (materialMultipliers[materialTier] || 1) *
    (hardwareMultipliers[hardwareTier] || 1)
  );

  const estimatedMin = Math.round(estimatedTotal * 0.9);
  const estimatedMax = Math.round(estimatedTotal * 1.15);

  return (
    <section id="calculator" className="py-28 bg-[#f5f6f7] text-[#111416] border-b border-black/10 relative overflow-hidden bg-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white font-mono text-[11px] text-[#8a703a] font-semibold uppercase tracking-widest mb-3 shadow-sm">
            <Calculator className="w-3 h-3" />
            <span>{t.calculator.tag}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#111416] tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-black/60 leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Configurator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls on Left */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-xl flex flex-col justify-between">
            <div className="space-y-8">
              {/* 1. Typology */}
              <div>
                <label className="font-mono text-xs text-[#8a703a] font-bold uppercase tracking-wider block mb-3">
                  01. TIP PROSTORA I NAMENA:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.calculator.spaceTypes.map((st) => (
                    <button
                      key={st.id}
                      onClick={() => setSpaceType(st.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        spaceType === st.id
                          ? 'border-[#8a703a] bg-[#8a703a]/10 text-[#111416] shadow-sm'
                          : 'border-black/10 bg-black/[0.02] text-black/60 hover:border-black/30'
                      }`}
                    >
                      <div className="font-display font-semibold text-sm text-[#111416]">
                        {st.name}
                      </div>
                      <div className="font-mono text-[11px] text-[#8a703a] font-medium mt-1">
                        Orientacija: {st.base}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-mono text-xs text-[#8a703a] font-bold uppercase tracking-wider">
                    02. POVRŠINA PROSTORA (m²):
                  </label>
                  <span className="font-mono font-bold text-lg text-[#111416]">
                    {area} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1500"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full accent-[#8a703a] cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[10px] text-black/50 mt-1">
                  <span>30 m² (Apartman/Studio)</span>
                  <span>500 m² (Sprat kancelarija)</span>
                  <span>1500+ m² (Hotel / Korporacija)</span>
                </div>
              </div>

              {/* 3. Material Specification */}
              <div>
                <label className="font-mono text-xs text-[#8a703a] font-bold uppercase tracking-wider block mb-3">
                  03. PRIMARNA KLASA MATERIJALA:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {t.calculator.materialsOpt.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setMaterialTier(mat.id)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        materialTier === mat.id
                          ? 'border-[#8a703a] bg-[#8a703a]/10 text-[#111416]'
                          : 'border-black/10 bg-black/[0.02] text-black/60 hover:border-black/20'
                      }`}
                    >
                      <div className="font-display font-semibold text-xs text-[#111416]">
                        {mat.name.split(' ')[0]}
                      </div>
                      <span className="font-mono text-[10px] text-[#8a703a] font-bold">
                        {mat.tier}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Hardware Selection */}
              <div>
                <label className="font-mono text-xs text-[#8a703a] font-bold uppercase tracking-wider block mb-3">
                  04. MEHANIZMI I OKOVI:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {t.calculator.hardwareOpt.map((hw) => (
                    <button
                      key={hw.id}
                      onClick={() => setHardwareTier(hw.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        hardwareTier === hw.id
                          ? 'border-[#8a703a] bg-[#8a703a]/10 text-[#111416]'
                          : 'border-black/10 bg-black/[0.02] text-black/60 hover:border-black/20'
                      }`}
                    >
                      <div className="font-display font-semibold text-xs text-[#111416]">
                        {hw.name}
                      </div>
                      <span className="font-mono text-[10px] text-black/50">
                        {hw.note}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary & Direct BOQ Submission Box */}
          <div className="lg:col-span-5 p-6 sm:p-10 rounded-3xl border border-black/10 bg-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase text-[#8a703a] font-bold tracking-widest block mb-2">
                PRELIMINARNI BUDŽETSKI OKVIR
              </span>
              <h3 className="font-display font-bold text-2xl text-[#111416] mb-6">
                Procena Investicije Enterijera
              </h3>

              {/* Price Estimate Card */}
              <div className="p-6 rounded-2xl bg-[#f7f7f5] border border-black/10 mb-6">
                <span className="font-mono text-[11px] text-black/50 block uppercase font-semibold">
                  Orijentacioni raspon:
                </span>
                <div className="font-display font-black text-3xl sm:text-4xl text-[#111416] mt-1">
                  €{estimatedMin.toLocaleString()} – €{estimatedMax.toLocaleString()}
                </div>
                <div className="mt-3 pt-3 border-t border-black/10 flex items-center justify-between font-mono text-[11px] text-black/60">
                  <span>Prosečno po m²:</span>
                  <span className="text-[#8a703a] font-bold">
                    €{Math.round(estimatedTotal / area)} / m²
                  </span>
                </div>
              </div>

              {/* Key Assurances */}
              <ul className="space-y-2.5 text-xs text-black/75 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8a703a] shrink-0" />
                  <span>Uključena kompletna razrada radioničkih crteža</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8a703a] shrink-0" />
                  <span>Fabričko sklapanje, testiranje okova i pakovanje</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8a703a] shrink-0" />
                  <span>Prevoz i montaža licenciranim instalaterskim timom</span>
                </li>
              </ul>
            </div>

            {/* Direct CTA to submit actual BOQ / Tender */}
            <div className="pt-6 border-t border-black/10">
              <button
                onClick={onOpenTender}
                className="w-full py-4 rounded-full bg-[#111416] text-white font-semibold text-sm tracking-tight hover:bg-[#8a703a] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-black/10"
              >
                <span>Pošaljite Arhitektonski Projekat za Fiksnu Ponudu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-mono text-[10px] text-center text-black/50 mt-3">
                Zvaničan tenderski predračun u roku od 48h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
