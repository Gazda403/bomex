import React from 'react';

// Geometric Wireframe Icons inspired by the EVOLUT reference
export const ConeWireframe = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <ellipse cx="75" cy="50" rx="14" ry="34" strokeDasharray="3 3" opacity="0.6" />
    <ellipse cx="75" cy="50" rx="14" ry="34" />
    <line x1="15" y1="50" x2="75" y2="16" />
    <line x1="15" y1="50" x2="75" y2="84" />
    <line x1="15" y1="50" x2="89" y2="50" strokeDasharray="2 2" opacity="0.5" />
    <circle cx="15" cy="50" r="2.5" fill="currentColor" />
  </svg>
);

export const IsometricCube = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <polygon points="50,15 85,35 50,55 15,35" strokeDasharray="1 1" opacity="0.4" />
    <polygon points="50,25 80,42 50,60 20,42" />
    <polygon points="50,60 80,42 80,78 50,95" />
    <polygon points="50,60 20,42 20,78 50,95" />
    <line x1="50" y1="60" x2="50" y2="95" strokeWidth="1.5" />
    <circle cx="50" cy="60" r="2" fill="currentColor" />
  </svg>
);

export const TargetConcentric = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <circle cx="50" cy="50" r="38" strokeDasharray="4 4" opacity="0.4" />
    <circle cx="50" cy="50" r="24" />
    <circle cx="50" cy="50" r="10" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="2.5" fill="currentColor" />
    <line x1="50" y1="6" x2="50" y2="94" strokeDasharray="2 2" opacity="0.3" />
    <line x1="6" y1="50" x2="94" y2="50" strokeDasharray="2 2" opacity="0.3" />
  </svg>
);

export const TriangleRay = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <polygon points="50,15 85,85 15,85" />
    <line x1="50" y1="15" x2="50" y2="85" strokeDasharray="2 2" opacity="0.5" />
    <line x1="28" y1="60" x2="72" y2="60" strokeWidth="1.5" />
    <circle cx="50" cy="60" r="2.5" fill="currentColor" />
  </svg>
);

export const CadCrosshair = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
    <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2 2" opacity="0.6" />
    <line x1="2" y1="12" x2="22" y2="12" strokeDasharray="2 2" opacity="0.6" />
    <circle cx="12" cy="12" r="5" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const CircularStamp = ({ text = "BOMEX ENTERIJERI • NOVI SAD • EST 2004 • PRECISION •" }) => (
  <div className="relative w-36 h-36 flex items-center justify-center">
    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
      <path
        id="stampCircle"
        d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
        fill="none"
      />
      <text className="text-[10px] uppercase font-mono tracking-[0.24em] fill-current">
        <textPath href="#stampCircle" startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-14 h-14 rounded-full border border-current flex items-center justify-center font-display font-bold text-sm tracking-tighter">
        ↗
      </div>
    </div>
  </div>
);

