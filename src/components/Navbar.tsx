import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ShieldAlert, PhoneCall } from 'lucide-react';
import { LOGO_IMAGE } from '../data';

interface NavbarProps {
  onQuoteTrigger: () => void;
  onRequestPortalTrigger: () => void;
}

export default function Navbar({ onQuoteTrigger, onRequestPortalTrigger }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['hero', 'about', 'services', 'gallery', 'contact', 'client-portal'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetPos = el.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-brand-lowest/90 bg-opacity-95 backdrop-blur-md h-20 border-brand-outline-variant/50 shadow-lg'
            : 'bg-transparent h-24 border-brand-outline-variant/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="flex items-center gap-3.5 group"
          >
            <div className="relative">
              <img
                src={LOGO_IMAGE}
                alt="Black and Red Logo"
                className="h-11 w-auto brightness-110 contrast-125 transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -inset-1.5 bg-brand-red/10 rounded-full filter blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex flex-col select-none">
              <span className="font-display font-black text-lg md:text-xl text-white uppercase tracking-tight leading-none group-hover:text-brand-primary transition-colors">
                BLACK & RED
              </span>
              <span className="font-mono text-[9px] text-brand-primary tracking-[0.25em] uppercase font-bold leading-none mt-1">
                LOGISTIC GROUP
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              onClick={(e) => handleLinkClick(e, 'about')}
              href="#about"
              className={`font-sans text-xs uppercase tracking-widest font-bold transition-all hover:text-white ${
                activeSection === 'about' ? 'text-brand-primary border-b-2 border-brand-red pb-1' : 'text-brand-variant/80'
              }`}
            >
              Empresa
            </a>
            <a
              onClick={(e) => handleLinkClick(e, 'services')}
              href="#services"
              className={`font-sans text-xs uppercase tracking-widest font-bold transition-all hover:text-white ${
                activeSection === 'services' ? 'text-brand-primary border-b-2 border-brand-red pb-1' : 'text-brand-variant/80'
              }`}
            >
              Servicios
            </a>
            <a
              onClick={(e) => handleLinkClick(e, 'gallery')}
              href="#gallery"
              className={`font-sans text-xs uppercase tracking-widest font-bold transition-all hover:text-white ${
                activeSection === 'gallery' ? 'text-brand-primary border-b-2 border-brand-red pb-1' : 'text-brand-variant/80'
              }`}
            >
              Casos de Éxito
            </a>
            <a
              onClick={(e) => handleLinkClick(e, 'client-portal')}
              href="#client-portal"
              className={`font-sans text-xs uppercase tracking-widest font-bold transition-all hover:text-white ${
                activeSection === 'client-portal' ? 'text-brand-primary border-b-2 border-brand-red pb-1' : 'text-brand-variant/80'
              }`}
            >
              Mando Táctico
            </a>
            <a
              onClick={(e) => handleLinkClick(e, 'contact')}
              href="#contact"
              className={`font-sans text-xs uppercase tracking-widest font-bold transition-all hover:text-white ${
                activeSection === 'contact' ? 'text-brand-primary border-b-2 border-brand-red pb-1' : 'text-brand-variant/80'
              }`}
            >
              Contacto
            </a>

            <div className="h-6 w-px bg-brand-outline-variant/40"></div>

            <button
              onClick={onQuoteTrigger}
              className="relative group overflow-hidden bg-brand-red text-white font-sans text-xs uppercase font-extrabold px-6 py-3 tracking-widest transition-all hover:bg-white hover:text-brand-red active:scale-95 shadow-md shadow-brand-red/10"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Cotizar <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </nav>

          {/* Emergency Badge & Menu Trigger (Mobile) */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="tel:018000"
              className="flex items-center justify-center h-10 w-10 bg-brand-container border border-brand-outline-variant/30 text-brand-red hover:bg-brand-red hover:text-white transition-colors"
              title="Línea de Emergencia 24/7"
            >
              <PhoneCall className="h-4 w-4 animate-pulse" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center h-10 w-10 bg-brand-container border border-brand-outline-variant/30 text-white hover:text-brand-primary active:scale-95 transition-all"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-24 z-30 bg-brand-lowest border-b border-brand-outline-variant p-6 flex flex-col gap-6 md:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              <a
                onClick={(e) => handleLinkClick(e, 'about')}
                href="#about"
                className={`text-sm uppercase tracking-wider font-bold py-2 border-b border-brand-outline-variant/20 flex justify-between items-center ${
                  activeSection === 'about' ? 'text-brand-primary' : 'text-brand-onsurface/80'
                }`}
              >
                <span>Empresa</span>
                <span className="text-xs text-brand-outline">SOBRE NOSOTROS</span>
              </a>
              <a
                onClick={(e) => handleLinkClick(e, 'services')}
                href="#services"
                className={`text-sm uppercase tracking-wider font-bold py-2 border-b border-brand-outline-variant/20 flex justify-between items-center ${
                  activeSection === 'services' ? 'text-brand-primary' : 'text-brand-onsurface/80'
                }`}
              >
                <span>Servicios</span>
                <span className="text-xs text-brand-outline">NUESTROS SERVICIOS</span>
              </a>
              <a
                onClick={(e) => handleLinkClick(e, 'gallery')}
                href="#gallery"
                className={`text-sm uppercase tracking-wider font-bold py-2 border-b border-brand-outline-variant/20 flex justify-between items-center ${
                  activeSection === 'gallery' ? 'text-brand-primary' : 'text-brand-onsurface/80'
                }`}
              >
                <span>Casos de Éxito</span>
                <span className="text-xs text-brand-outline">CASOS OPERATIVOS</span>
              </a>
              <a
                onClick={(e) => handleLinkClick(e, 'client-portal')}
                href="#client-portal"
                className={`text-sm uppercase tracking-wider font-bold py-2 border-b border-brand-outline-variant/20 flex justify-between items-center ${
                  activeSection === 'client-portal' ? 'text-brand-primary' : 'text-brand-onsurface/80'
                }`}
              >
                <span>Mando Táctico</span>
                <span className="text-xs text-brand-outline">PORTAL DE SOLICITUDES</span>
              </a>
              <a
                onClick={(e) => handleLinkClick(e, 'contact')}
                href="#contact"
                className={`text-sm uppercase tracking-wider font-bold py-2 border-b border-brand-outline-variant/20 flex justify-between items-center ${
                  activeSection === 'contact' ? 'text-brand-primary' : 'text-brand-onsurface/80'
                }`}
              >
                <span>Contacto</span>
                <span className="text-xs text-brand-outline">CONSULTAS</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <button
                onClick={() => {
                  onQuoteTrigger();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-brand-red text-white py-4 px-4 font-sans text-xs uppercase font-extrabold tracking-widest text-center"
              >
                COTIZAR AHORA
              </button>
              <button
                onClick={() => {
                  onRequestPortalTrigger();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full border border-brand-outline/40 text-brand-primary hover:border-white py-4 px-4 font-sans text-xs uppercase font-extrabold tracking-widest text-center"
              >
                MANDO MÓVIL
              </button>
            </div>

            <div className="flex justify-between items-center bg-brand-container p-4 border-l-2 border-brand-red mt-2">
              <div className="flex items-center gap-1.5 text-brand-primary text-xs font-mono">
                <ShieldAlert className="h-3.5 w-3.5 text-brand-red animate-pulse" />
                <span>ALERTA DE DESPLIEGUE</span>
              </div>
              <span className="text-xs text-white font-bold leading-none">01-800-RED-LOGIC</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
