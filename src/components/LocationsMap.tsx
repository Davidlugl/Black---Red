import { TEXTS } from '../constants';

export default function LocationsMap() {
  return (
    <section id="locations" className="py-24 md:py-32 bg-brand-lowest border-t border-brand-outline-variant/30 relative">
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-brand-outline-variant/10 via-brand-outline-variant/20 to-transparent hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs text-brand-primary uppercase font-bold tracking-[0.3em] block">
              COBERTURA DE SERVICIO
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
              Presencia en Bares y Gastrobares
            </h2>
            <div className="w-16 h-1 bg-brand-red"></div>
            <p className="text-brand-variant text-sm font-light">
              Encuentre a Black & Red brindando seguridad y logística de primer nivel en los mejores establecimientos y gastrobares de la ciudad. 
            </p>
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full h-[500px] border border-brand-outline-variant/40 relative group overflow-hidden bg-brand-container">
          <div className="absolute inset-0 bg-brand-red/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-20"></div>
          {/* Wrapper to hide the top header of Google My Maps (which shows the user's name) */}
          <div className="absolute -top-[70px] left-0 w-full h-[calc(100%+70px)]">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1ukKLliaQTLZzeboKyS4QpwIOG6dXr_g"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover opacity-80 group-hover:opacity-100 relative z-10"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
