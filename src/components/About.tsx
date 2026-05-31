import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, Award, History } from 'lucide-react';
import { ABOUT_COMMAND_IMAGE, MILESTONES } from '../data';

export default function About() {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState(MILESTONES.length - 1);

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-lowest relative overflow-hidden">
      {/* Structural decoration lines */}
      <div className="absolute top-0 right-10 w-px h-64 bg-gradient-to-b from-brand-red/10 to-transparent"></div>
      <div className="absolute -bottom-10 left-10 w-96 h-96 border-l-2 border-b-2 border-brand-outline-variant/10 rounded-bl-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Block: Image with Floating Banner Badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-brand-red/20 -z-10"></div>
            
            <div className="relative overflow-hidden group border border-brand-outline-variant/30">
              <img
                src={ABOUT_COMMAND_IMAGE}
                alt="B&R Command Control Center"
                className="w-full aspect-[4/5] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Futuristic overlay scope lines */}
              <div className="absolute inset-0 border-[16px] border-brand-lowest/20 pointer-events-none" />
              <div className="absolute top-4 right-4 bg-brand-lowest/80 backdrop-blur-sm p-2 border border-brand-outline-variant/30 font-mono text-[10px] text-brand-primary">
                FEED-SEC-04 // CAM_ACTIVE
              </div>
            </div>

            {/* Massive Años de Excelencia Floating Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-brand-red p-8 sm:p-10 shadow-2xl border border-brand-primary/20 max-w-[240px] sm:max-w-[280px]">
              <div className="font-display font-black text-6xl text-white leading-none tracking-tight flex items-start">
                <span>15</span>
                <span className="text-xl font-extrabold text-brand-primary ml-1">+</span>
              </div>
              <p className="font-mono text-[10px] uppercase font-bold text-white tracking-[0.2em] mt-3">
                AÑOS DE EXCELENCIA TÁCTICA
              </p>
              <p className="text-xs text-brand-primary/80 mt-1 font-light leading-relaxed">
                Garantizando el resguardo operacional del entretenimiento nacional.
              </p>
            </div>
          </div>

          {/* Right Block: Content & Multi-Tier Metrics */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="font-mono text-xs text-brand-primary uppercase font-bold tracking-[0.3em] block">
                Sobre Nosotros
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight leading-tight">
                Infraestructura Crítica Para Eventos Inolvidables
              </h2>
            </div>

            <p className="font-sans text-brand-variant text-base sm:text-lg leading-relaxed font-light">
              No somos una agencia de seguridad convencional; somos el pilar logístico y de asalto operativo que sostiene las experiencias más exigentes del país. Nuestra metodología integra inteligencia preventiva, tecnología de monitoreo encriptado y un cuerpo táctico de élite.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 bg-brand-container border-b-2 border-brand-outline-variant/40 hover:border-brand-red transition-all duration-300 group">
                <span className="font-display font-black text-[32px] sm:text-4xl text-brand-primary block group-hover:text-white transition-colors duration-300">
                  2.5k
                </span>
                <span className="font-mono text-[10px] uppercase text-white font-extrabold tracking-widest mt-2 block">
                  Operaciones Exitosas
                </span>
                <p className="text-xs text-brand-variant mt-1.5 font-light">
                  Servicios de despliegue vip y control de aforo masivo sin incidentes registrados.
                </p>
              </div>

              <div className="p-6 bg-brand-container border-b-2 border-brand-outline-variant/40 hover:border-brand-red transition-all duration-300 group">
                <span className="font-display font-black text-[32px] sm:text-4xl text-brand-primary block group-hover:text-white transition-colors duration-300">
                  100%
                </span>
                <span className="font-mono text-[10px] uppercase text-white font-extrabold tracking-widest mt-2 block">
                  Confiabilidad Legal
                </span>
                <p className="text-xs text-brand-variant mt-1.5 font-light">
                  Cumplimiento absoluto de las normativas de PMU municipales y seguros internacionales.
                </p>
              </div>
            </div>

            {/* Milestone Interactive Slider with Scrubber */}
            <div className="bg-brand-container/50 border border-brand-outline-variant/30 p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-brand-outline-variant/20 pb-3">
                <span className="font-mono text-[10px] uppercase text-brand-primary tracking-widest flex items-center gap-1.5">
                  <History className="h-3.5 w-3.5 text-brand-red animate-pulse" />
                  Nuestra Trayectoria
                </span>
                <span className="text-xs text-brand-variant">Selecciona un hito temporal</span>
              </div>

              {/* Scrubber Navigation Buttons */}
              <div className="relative flex justify-between items-center gap-2 max-w-md mx-auto pt-2">
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-brand-outline-variant/30 -translate-y-1/2 -z-10"></div>
                {MILESTONES.map((item, idx) => (
                  <button
                    key={item.year}
                    onClick={() => setSelectedMilestoneIndex(idx)}
                    className={`relative z-10 w-11 h-11 rounded-none border font-mono text-xs font-bold flex items-center justify-center transition-all ${
                      selectedMilestoneIndex === idx
                        ? 'bg-brand-red text-white border-brand-red scale-110 shadow-lg shadow-brand-red/10'
                        : 'bg-brand-low text-brand-variant border-brand-outline-variant/50 hover:border-brand-primary'
                    }`}
                  >
                    {item.year}
                  </button>
                ))}
              </div>

              {/* Hito Info Animada */}
              <div className="min-h-[110px] bg-brand-low/50 p-4 border border-brand-outline-variant/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMilestoneIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                        {MILESTONES[selectedMilestoneIndex].title}
                      </h4>
                      <span className="px-2.5 py-0.5 bg-brand-container border border-brand-outline-variant/40 rounded-sm font-mono text-[10px] text-brand-primary font-bold self-start">
                        {MILESTONES[selectedMilestoneIndex].metric}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-variant leading-relaxed font-light">
                      {MILESTONES[selectedMilestoneIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
