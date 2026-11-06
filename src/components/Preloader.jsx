import React, { useState, useEffect } from 'react';

export const Preloader = ({ onComplete }) => {
  // Animation states: 'enter' -> 'spinning' -> 'writing' -> 'exit' -> 'done'
  const [phase, setPhase] = useState('enter');
  const [text, setText] = useState('B');

  useEffect(() => {
    // Phase 1: B appears and spins
    const t1 = setTimeout(() => {
      setPhase('spinning');
    }, 150);

    // Phase 2: Start writing out "BOMEX"
    const t2 = setTimeout(() => {
      setPhase('writing');
      const letters = ['B', 'BO', 'BOM', 'BOME', 'BOMEX'];
      letters.forEach((part, index) => {
        setTimeout(() => {
          setText(part);
        }, index * 110);
      });
    }, 750);

    // Phase 3: Curtain slides up cleanly
    const t3 = setTimeout(() => {
      setPhase('exit');
    }, 1500);

    // Phase 4: Component complete and unmount
    const t4 = setTimeout(() => {
      setPhase('done');
      if (onComplete) onComplete();
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0c0e] flex items-center justify-center select-none transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        phase === 'exit' ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        {/* Monogram / Logo Container */}
        <div className="relative flex items-center justify-center h-24">
          {/* While spinning only B */}
          {phase !== 'writing' && (
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1b1e22] to-[#111416] border border-[#c5a059]/40 text-[#c5a059] flex items-center justify-center shadow-2xl transition-all duration-700 ${
                phase === 'spinning' ? 'animate-spin-3d scale-110' : 'scale-90 opacity-0'
              }`}
            >
              <span className="font-display font-black text-3xl text-[#c5a059] tracking-tight">
                B
              </span>
            </div>
          )}

          {/* When writing out BOMEX */}
          {phase === 'writing' && (
            <div className="flex items-center tracking-[0.35em] font-display font-black text-4xl sm:text-6xl text-white uppercase animate-fade-in pl-2">
              <span className="text-[#c5a059]">{text.slice(0, 1)}</span>
              <span>{text.slice(1)}</span>
              {/* Subtle blinking cursor */}
              <span className="w-1 h-8 sm:h-11 bg-[#c5a059] ml-2 animate-pulse" />
            </div>
          )}
        </div>

        {/* Minimal luxury subtitle */}
        <div
          className={`mt-4 font-mono text-[10px] sm:text-[11px] tracking-[0.4em] text-white/40 uppercase transition-all duration-500 ${
            phase === 'writing' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          ENTERIJERI • NOVI SAD
        </div>
      </div>

      {/* 3D Spin CSS */}
      <style>{`
        @keyframes spin3D {
          0% {
            transform: perspective(600px) rotateY(0deg) scale(0.9);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: perspective(600px) rotateY(720deg) scale(1.1);
            opacity: 1;
          }
        }
        .animate-spin-3d {
          animation: spin3D 0.65s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
