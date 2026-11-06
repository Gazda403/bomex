import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ArrowUpRight, Building2, MapPin } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Aleksandra Petrović",
    role: "Izvršni direktor",
    company: "Aura Technology Group",
    location: "Novi Sad",
    projectType: "Poslovni prostor · 840m²",
    rating: 5,
    text: "BOMEX je transformisao naš poslovni prostor u nešto što prevazilazi sve što smo zamislili. Svaki milimetar spoja je savršen. Radionički crteži su dostavljeni pre roka, a montaža je završena bez ijedne greške na objektu.",
    textShort: "Svaki milimetar spoja je savršen. Montaža završena bez ijedne greške na objektu.",
    year: "2024",
    projectImg: "/images/hotel-atrijum.jpg",
    tag: "Hotelski & Poslovni Inženjering",
  },
  {
    id: 2,
    name: "Marko Ilić",
    role: "Vlasnik & Arhitekta",
    company: "Studio Ilić Design",
    location: "Beograd",
    projectType: "Rezidencijalni projekat · Vila",
    rating: 5,
    text: "Sarađivao sam sa desetak izvođača u karijeri. BOMEX je jedini koji je dostavio tačno ono što je stajalo u shopDrawings-ima — do poslednje dilatacione fuge i integracije LED profila. Apsolutna preporuka za zahtevne arhitektonske projekte.",
    textShort: "Jedini izvođač koji je dostavio tačno ono što je stajalo u shop drawings-ima.",
    year: "2024",
    projectImg: "/images/vila-rezidencija.png",
    tag: "Luksuzna Rezidencija",
  },
  {
    id: 3,
    name: "Vesna Nikolić",
    role: "Generalni Menadžer",
    company: "Hotel Park Ruma",
    location: "Ruma · Park distrikt",
    projectType: "Hotelski projekat · 48 soba & kongres",
    rating: 5,
    text: "Kompletno opremanje hotela od recepcije do svake sobe. BOMEX je koordinirao sa svim ostalim izvođačima kao pravi generalni izvođač. Gosti konstantno komentarišu kvalitet nameštaja. Investicija koja se višestruko isplatila.",
    textShort: "Gosti konstantno komentarišu kvalitet. Investicija koja se višestruko isplatila.",
    year: "2024",
    projectImg: "/images/restoran-masiv.jpg",
    tag: "Hotelski Kompleks",
  },
  {
    id: 4,
    name: "Dragan Jović",
    role: "Tehnički Direktor",
    company: "Retail Group DOO",
    location: "Novi Sad",
    projectType: "Tržni centar & maloprodajni pultovi",
    rating: 5,
    text: "Sarađujemo sa BOMEX-om na svakom projektu poslednjih pet godina. Pouzdanost i preciznost su konstantni. CNC nesting usluge su nam smanjile troškove materijala za 18% u poređenju sa prethodnim dobavljačima.",
    textShort: "CNC nesting usluge su nam smanjile troškove materijala za 18%.",
    year: "2023",
    projectImg: "/images/atrijum-plafon.jpg",
    tag: "Komercijalni Sektor",
  },
  {
    id: 5,
    name: "Nataša Vujović",
    role: "Vlasnik Stana",
    company: "Privatni Klijent",
    location: "Novi Sad · Liman",
    projectType: "Zidne obloge, skrivena vrata & kuhinja",
    rating: 5,
    text: "Kuhinja i zidni ormari koji su mi napravljeni su bukvalno umetnina. Svaka fioka se zatvara sa istim osećajem. Nema škripanja, nema ničega što nije savršeno. BOMEX se brine o detaljima koje ne primećujete dok ih nemaju.",
    textShort: "Kuhinja je bukvalno umetnina. Brinu se o detaljima koje ne primećujete dok ih nemaju.",
    year: "2023",
    projectImg: "/images/namestaj-hrast.png",
    tag: "Bespoke Rezidencijalno",
  },
];

const StarRow = ({ count = 5, size = "w-4 h-4" }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className={`${size} fill-amber-400 text-amber-400`} />
    ))}
  </div>
);

export const ReviewsSection = ({ onOpenTender }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx) => {
    if (animating || idx === activeIdx) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setAnimating(false);
    }, 300);
  };

  // Auto-rotate every 5s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const active = reviews[activeIdx];

  return (
    <section id="reviews" className="py-16 sm:py-28 bg-[#0a0c0e] text-white border-b border-white/10 relative overflow-hidden">
      {/* Large ambient glow behind active project */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={active.projectImg}
          key={active.id}
          alt=""
          className="w-full h-full object-cover opacity-[0.06] scale-110 blur-sm transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0e] via-[#0a0c0e]/80 to-[#0a0c0e]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] text-[#c5a059] uppercase tracking-widest mb-3">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>KLIJENTSKE RECENZIJE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              Reči naših<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0e6d2] to-[#c5a059]">
                klijenata.
              </span>
            </h2>
          </div>

          {/* Google aggregate score — compact on mobile */}
          <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md self-start sm:shrink-0">
            <div className="text-center">
              <div className="font-display font-black text-4xl sm:text-5xl text-white leading-none">5.0</div>
              <StarRow size="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <p className="font-mono text-[9px] sm:text-[10px] text-[#8c969b] mt-1 uppercase tracking-wider">Google · 48 ocena</p>
            </div>
            <div className="border-l border-white/10 pl-4 sm:pl-5 space-y-1.5">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px]">
                  <span className="text-amber-400 w-3 sm:w-4 text-right">{star}★</span>
                  <div className="w-14 sm:w-20 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-400 transition-all"
                      style={{ width: star === 5 ? '100%' : '0%' }}
                    />
                  </div>
                  <span className="text-white/40">{star === 5 ? '48' : '0'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Two-Column Review Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-12">

          {/* LEFT: Active Full Review Card */}
          <div className={`lg:col-span-7 transition-all duration-300 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            <div className="h-full p-6 sm:p-10 rounded-3xl border border-white/15 bg-[#111416]/90 backdrop-blur-md shadow-2xl flex flex-col justify-between relative overflow-hidden">
              {/* Faint quote mark watermark */}
              <div className="absolute -top-6 -left-2 font-display font-black text-[16rem] text-white/[0.025] leading-none select-none pointer-events-none">"</div>

              <div>
                {/* Project tag + stars */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/15 text-[#c5a059] font-mono text-[10px] font-bold uppercase tracking-widest">
                    {active.tag}
                  </span>
                  <StarRow size="w-4 h-4" />
                </div>

                {/* Main quote text */}
                <blockquote className="font-display font-semibold text-lg sm:text-2xl lg:text-3xl text-white leading-[1.35] tracking-tight mb-6 sm:mb-8">
                  "{active.text}"
                </blockquote>

                {/* Project detail spec line */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 font-mono text-[11px] text-[#8c969b] mb-6">
                  <Building2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{active.projectType}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{active.location}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[#c5a059]">{active.year}</span>
                </div>
              </div>

              {/* Reviewer Identity */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="font-display font-bold text-white text-base">{active.name}</p>
                  <p className="font-mono text-xs text-[#8c969b]">{active.role} · {active.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only: Dot navigation */}
          <div className="lg:hidden col-span-full flex flex-col items-center gap-3 mt-2">
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeIdx
                      ? 'w-6 h-2.5 bg-[#c5a059]'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <p className="font-mono text-[11px] text-white/40 tracking-wider">
              {activeIdx + 1} / {reviews.length}
            </p>
          </div>

          {/* RIGHT: Project Image + Stacked Mini Reviews — hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-4">
            {/* Featured project image */}
            <div
              className={`relative rounded-2xl overflow-hidden h-52 sm:h-60 border border-white/10 shadow-2xl group transition-all duration-700 ${animating ? 'opacity-50 scale-[0.99]' : 'opacity-100 scale-100'}`}
            >
              <img
                src={active.projectImg}
                alt={active.projectType}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="font-mono text-[10px] text-white uppercase tracking-wider bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
                  {active.tag} · {active.year}
                </span>
              </div>
            </div>

            {/* Stacked quick review switchers */}
            <div className="flex flex-col gap-2.5">
              {reviews.map((r, idx) => (
                <button
                  key={r.id}
                  onClick={() => goTo(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 group flex items-center gap-3 ${
                    idx === activeIdx
                      ? 'border-[#c5a059]/50 bg-[#c5a059]/10 shadow-lg shadow-[#c5a059]/5'
                      : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-display font-semibold text-sm truncate ${idx === activeIdx ? 'text-white' : 'text-white/70'}`}>
                        {r.name}
                      </span>
                      <StarRow count={5} size="w-2.5 h-2.5" />
                    </div>
                    <p className="font-mono text-[10px] text-[#8c969b] truncate">{r.company} · {r.year}</p>
                  </div>
                  {idx === activeIdx && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Crawling Quote Tape (editorial marquee strip) */}
        <div className="border-t border-white/10 pt-8 overflow-hidden relative">
          <div className="flex gap-8 font-mono text-xs text-white/30 uppercase tracking-widest whitespace-nowrap"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {[...reviews, ...reviews].map((r, i) => (
              <span key={i} className="shrink-0 flex items-center gap-3">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                "{r.textShort}"
                <span className="text-white/20">— {r.name}, {r.company}</span>
                <span className="w-8 h-px bg-white/20 inline-block" />
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-white/10 bg-white/5">
          <div>
            <p className="font-display font-semibold text-white text-lg">Postanite naš sledeći zadovoljni klijent.</p>
            <p className="font-mono text-xs text-[#8c969b] mt-1">Besplatna konsultacija sa tehničkim timom BOMEX-a u roku od 24h.</p>
          </div>
          <button
            onClick={onOpenTender}
            className="group px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#c5a059] transition-all flex items-center gap-2 shrink-0 shadow-xl"
          >
            <span>Zatražite Konsultaciju</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Marquee CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

