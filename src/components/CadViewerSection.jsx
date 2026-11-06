import React, { useState } from 'react';
import { Eye, Layers, Compass, ZoomIn, Info, CheckCircle2 } from 'lucide-react';
import { CadCrosshair } from './GeometricIcons';

export const CadViewerSection = ({ t }) => {
  const [viewMode, setViewMode] = useState('cad'); // 'render', 'cad', 'exploded'
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    {
      id: 1,
      x: '24%',
      y: '38%',
      title: 'CNC Spoj pod 45° (Gerovani spoj)',
      spec: 'Tolerancija ±0.08mm, pojačanje drvenim keksom i polimernim lepkom D4 klase.',
      cadCode: 'DTL-A / SEC 04'
    },
    {
      id: 2,
      x: '55%',
      y: '52%',
      title: 'Skrivena Blum Tip-On & Blumotion Integracija',
      spec: 'Električni Servo-Drive mehanizam integrisan u leđa korpusa bez gubitka zapremine fioke.',
      cadCode: 'HW-BLUM-78B'
    },
    {
      id: 3,
      x: '78%',
      y: '42%',
      title: 'Monolitni Kerrock Pult & Podugradni Sudoper',
      spec: 'Termoformirana bešavna veza pulta i zida. Radijus zaobljenja R=12mm za lako održavanje.',
      cadCode: 'SRF-KRK-12'
    },
    {
      id: 4,
      x: '48%',
      y: '80%',
      title: 'PUR Nulta Fuga na Sokli',
      spec: 'Kantovanje poliuretanskim lepkom koji formira hemijsku vezu otpornu na paru i poplave.',
      cadCode: 'EDG-PUR-2.0'
    }
  ];

  return (
    <section className="py-16 sm:py-28 bg-[#f2f2ef] text-[#111416] border-b border-black/10 relative overflow-hidden bg-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white font-mono text-[11px] text-[#8a703a] font-semibold uppercase tracking-widest mb-3 shadow-sm">
              <Compass className="w-3 h-3" />
              <span>{t.cadViewer.badge}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#111416] tracking-tight">
              {t.cadViewer.title}
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-normal leading-relaxed">
            {t.cadViewer.subtitle}
          </p>
        </div>

        {/* CAD Blueprint Frame */}
        <div className="rounded-3xl border border-black/15 bg-white shadow-2xl overflow-hidden relative">
          {/* Top Bar of the CAD Inspector */}
          <div className="px-6 py-4 border-b border-black/10 bg-[#f7f7f5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 font-mono text-xs text-black/60">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-black font-semibold">DWG_BOMEX_ISLAND_REV04.cad</span>
              <span className="hidden sm:inline text-black/20">|</span>
              <span className="hidden sm:inline text-[#8a703a] font-bold">Razmera 1:20 • CAD/CAM v24.2</span>
            </div>

            {/* Mode Switchers */}
            <div className="flex items-center gap-1.5 p-1 bg-black/5 rounded-xl border border-black/10 font-mono text-xs">
              <button
                onClick={() => setViewMode('cad')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'cad'
                    ? 'bg-[#111416] text-white font-semibold shadow-sm'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {t.cadViewer.modes.cad}
              </button>
              <button
                onClick={() => setViewMode('render')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'render'
                    ? 'bg-[#111416] text-white font-semibold shadow-sm'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {t.cadViewer.modes.render}
              </button>
              <button
                onClick={() => setViewMode('exploded')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'exploded'
                    ? 'bg-[#111416] text-white font-semibold shadow-sm'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {t.cadViewer.modes.exploded}
              </button>
            </div>
          </div>

          {/* Interactive Canvas Area */}
          <div className="relative min-h-[440px] sm:min-h-[540px] flex items-center justify-center p-6 bg-[#0c0f12]">
            {/* Background CAD Grid Graphic */}
            <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

            {/* Visual based on mode */}
            {viewMode === 'cad' && (
              <div className="relative w-full max-w-4xl h-[420px] sm:h-[480px] border border-[#c5a059]/25 rounded-2xl bg-[#090b0d] flex items-center justify-center overflow-hidden p-4 shadow-inner">
                {/* Simulated Architectural Vector SVG Wireframe */}
                <svg
                  viewBox="0 0 900 500"
                  className="w-full h-full text-[#c5a059] opacity-90 stroke-current"
                  fill="none"
                  strokeWidth="1.5"
                >
                  {/* Floor line & Dimensions */}
                  <line x1="50" y1="420" x2="850" y2="420" stroke="#333d42" strokeWidth="2" />
                  <line x1="50" y1="440" x2="850" y2="440" stroke="#c5a059" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="450" y="460" fill="#c5a059" fontSize="12" fontFamily="monospace" textAnchor="middle">
                    L = 3400 mm
                  </text>

                  {/* Main Kitchen Island Counter Body */}
                  <rect x="180" y="160" width="540" height="240" rx="4" stroke="#ffffff" strokeWidth="2" fill="rgba(197, 160, 89, 0.04)" />
                  {/* Countertop Thickness */}
                  <rect x="170" y="140" width="560" height="20" rx="2" stroke="#c5a059" strokeWidth="2" fill="rgba(197, 160, 89, 0.15)" />
                  <text x="745" y="155" fill="#c5a059" fontSize="11" fontFamily="monospace">H=920mm</text>

                  {/* Drawers Divisions */}
                  <line x1="360" y1="160" x2="360" y2="400" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="540" y1="160" x2="540" y2="400" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="180" y1="280" x2="720" y2="280" stroke="#ffffff" strokeWidth="1.5" />

                  {/* Internal Hardware Blum runners indication */}
                  <line x1="200" y1="270" x2="340" y2="270" stroke="#00ffff" strokeWidth="1" strokeDasharray="4 2" />
                  <line x1="200" y1="390" x2="340" y2="390" stroke="#00ffff" strokeWidth="1" strokeDasharray="4 2" />
                  <line x1="380" y1="270" x2="520" y2="270" stroke="#00ffff" strokeWidth="1" strokeDasharray="4 2" />
                  <line x1="380" y1="390" x2="520" y2="390" stroke="#00ffff" strokeWidth="1" strokeDasharray="4 2" />

                  {/* Recessed Plinth / Sokla */}
                  <rect x="220" y="400" width="460" height="20" stroke="#8c969b" strokeWidth="1" fill="#141719" />

                  {/* Dimension witness lines */}
                  <line x1="150" y1="140" x2="150" y2="420" stroke="#c5a059" strokeWidth="1" />
                  <line x1="145" y1="140" x2="155" y2="140" stroke="#c5a059" strokeWidth="1" />
                  <line x1="145" y1="420" x2="155" y2="420" stroke="#c5a059" strokeWidth="1" />
                  <text x="130" y="280" fill="#c5a059" fontSize="12" fontFamily="monospace" transform="rotate(-90 130 280)">
                    H_TOTAL = 920 mm
                  </text>
                </svg>

                {/* Hotspot Pins overlaid on the CAD drawing */}
                {hotspots.map((spot, idx) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(idx)}
                    style={{ left: spot.x, top: spot.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-30 group ${
                      activeHotspot === idx
                        ? 'bg-[#c5a059] text-black scale-125 shadow-lg shadow-[#c5a059]/40'
                        : 'bg-white/20 text-white hover:bg-white hover:text-black'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">{spot.id}</span>
                    <span className="absolute -inset-1 rounded-full border border-current animate-ping opacity-30 pointer-events-none" />
                  </button>
                ))}
              </div>
            )}

            {viewMode === 'render' && (
              <div className="relative w-full max-w-4xl h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="3D Render"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-[#0b0d0e]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 font-mono text-xs text-white">
                    Photorealistic V-Ray Render • Hrast Furnir + Calacatta Pult
                  </div>
                </div>
              </div>
            )}

            {viewMode === 'exploded' && (
              <div className="relative w-full max-w-4xl h-[420px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-[#121619] p-8 flex flex-col justify-center items-center text-center text-white">
                <Layers className="w-16 h-16 text-[#c5a059] mb-4 animate-bounce" />
                <h4 className="font-display font-bold text-2xl text-white mb-2">
                  Razvijeni Sklop za CNC Nesting
                </h4>
                <p className="text-sm text-[#8c969b] max-w-md mb-6 leading-relaxed">
                  Svaka ploča dobija jedinstveni bar-kod sa parametrima glodanja, rupa za ekscentre i pozicijama tiplova pre ulaska na mašinu.
                </p>
                <div className="flex flex-wrap justify-center gap-3 font-mono text-xs">
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white">
                    Optimizacija krojenja: 94.6%
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#c5a059]">
                    Krojenje bez ručnog prepravljanja
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Active Hotspot Inspector Panel */}
          {viewMode === 'cad' && (
            <div className="p-6 border-t border-black/10 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#111416] text-[#c5a059] font-mono font-bold text-lg flex items-center justify-center shrink-0 shadow-sm">
                  {hotspots[activeHotspot].id}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#8a703a] font-bold tracking-wider uppercase">
                      [{hotspots[activeHotspot].cadCode}]
                    </span>
                    <h5 className="font-display font-bold text-[#111416] text-base">
                      {hotspots[activeHotspot].title}
                    </h5>
                  </div>
                  <p className="text-xs text-black/60 mt-1 max-w-2xl">
                    {hotspots[activeHotspot].spec}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Verifikovan Radionički Detalj
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
