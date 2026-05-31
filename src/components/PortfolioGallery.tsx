import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Search,
  X,
  FileSpreadsheet
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';
import { ProjectCase } from '../types';

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<ProjectCase | null>(null);
  
  // Custom slide index for highlighted quote
  const [currentSlide, setCurrentSlide] = useState(0);

  // Categories extraction
  const categories = ['Todos', 'Corporativo', 'Logística', 'Entretenimiento', 'Monitoreo / VIP'];

  // Filtering Logic
  const filteredProjects = PORTFOLIO_DATA.filter((proj) => {
    const matchesFilter = activeFilter === 'Todos' || proj.type === activeFilter || (activeFilter === 'Monitoreo / VIP' && proj.type.includes('Monitoreo'));
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Simple slider navigation helper for highlighted success story quotes
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PORTFOLIO_DATA.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-lowest border-t border-brand-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="font-mono text-xs text-brand-primary uppercase tracking-[0.3em] font-bold block">
              Portafolio Operativo
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight leading-tight">
              Casos de Éxito & Auditoría
            </h2>
            <div className="w-16 h-1 bg-brand-red"></div>
          </div>
          
          {/* Dynamic Testimonial Slide Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrevSlide}
              className="w-12 h-12 flex items-center justify-center border border-brand-outline-variant/40 text-brand-variant hover:text-white hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer"
              title="Anterior Operación"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextSlide}
              className="w-12 h-12 flex items-center justify-center border border-brand-outline-variant/40 text-brand-variant hover:text-white hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer"
              title="Siguiente Operación"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Highlight Slider Banner */}
        <div className="mb-12 bg-brand-container/50 border border-brand-outline-variant/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-brand-primary font-bold uppercase tracking-wider bg-brand-red/15 py-1 px-2">
              AUDITADO EN OPERACIÓN // {PORTFOLIO_DATA[currentSlide].year}
            </span>
            <h3 className="font-display font-bold text-lg text-white uppercase mt-2">
              {PORTFOLIO_DATA[currentSlide].title}
            </h3>
            <p className="text-xs sm:text-sm text-brand-variant font-light italic max-w-2xl leading-relaxed">
              "La planeación de {PORTFOLIO_DATA[currentSlide].title} en {PORTFOLIO_DATA[currentSlide].location} arrojó un índice de efectividad de {PORTFOLIO_DATA[currentSlide].metrics[1].value} con la participación del equipo táctico de B&R."
            </p>
          </div>
          <button
            onClick={() => setSelectedProject(PORTFOLIO_DATA[currentSlide])}
            className="shrink-0 bg-brand-red hover:bg-white text-white hover:text-brand-red text-xs font-sans uppercase tracking-wider font-extrabold px-6 py-3.5 transition-colors"
          >
            Ver Reporte Operativo
          </button>
        </div>

        {/* Filter Tabs & Search Bar Row */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-10 border-b border-brand-outline-variant/30 pb-6">
          
          {/* Tabs */}
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`py-2 px-4.5 font-mono text-[10px] sm:text-xs font-bold uppercase transition-all tracking-wider ${
                  activeFilter === cat
                    ? 'bg-brand-red text-white'
                    : 'bg-brand-container text-brand-variant hover:text-white hover:bg-brand-highest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Functional Search Bar */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-variant" />
            <input
              type="text"
              placeholder="Buscar por localización, táctica..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-container border border-brand-outline-variant/50 focus:border-brand-red px-10 py-3 text-sm text-white placeholder-brand-variant/50 focus:outline-none"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-variant hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

        </div>

        {/* Portfolio layouts structured similarly to the reference grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
          
          {/* Main Large Left Item (E.g. Cumbre Iberoamericana) */}
          <div className="md:col-span-8 group relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[500px] border border-brand-outline-variant/30 flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                src={PORTFOLIO_DATA[0].image}
                alt={PORTFOLIO_DATA[0].title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-lowest via-brand-lowest/30 to-transparent z-10" />
            </div>

            <div className="relative z-20 p-8 sm:p-10 space-y-4">
              <span className="bg-brand-red text-white px-3 py-1 font-mono text-[9px] uppercase tracking-widest font-extrabold rounded-none">
                {PORTFOLIO_DATA[0].type}
              </span>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wide">
                {PORTFOLIO_DATA[0].title}
              </h4>
              <p className="text-xs sm:text-sm text-brand-variant max-w-xl font-light font-sans hidden sm:block">
                {PORTFOLIO_DATA[0].description}
              </p>
              
              <button
                onClick={() => setSelectedProject(PORTFOLIO_DATA[0])}
                className="inline-flex items-center gap-2 text-xs font-mono text-brand-primary uppercase hover:text-white font-extrabold tracking-widest pt-2 cursor-pointer group-hover:underline"
              >
                <Eye className="h-4 w-4 text-brand-red" />
                <span>Explorar Esquema Técnico</span>
              </button>
            </div>
          </div>

          {/* Right side items: stacked grid */}
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            
            {/* Top Right Item */}
            <div 
              onClick={() => setSelectedProject(PORTFOLIO_DATA[2])}
              className="group relative overflow-hidden bg-brand-container border border-brand-outline-variant/30 p-6 flex flex-col justify-between aspect-[16/9] md:aspect-auto cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={PORTFOLIO_DATA[2].image}
                  alt={PORTFOLIO_DATA[2].title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60 transition-all duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-lowest/90 z-10" />
              </div>

              <div className="relative z-20 flex justify-between items-start">
                <span className="bg-brand-lowest text-brand-primary px-2.5 py-0.5 border border-brand-outline-variant/30 font-mono text-[8px] uppercase tracking-widest font-extrabold">
                  {PORTFOLIO_DATA[2].type}
                </span>
                <span className="text-brand-variant font-mono text-xs">{PORTFOLIO_DATA[2].year}</span>
              </div>

              <div className="relative z-20 pt-8">
                <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-brand-primary transition-colors">
                  {PORTFOLIO_DATA[2].title}
                </h4>
                <p className="text-xs text-brand-variant mt-1.5 line-clamp-2 font-light">
                  {PORTFOLIO_DATA[2].description}
                </p>
              </div>
            </div>

            {/* Bottom Right Item (Featured with Border Red Accent) */}
            <div 
              onClick={() => setSelectedProject(PORTFOLIO_DATA[3])}
              className="group relative overflow-hidden bg-brand-container border-r-4 border-brand-red border-y border-l border-brand-outline-variant/30 p-6 flex flex-col justify-between aspect-[16/9] md:aspect-auto cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={PORTFOLIO_DATA[3].image}
                  alt={PORTFOLIO_DATA[3].title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60 transition-all duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-lowest/90 z-10" />
              </div>

              <div className="relative z-20 flex justify-between items-start">
                <span className="bg-brand-lowest text-brand-primary px-2.5 py-0.5 border border-brand-outline-variant/30 font-mono text-[8px] uppercase tracking-widest font-extrabold">
                  {PORTFOLIO_DATA[3].type}
                </span>
                <span className="text-brand-variant font-mono text-xs">{PORTFOLIO_DATA[3].year}</span>
              </div>

              <div className="relative z-20 pt-8">
                <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-brand-primary transition-colors">
                  {PORTFOLIO_DATA[3].title}
                </h4>
                <p className="text-xs text-brand-variant mt-1.5 line-clamp-2 font-light">
                  {PORTFOLIO_DATA[3].description}
                </p>
              </div>
            </div>

          </div>

          {/* Full-width vehicular fleet or custom bottom case */}
          <div className="md:col-span-12 group relative h-64 sm:h-80 overflow-hidden border border-brand-outline-variant/30 flex items-center">
            <div className="absolute inset-0 z-0">
              <img
                src={PORTFOLIO_DATA[1].image}
                alt={PORTFOLIO_DATA[1].title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-1000 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-lowest/90 via-brand-lowest/70 to-transparent z-10" />
            </div>

            <div className="relative z-20 p-8 sm:p-12 space-y-4 max-w-2xl">
              <span className="bg-brand-red/90 text-white px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest font-extrabold rounded-none">
                {PORTFOLIO_DATA[1].type}
              </span>
              <h4 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                {PORTFOLIO_DATA[1].title}
              </h4>
              <p className="text-xs sm:text-sm text-brand-variant font-light leading-relaxed hidden sm:block">
                {PORTFOLIO_DATA[1].description}
              </p>
              
              <button
                onClick={() => setSelectedProject(PORTFOLIO_DATA[1])}
                className="inline-flex items-center gap-2 text-xs font-mono text-brand-primary uppercase hover:text-white font-extrabold tracking-widest pt-1 cursor-pointer group-hover:underline"
              >
                <Eye className="h-4 w-4 text-brand-red" />
                <span>Auditar Despliegue de Rutas</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Dynamic Detailed Case Report Dialog / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
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
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 flex items-center justify-center h-10 w-10 text-brand-variant hover:text-white hover:bg-brand-low transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-start justify-between border-b border-brand-outline-variant/30 pb-4 pr-8">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-primary block font-bold">
                      INFORME DE AUDITORÍA TÁCTICA // REGISTRO {selectedProject.id.toUpperCase()}
                    </span>
                    <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-wide text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Cover representation */}
                <div className="aspect-[16/9] w-full overflow-hidden border border-brand-outline-variant/30 group">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-brand-variant">
                    <MapPin className="h-4 w-4 text-brand-red shrink-0" />
                    <span>Lugar: <strong>{selectedProject.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-brand-variant">
                    <Calendar className="h-4 w-4 text-brand-red shrink-0" />
                    <span>Año Fiscal: <strong>{selectedProject.year}</strong></span>
                  </div>
                </div>

                <div className="space-y-2 font-sans">
                  <p className="text-xs sm:text-sm text-brand-variant leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Audit numbers */}
                <div className="grid grid-cols-2 gap-4 my-2">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="bg-brand-lowest border border-brand-outline-variant/30 p-4 flex flex-col justify-center">
                      <span className="text-[10px] font-mono uppercase text-brand-variant leading-none">{m.label}</span>
                      <span className="font-display font-black text-lg sm:text-xl text-white block mt-1.5">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Security Plan layout */}
                <div className="space-y-3 bg-brand-lowest p-5 border-l-2 border-brand-red">
                  <h4 className="font-mono text-[10px] uppercase text-white/80 tracking-widest font-extrabold flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand-red animate-pulse" />
                    Disposición Operativa Blindada (Auditada)
                  </h4>
                  <p className="text-xs text-brand-variant leading-relaxed font-light font-mono">
                    {selectedProject.securityLayout}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-outline-variant/40 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="bg-brand-red hover:bg-white text-white hover:text-brand-red py-3 px-8 font-mono text-xs uppercase font-extrabold tracking-widest transition-colors cursor-pointer"
                  >
                    Cerrar Auditoría
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
