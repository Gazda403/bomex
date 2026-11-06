import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { CircularStamp } from './GeometricIcons';

export const Footer = ({ t, onOpenTender }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#f7f7f5] text-[#111416] pt-14 sm:pt-24 pb-12 relative overflow-hidden border-t border-black/10">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant "LET'S TALK" Display Headline (OCKHAM Reference inspired) */}
        <div className="pb-12 sm:pb-16 border-b border-black/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8">
            <h2 className="font-display font-black text-4xl sm:text-7xl md:text-9xl tracking-tighter text-[#111416] uppercase leading-none select-none break-words">
              {t.footer.bigTalk}
            </h2>

            {/* Circular Rotating Stamp Badge */}
            <div className="self-start lg:self-end text-[#111416]">
              <CircularStamp text="BOMEX ENTERIJERI • NOVI SAD • TURNKEY • CNC • " />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-4xl">
            <p className="font-display font-medium text-lg sm:text-xl text-black/70">
              {t.footer.subTalk}
            </p>
            <button
              onClick={onOpenTender}
              className="px-8 py-4 rounded-full bg-[#111416] text-white font-semibold text-sm hover:bg-[#8a703a] hover:text-black transition-all flex items-center gap-2 shrink-0 shadow-xl"
            >
              <span>Započnite Konsultacije</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Corporate Legal & Operational Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-black/10 font-mono text-xs">
          {/* Col 1: Legal Identity */}
          <div>
            <span className="text-[#8a703a] uppercase tracking-wider block mb-3 font-bold">
              PRAVNI ENTITET
            </span>
            <p className="font-display font-bold text-[#111416] text-sm mb-2">
              {t.footer.companyName}
            </p>
            <p className="text-black/60 leading-relaxed">
              Privredno društvo za proizvodnju, inženjering i usluge opremanja enterijera.
            </p>
            <p className="text-black/40 mt-3">
              {t.footer.regInfo}
            </p>
          </div>

          {/* Col 2: Production Facility & HQ */}
          <div>
            <span className="text-[#8a703a] uppercase tracking-wider block mb-3 font-bold">
              FABRIKA & UPRAVA
            </span>
            <div className="flex items-start gap-2 text-black/70 mb-3">
              <MapPin className="w-4 h-4 text-[#8a703a] shrink-0 mt-0.5" />
              <span>{t.footer.location}</span>
            </div>
            <div className="flex items-start gap-2 text-black/60">
              <Clock className="w-4 h-4 text-[#8a703a] shrink-0 mt-0.5" />
              <span>{t.footer.workingHours}</span>
            </div>
          </div>

          {/* Col 3: Direct Lines */}
          <div>
            <span className="text-[#8a703a] uppercase tracking-wider block mb-3 font-bold">
              DIREKTNE LINIJE & KONTAKT
            </span>
            <div className="space-y-2">
              <a
                href="tel:+381216419140"
                className="flex items-center gap-2 text-black/70 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8a703a] shrink-0" />
                <span>Tel: +381 21 64 19 140</span>
              </a>
              <a
                href="tel:+381216419238"
                className="flex items-center gap-2 text-black/70 hover:text-black transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8a703a] shrink-0" />
                <span>Tel: +381 21 64 19 238</span>
              </a>
              <div className="flex items-center gap-2 text-black/60">
                <span className="font-mono text-[10px] text-[#8a703a] font-bold">FAX:</span>
                <span>+381 21 64 12 905</span>
              </div>
              <a
                href="mailto:office@bomexgroup.rs"
                className="flex items-center gap-2 text-black/70 hover:text-black transition-colors pt-1"
              >
                <Mail className="w-4 h-4 text-[#8a703a] shrink-0" />
                <span>office@bomexgroup.rs</span>
              </a>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Certificates */}
          <div>
            <span className="text-[#8a703a] uppercase tracking-wider block mb-3 font-bold">
              SERTIFIKACIJA
            </span>
            <ul className="space-y-1.5 text-black/60">
              <li>• ISO 9001:2015 Sistem Menadžmenta</li>
              <li>• FSC Sertifikat Porekla Drveta</li>
              <li>• CE Znak i Sigurnost Proizvoda</li>
              <li>• 100% Reciklabilni Ambalažni Sistem</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-black/50">
          <p>{t.footer.copy}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-black/70 hover:text-black transition-colors p-2"
          >
            <span>POVRATAK NA VRH</span>
            <div className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
