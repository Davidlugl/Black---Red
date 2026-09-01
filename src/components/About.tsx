import { Award } from 'lucide-react';
import { ABOUT_COMMAND_IMAGE } from '../data';

export default function About() {

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

            {/* Misión, Visión y Valores */}
            <div className="space-y-6 pt-4">
              <div className="bg-brand-container border-l-4 border-brand-red p-6 hover:bg-brand-highest transition-colors duration-300">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2">Misión</h3>
                <p className="text-sm text-brand-variant font-light leading-relaxed">
                  Proveer soluciones logísticas, de seguridad integral y atención prehospitalaria de élite, garantizando la tranquilidad y el éxito de cada operación a través de un cuerpo táctico altamente capacitado y tecnología de vanguardia.
                </p>
              </div>

              <div className="bg-brand-container border-l-4 border-brand-primary p-6 hover:bg-brand-highest transition-colors duration-300">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2">Visión</h3>
                <p className="text-sm text-brand-variant font-light leading-relaxed">
                  Consolidarnos como el referente definitivo a nivel nacional en gestión táctica, mitigación de riesgos y despliegue logístico para eventos masivos y corporativos, elevando continuamente el estándar de excelencia en la industria.
                </p>
              </div>

              <div className="bg-brand-container border border-brand-outline-variant/30 p-6 hover:border-brand-red/50 transition-colors duration-300">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-red" />
                  Nuestros Valores
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Excelencia Operativa',
                    'Integridad y Confidencialidad',
                    'Innovación Táctica',
                    'Reacción Inmediata'
                  ].map((valor, idx) => (
                    <div key={idx} className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-brand-primary uppercase font-bold tracking-wide">
                      <span className="w-1.5 h-1.5 bg-brand-red shrink-0" />
                      <span>{valor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
