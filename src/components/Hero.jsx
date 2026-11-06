import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { ConeWireframe, CadCrosshair } from './GeometricIcons';

export const Hero = ({ t, onOpenTender }) => {
  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-between overflow-hidden bg-[#f7f7f5] text-[#111416] bg-grid-light border-b border-black/10">
      {/* Ambient Lighting Gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">

        {/* ── Eyebrow Row ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 sm:mb-10">

          {/* Left pill: status dot + short location text + separator + stars */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-2 rounded-full border border-black/10 bg-white shadow-sm whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            {/* On mobile show a shorter label */}
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-black/75 font-bold sm:hidden">
              BOMEX DOO • NOVI SAD
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-black/75 font-bold hidden sm:inline">
              {t.hero.eyebrow}
            </span>

            <span className="w-px h-3 bg-black/15 mx-1"></span>

            {/* Stars + score */}
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-mono font-bold text-[11px] text-black ml-1">5.0</span>
              <span className="font-mono text-[10px] text-black/50 hidden sm:inline ml-0.5">· Google</span>
            </div>
          </div>

          {/* Right: coordinates — hidden on mobile */}
          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-black/55">
            <span className="flex items-center gap-1.5">
              <CadCrosshair className="w-3 h-3 text-[#8a703a]" />
              45.2671° N, 19.8335° E
            </span>
            <span className="text-black/20">|</span>
            <span className="text-[#8a703a] font-semibold">CNC V4.2</span>
          </div>
        </div>

        {/* ── Headline ── */}
        <div className="relative select-none mb-10 sm:mb-12">
          {/* Watermark — hidden on mobile to avoid clutter */}
          <div className="hidden sm:block absolute -top-10 left-0 right-0 font-display font-black text-8xl md:text-9xl lg:text-[11rem] tracking-[0.24em] text-black/[0.035] uppercase leading-none overflow-hidden whitespace-nowrap pointer-events-none">
            B O M E X
          </div>
          <h1 className="relative z-10 font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#111416] tracking-tight leading-[1.1] max-w-4xl">
            Inženjering i opremanje enterijera po sistemu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111416] via-[#8a703a] to-[#c5a059]">
              ključ u ruke.
            </span>
          </h1>
        </div>

        {/* ── Body: text+CTAs left, images right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left column */}
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-black/65 font-normal leading-relaxed max-w-lg">
              {t.hero.subline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#111416] text-white font-semibold text-sm tracking-tight hover:bg-[#c5a059] hover:text-black transition-all duration-300 shadow-lg"
              >
                <span>{t.hero.ctaPrimary}</span>
                <span className="w-2 h-2 rounded-full bg-white group-hover:bg-black group-hover:scale-125 transition-transform"></span>
              </a>
              <button
                onClick={onOpenTender}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-black/20 bg-white text-black font-medium text-sm hover:border-[#8a703a] hover:bg-black/5 transition-all duration-300"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a703a]" />
              </button>
            </div>
          </div>

          {/* Right column: dual images + quality card — hidden on mobile, shown from lg */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 items-start">
              {/* Main image */}
              <div className="col-span-7">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-black/10 shadow-2xl group">
                  <img
                    src="/images/namestaj-hrast.png"
                    alt="BOMEX Nameštaj po meri i zidne obloge"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="font-mono text-[10px] text-white uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
                      Bespoke Inženjering • Novi Sad
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary image + card */}
              <div className="col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-black/10 shadow-lg group">
                  <img
                    src="/images/vila-rezidencija.png"
                    alt="BOMEX Rezidencijalna Vila"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="font-mono text-[9px] text-white uppercase tracking-wider bg-black/50 backdrop-blur-md px-2 py-0.5 rounded">
                      Vila & Pergola
                    </span>
                  </div>
                </div>

                {/* Compact quality card */}
                <div className="p-4 rounded-2xl border border-black/10 bg-white shadow-xl translate-x-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-mono text-[9px] uppercase text-[#8a703a] font-bold tracking-widest block mb-0.5">
                        STANDARDI KVALITETA
                      </span>
                      <h4 className="font-display font-bold text-[#111416] text-sm leading-tight">
                        CNC Nesting & CAD
                      </h4>
                    </div>
                    <ConeWireframe className="w-8 h-8 text-[#8a703a] shrink-0" />
                  </div>
                  <p className="text-[11px] text-black/60 mt-2 leading-relaxed">
                    Direktna veza 3D modela sa 5-osnim CNC centrima za 100% ponovljivost.
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-black/10 flex items-center justify-between font-mono text-[10px]">
                    <span className="font-bold text-black">±0.1mm</span>
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      QC Cert.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 mt-14 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-black/10 divide-y-[1px] md:divide-y-0 md:divide-x divide-black/10 rounded-2xl bg-white shadow-sm overflow-hidden">
          {t.hero.stats.map((stat, idx) => (
            <div key={idx} className="p-5 sm:p-7 flex flex-col gap-1 group hover:bg-black/[0.02] transition-colors">
              <span className="font-mono text-[10px] text-[#8a703a] font-bold">[0{idx + 1}]</span>
              <div className="font-display font-bold text-2xl sm:text-3xl text-[#111416] tracking-tight group-hover:text-[#8a703a] transition-colors leading-tight">
                {stat.value}
              </div>
              <p className="text-[11px] text-black/55 font-medium leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
