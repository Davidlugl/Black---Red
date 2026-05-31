import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ShieldCheck, Siren } from 'lucide-react';
import { HERO_BG_IMAGE } from '../data';

interface HeroProps {
  onExploreServices: () => void;
  onTalkToExpert: () => void;
}

export default function Hero({ onExploreServices, onTalkToExpert }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[95vh] md:h-screen flex items-center overflow-hidden pt-24">
      {/* Background with Ambient Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/50 z-10" />
        <img
          src={HERO_BG_IMAGE}
          alt="B&R Logistic Security"
          className="w-full h-full object-cover scale-105 animate-[pulse_14s_ease-in-out_infinite]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="w-10 h-0.5 bg-brand-red inline-block"></span>
              <span className="font-mono text-xs uppercase tracking-[0.45em] text-brand-primary font-bold">
                LÍDERES EN SEGURIDAD INTEGRAL Y LOGÍSTICA TÁCTICA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white uppercase tracking-tight"
            >
              ORQUESTAMOS <br className="hidden sm:inline" />
              <span className="text-brand-red italic font-extrabold relative inline-block">
                SEGURIDAD
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-brand-red/30"></span>
              </span>{' '}
              DE ALTO IMPACTO
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-brand-variant text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light"
            >
              Elevamos el estándar de protección y logística táctica para comitivas de gobierno, eventos corporativos de gran escala, espectáculos masivos y servicios VIP con precisión militar y tecnología integrada.
            </motion.p>

            {/* Core Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4"
            >
              <button
                onClick={onExploreServices}
                className="group relative bg-brand-red text-white py-5 px-10 font-sans text-xs uppercase font-extrabold tracking-widest hover:bg-white hover:text-brand-red active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-brand-red/15"
              >
                <span>Nuestros Servicios</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onTalkToExpert}
                className="group border border-brand-outline/35 text-white bg-transparent py-5 px-10 font-sans text-xs uppercase font-extrabold tracking-widest hover:border-white hover:bg-brand-highest/30 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageSquare className="h-4 w-4 text-brand-primary" />
                <span>Hablar con un Experto</span>
              </button>
            </motion.div>
          </div>

          {/* Right Status Badge Component - Interactive metrics dashboard widget */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-xs bg-brand-container/85 border-r-4 border-brand-red p-6 space-y-4 shadow-2xl backdrop-blur-sm self-start lg:self-end"
            >
              <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-3">
                <span className="font-mono text-[10px] uppercase text-brand-primary tracking-widest flex items-center gap-1.5">
                  <Siren className="h-3 w-3 text-brand-red animate-pulse" />
                  Estado del Despliegue
                </span>
                <span className="px-2 py-0.5 bg-brand-red/15 text-brand-primary text-[9px] font-mono font-bold tracking-wider rounded">
                  EN EJECUCIÓN
                </span>
              </div>

              <div>
                <p className="font-display font-black text-sm uppercase text-white tracking-wide">
                  GALA INTERNACIONAL
                </p>
                <p className="text-xs text-brand-variant mt-1.5 leading-relaxed font-light">
                  Logística integral de transporte blindado y resguardo de alta gama VIP activo desde las 08:00 COT.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-brand-primary font-mono text-[10px] tracking-wide">
                <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
                <span>99.98% de Eficacia Operativa</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
