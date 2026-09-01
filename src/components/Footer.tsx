import React from 'react';
import { Facebook, Twitter, Instagram, PhoneCall, Mail } from 'lucide-react';
import { LOGO_IMAGE } from '../data';
import { TEXTS } from '../constants';

export default function Footer() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetPos = el.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-lowest border-t border-brand-outline-variant/30 relative overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute left-12 bottom-0 top-0 w-px bg-gradient-to-t from-brand-outline-variant/15 via-transparent to-transparent hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <img
                src={LOGO_IMAGE}
                alt="B&R Logo Mini"
                className="h-10 w-auto brightness-110"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-black text-base uppercase text-white tracking-wider">
                {TEXTS.footer.brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-brand-variant font-light leading-relaxed max-w-sm">
              {TEXTS.footer.description}
            </p>

            {/* Social Anchor Links using Lucide Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 border border-brand-outline-variant/40 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-white transition-all cursor-pointer"
                title={TEXTS.footer.socials.facebook}
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-brand-outline-variant/40 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-white transition-all cursor-pointer"
                title={TEXTS.footer.socials.twitter}
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-brand-outline-variant/40 flex items-center justify-center hover:bg-brand-red hover:border-brand-red text-white transition-all cursor-pointer"
                title={TEXTS.footer.socials.instagram}
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap Empresa */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] uppercase font-extrabold text-white tracking-[0.25em]">
              {TEXTS.footer.sitemapCompany}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollToSection(e, 'about')}
                  className="text-xs text-brand-variant hover:text-brand-primary uppercase font-bold tracking-wider transition-colors"
                >
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, 'contact')}
                  className="text-xs text-brand-variant hover:text-brand-primary uppercase font-bold tracking-wider transition-colors"
                >
                  Trabaja con Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Sitemap Servicios */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-mono text-[10px] uppercase font-extrabold text-white tracking-[0.25em]">
              {TEXTS.footer.sitemapServices}
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, 'services')}
                  className="text-xs text-brand-variant hover:text-brand-primary uppercase font-bold tracking-wider transition-colors"
                >
                  Seguridad
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, 'services')}
                  className="text-xs text-brand-variant hover:text-brand-primary uppercase font-bold tracking-wider transition-colors"
                >
                  Primeros Auxilios
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollToSection(e, 'services')}
                  className="text-xs text-brand-variant hover:text-brand-primary uppercase font-bold tracking-wider transition-colors"
                >
                  Valet Parking
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Emergency */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] uppercase font-extrabold text-white tracking-[0.25em]">
                {TEXTS.footer.locationTitle}
              </h4>
              <div className="w-full h-32 overflow-hidden border border-brand-outline-variant/40 mt-3">
                <iframe
                  src="https://maps.google.com/maps?q=Calle%2024C%20No.%2080C-42%2C%20Bogot%C3%A1&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
                ></iframe>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-xs font-bold text-brand-primary uppercase tracking-wider">
                  {TEXTS.footer.locationCity}
                </p>
                <p className="text-[11px] text-brand-variant font-light leading-relaxed">
                  {TEXTS.footer.locationAddress}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 pt-2 border-t border-brand-outline-variant/20">
                <Mail className="h-4 w-4 text-brand-red" />
                <a href={`mailto:${TEXTS.footer.email}`} className="text-xs text-brand-variant hover:text-brand-primary transition-colors">
                  {TEXTS.footer.email}
                </a>
              </div>
            </div>

            {/* Emergency Hotline Container Info */}
            <div className="p-4 sm:p-5 border-l-2 border-brand-red bg-brand-container flex items-center gap-4">
              <PhoneCall className="h-5 w-5 text-brand-red shrink-0 animate-pulse" />
              <div>
                <p className="font-mono text-[8px] uppercase text-brand-variant/80 tracking-widest block leading-none">
                  {TEXTS.footer.emergencyTitle}
                </p>
                <p className="font-display font-black text-brand-primary text-base uppercase tracking-wider mt-1.5 leading-none">
                  {TEXTS.footer.emergencyPhone}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Attribution and Legal Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-brand-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="font-mono text-[9px] sm:text-[10px] text-brand-variant uppercase tracking-widest text-center sm:text-left font-medium">
            {TEXTS.footer.copyright}
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="font-mono text-[9px] sm:text-[10px] text-brand-variant uppercase hover:text-white tracking-widest transition-colors font-medium"
            >
              {TEXTS.footer.terms}
            </a>
            <a
              href="#"
              className="font-mono text-[9px] sm:text-[10px] text-brand-variant uppercase hover:text-white tracking-widest transition-colors font-medium"
            >
              {TEXTS.footer.privacy}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
