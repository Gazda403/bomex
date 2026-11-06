import React, { useState } from 'react';
import { X, UploadCloud, CheckCircle2, FileText, Send, Building2, Phone, Mail, User } from 'lucide-react';

export const TenderModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: 'Poslovni prostor (Offices)',
    location: 'Novi Sad / Vojvodina',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/20 bg-[#121518] text-white shadow-2xl overflow-hidden my-auto">
        {/* Top Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#15191c]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]"></span>
            <h3 className="font-display font-bold text-lg text-white">
              Dostava Tenderske Dokumentacije & Predmera
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
            aria-label="Zatvori prozor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-400/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-display font-bold text-2xl text-white">
              Dokumentacija Uspešno Prosleđena!
            </h4>
            <p className="text-sm text-[#8c969b] max-w-md mx-auto leading-relaxed">
              Vaš upit je dodeljen inženjerskom odeljenju BOMEX-ENTERIJERI DOO NOVI SAD pod referentnim brojem:
            </p>
            <div className="inline-block px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-[#c5a059]">
              REF: TND-2026-NVS-84
            </div>
            <p className="text-xs text-[#8c969b]">
              Naš tehnički tim će analizirati projekat i kontaktirati Vas sa ponudom u roku od 24-48 radnih sati.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#c5a059] transition-colors"
            >
              U redu
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <p className="text-xs text-[#8c969b] mb-4">
              Pošaljite arhitektonske osnove, DWG fajlove ili predmer radova (BOQ). Garantujemo diskreciju i zaštitu autorskih prava Vaših projekata.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                  Kompanija / Arhitektonski biro *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#8c969b] absolute left-3 top-3" />
                  <input
                    required
                    type="text"
                    placeholder="npr. Studio Arhitektura d.o.o."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/30 focus:border-[#c5a059] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                  Kontakt Osoba *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8c969b] absolute left-3 top-3" />
                  <input
                    required
                    type="text"
                    placeholder="Ime i prezime"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/30 focus:border-[#c5a059] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                  Email adresa *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8c969b] absolute left-3 top-3" />
                  <input
                    required
                    type="email"
                    placeholder="vas.email@kompanija.rs"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/30 focus:border-[#c5a059] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                  Broj telefona *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8c969b] absolute left-3 top-3" />
                  <input
                    required
                    type="tel"
                    placeholder="+381 6..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/30 focus:border-[#c5a059] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                  Tip Projekta
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#161a1d] text-sm text-white focus:border-[#c5a059] outline-none"
                >
                  <option>Poslovni prostor (Offices)</option>
                  <option>Hotel & Ugostiteljstvo (Hospitality)</option>
                  <option>Rezidencija / Luksuzna Vila</option>
                  <option>Uslužna CNC obrada & Nesting</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                  Lokacija Objekta
                </label>
                <input
                  type="text"
                  placeholder="npr. Novi Sad, Beograd, Inostranstvo"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/30 focus:border-[#c5a059] outline-none"
                />
              </div>
            </div>

            {/* File Upload Box */}
            <div>
              <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                Prilog: Nacrti / Predmer (DWG, PDF, ZIP do 50MB)
              </label>
              <label className="border-2 border-dashed border-white/20 hover:border-[#c5a059] bg-white/[0.02] rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors">
                <UploadCloud className="w-8 h-8 text-[#c5a059] mb-2" />
                <span className="text-xs text-white font-medium">
                  {fileName ? fileName : 'Kliknite za izbor fajla ili prevucite nacrte'}
                </span>
                <span className="font-mono text-[10px] text-[#8c969b] mt-1">
                  Podržano: DWG, DXF, PDF, XLSX, ZIP
                </span>
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
            </div>

            <div>
              <label className="font-mono text-[11px] text-[#8c969b] uppercase block mb-1">
                Napomene i Željeni Rokovi
              </label>
              <textarea
                rows="2"
                placeholder="Unesite posebne zahteve, faznost radova ili očekivane termine..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-white/10 bg-black/40 text-sm text-white placeholder-white/30 focus:border-[#c5a059] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#c5a059] text-black font-semibold text-sm hover:bg-white transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Send className="w-4 h-4" />
              <span>Pošaljite Tenderski Upit</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

