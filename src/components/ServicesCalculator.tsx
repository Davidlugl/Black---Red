import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutGrid, 
  ShieldAlert, 
  FileCheck, 
  ArrowRight, 
  Users, 
  Shield, 
  Sparkles,
  Award,
  BookOpen,
  Info,
  Sliders,
  CheckCircle2,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';

interface ServicesCalculatorProps {
  onPreFillRequest: (details: string, specialty: string) => void;
}

export default function ServicesCalculator({ onPreFillRequest }: ServicesCalculatorProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  


  // Maps icon names to actual Lucide Components
  const renderIcon = (name: string, classes: string) => {
    switch (name) {
      case 'LayoutGrid': return <LayoutGrid className={classes} />;
      case 'ShieldAlert': return <ShieldAlert className={classes} />;
      case 'FileCheck': return <FileCheck className={classes} />;
      default: return <ShieldAlert className={classes} />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden">
      {/* Background visual styling */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-outline-variant/60 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
        </div>

        {/* 3 Columns Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isFeatured = service.id === 'seguridad-elite';
            return (
              <div
                key={service.id}
                className={`relative group p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer border ${
                  isFeatured
                    ? 'bg-brand-highest border-brand-red shadow-2xl shadow-brand-red/5 ring-1 ring-brand-red/30'
                    : 'bg-brand-container hover:bg-brand-highest/80 border-brand-outline-variant/40 hover:border-brand-primary/50'
                }`}
                onClick={() => setSelectedService(service)}
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 bg-brand-red text-white py-1 px-4 font-mono text-[9px] uppercase tracking-widest font-extrabold">
                    Servicio Core
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon Area */}
                  <div className={`p-4 inline-block ${isFeatured ? 'bg-brand-red text-white' : 'bg-brand-low text-brand-primary'}`}>
                    {renderIcon(service.iconName, 'h-8 w-8')}
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-white group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider bg-brand-low/45 px-2 py-1 inline-block">
                      {service.tag}
                    </p>
                    <p className="text-xs sm:text-sm text-brand-variant leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Bullets List and Quote Trigger */}
                <div className="mt-8 pt-6 border-t border-brand-outline-variant/35 space-y-4">
                  <ul className="space-y-2.5">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-mono text-[10px] text-brand-onsurface/80 uppercase font-bold tracking-wide">
                        <span className={`w-1.5 h-1.5 ${isFeatured ? 'bg-white' : 'bg-brand-red'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className={`w-full py-3.5 px-4 font-sans text-xs uppercase font-extrabold tracking-widest text-center transition-all ${
                      isFeatured
                        ? 'bg-white text-brand-red hover:bg-brand-red hover:text-white'
                        : 'bg-brand-low hover:bg-brand-red hover:text-white text-brand-primary'
                    }`}
                  >
                    Solicitar Dossier
                  </button>
                </div>
              </div>
            );
          })}
        </div>



      </div>

      {/* Dynamic Modal / Dialog Detail View for Services Dossier */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-lowest/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-brand-container border border-brand-red/40 p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 flex items-center justify-center h-10 w-10 text-brand-variant hover:text-white hover:bg-brand-low transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-low text-brand-primary">
                    {renderIcon(selectedService.iconName, 'h-6 w-6')}
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-primary block">
                      FICHA COMPLETA OPERATIVA
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 font-sans">
                  <p className="text-xs sm:text-sm text-brand-variant leading-relaxed font-light">
                    {selectedService.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 my-4">
                  {selectedService.metrics.map((m, idx) => (
                    <div key={idx} className="bg-brand-lowest border border-brand-outline-variant/30 p-4">
                      <span className="text-[10px] font-mono uppercase text-brand-variant leading-none">{m.label}</span>
                      <span className="font-display font-black text-2xl text-white block mt-1">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Standards checklist */}
                <div className="space-y-3">
                  <h4 className="font-mono text-[10px] uppercase text-white/80 tracking-widest font-extrabold flex items-center gap-1.5 border-b border-brand-outline-variant/30 pb-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" />
                    Protocolo y Manuales Clave
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedService.capabilities.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-brand-variant leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-1.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub Features Details */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-[10px] uppercase text-white/80 tracking-widest font-extrabold flex items-center gap-1.5 border-b border-brand-outline-variant/30 pb-2">
                    <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                    Capacidades y Derivados
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[10px] font-mono text-brand-onsurface/90 font-bold uppercase tracking-wider">
                        <span className="w-1 h-1 bg-brand-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-outline-variant/40 flex gap-4">
                  <button
                    onClick={() => {
                      onPreFillRequest(
                        `Estimado equipo Black and Red, solicito dossier corporativo oficial y cotización preliminar para el servicio de: ${selectedService.title}. Estructuras y resguardo de interés.`,
                        selectedService.id === 'btl-logistica'
                          ? 'Montaje BTL'
                          : selectedService.id === 'seguridad-elite'
                          ? 'Protección VIP'
                          : 'Consultoría PMU'
                      );
                      setSelectedService(null);
                    }}
                    className="w-full bg-brand-red text-white py-4 font-sans text-xs uppercase font-extrabold tracking-widest hover:bg-white hover:text-brand-red transition-all"
                  >
                    Establecer Consultoría sobre este Servicio
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
