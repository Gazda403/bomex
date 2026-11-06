import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Phone, FileText } from 'lucide-react';

export const Navbar = ({ lang, setLang, t, onOpenTender }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-black/10 shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Technical Coordinates */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-[#111416] text-[#c5a059] flex items-center justify-center font-display font-black text-lg group-hover:bg-[#c5a059] group-hover:text-black transition-colors shadow-sm">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-[#111416] text-base leading-tight group-hover:text-[#8a703a] transition-colors">
                BOMEX
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-black/50">
                ENTERIJERI DOO • NOVI SAD
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-black/70">
            <a
              href="#services"
              className="hover:text-black transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] font-mono text-[#8a703a] font-bold">01/</span>
              {t.nav.services}
            </a>
            <a
              href="#synergy"
              className="hover:text-black transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] font-mono text-[#8a703a] font-bold">02/</span>
              {lang === 'sr' ? 'Sinergija' : 'Synergy'}
            </a>
            <a
              href="#statements"
              className="hover:text-black transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] font-mono text-[#8a703a] font-bold">03/</span>
              {lang === 'sr' ? 'Inženjering' : 'Engineering'}
            </a>
            <a
              href="#materials"
              className="hover:text-black transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] font-mono text-[#8a703a] font-bold">04/</span>
              {t.nav.materials}
            </a>
            <a
              href="#projects"
              className="hover:text-black transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] font-mono text-[#8a703a] font-bold">05/</span>
              {t.nav.projects}
            </a>
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'sr' ? 'en' : 'sr')}
              className="px-3 py-1.5 rounded-full border border-black/15 bg-black/5 font-mono text-xs text-black hover:border-black hover:bg-black/10 transition-all flex items-center gap-1.5"
              title="Promeni jezik / Switch Language"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a703a]"></span>
              {t.nav.lang}
            </button>

            {/* Direct Phone / Contact */}
            <a
              href="tel:+381216419140"
              className="text-black/70 hover:text-black transition-colors p-2 text-xs font-mono flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#8a703a]" />
              <span className="hidden xl:inline">+381 21 64 19 140</span>
            </a>

            {/* Submit Tender BOQ Capsule Button */}
            <button
              onClick={onOpenTender}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111416] text-white font-semibold text-xs tracking-tight hover:bg-[#c5a059] hover:text-black transition-all duration-300 shadow-md"
            >
              <span>{t.nav.cta}</span>
              <div className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3 h-3 text-current" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === 'sr' ? 'en' : 'sr')}
              className="px-2.5 py-1 rounded-full border border-black/15 font-mono text-[11px] text-black bg-black/5"
            >
              {t.nav.lang}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black bg-black/5 rounded-lg hover:bg-black/10 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col justify-between p-6 pt-24 md:hidden">
          <div className="flex flex-col gap-6 text-xl font-display font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-black/10 flex items-center justify-between text-black"
            >
              <span>{t.nav.services}</span>
              <span className="font-mono text-xs text-[#8a703a]">01</span>
            </a>
            <a
              href="#synergy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-black/10 flex items-center justify-between text-black"
            >
              <span>{lang === 'sr' ? 'Sinergija & Tehnologija' : 'Synergy & Tech'}</span>
              <span className="font-mono text-xs text-[#8a703a]">02</span>
            </a>
            <a
              href="#statements"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-black/10 flex items-center justify-between text-black"
            >
              <span>{lang === 'sr' ? 'Inženjering & Filozofija' : 'Engineering'}</span>
              <span className="font-mono text-xs text-[#8a703a]">03</span>
            </a>
            <a
              href="#materials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-black/10 flex items-center justify-between text-black"
            >
              <span>{t.nav.materials}</span>
              <span className="font-mono text-xs text-[#8a703a]">04</span>
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-black/10 flex items-center justify-between text-black"
            >
              <span>{t.nav.projects}</span>
              <span className="font-mono text-xs text-[#8a703a]">05</span>
            </a>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-black/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTender();
              }}
              className="w-full py-3.5 rounded-full bg-[#111416] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <FileText className="w-4 h-4 text-[#c5a059]" />
              <span>{t.nav.cta}</span>
            </button>
            <a
              href="tel:+381216419140"
              className="w-full py-3 rounded-full border border-black/20 text-center font-mono text-xs text-black"
            >
              Pozovite Inženjering: +381 21 64 19 140
            </a>
          </div>
        </div>
      )}
    </>
  );
};
