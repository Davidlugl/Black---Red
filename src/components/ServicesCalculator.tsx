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
  
  // Interactive Calculator State
  const [eventType, setEventType] = useState<'corporativo' | 'masivo' | 'vip'>('corporativo');
  const [attendance, setAttendance] = useState<number>(3500);
  const [securityTier, setSecurityTier] = useState<'standard' | 'high' | 'critical'>('high');

  // Calculation Logic
  const calculateRequirements = () => {
    let staffingFactor = 0.01; // 1 agent per 100 people
    let riskMultiplier = 1.0;
    
    if (securityTier === 'high') {
      staffingFactor = 0.015; // 1.5 agent per 100
      riskMultiplier = 1.3;
    } else if (securityTier === 'critical') {
      staffingFactor = 0.025; // 2.5 agents per 100
      riskMultiplier = 1.8;
    }

    if (eventType === 'masivo') {
      riskMultiplier += 0.4;
    } else if (eventType === 'vip') {
      staffingFactor += 0.01;
      riskMultiplier += 0.8;
    }

    const calculatedAgents = Math.max(2, Math.round(attendance * staffingFactor));
    const commandUnits = Math.max(1, Math.ceil(calculatedAgents / 15));
    const armoredSUVs = eventType === 'vip' ? Math.max(2, Math.ceil(attendance / 200)) : (securityTier === 'critical' ? 2 : 0);
    const pmuRequired = attendance >= 1000 || eventType === 'masivo';
    
    // Risk Score (1-100)
    const riskScore = Math.min(100, Math.round((attendance / 800) * riskMultiplier + 15));

    // Recommend Specialty
    let recommendedSpecialty = 'Protección VIP';
    if (eventType === 'masivo') recommendedSpecialty = 'Logística Masiva';
    if (eventType === 'corporativo' && attendance < 2000) recommendedSpecialty = 'Eventos Corporativos';
    if (eventType === 'corporativo' && attendance >= 2000) recommendedSpecialty = 'Montaje BTL';

    return {
      agents: calculatedAgents,
      commandUnits,
      armoredSUVs,
      pmuRequired,
      riskScore,
      recommendedSpecialty
    };
  };

  const results = calculateRequirements();

  // Handle Transfer details to Parent form callback
  const handleTransferToForm = () => {
    const detailsString = `[LOGÍSTICA PRE-EVALUADA] Evento: ${
      eventType === 'corporativo' ? 'Corporativo / Gala' : eventType === 'masivo' ? 'Concierto o Masivo' : 'Esquema de Protección VIP'
    }. Aforo: ${attendance.toLocaleString()} personas. Nivel de Riesgo: ${
      securityTier === 'standard' ? 'Estándar' : securityTier === 'high' ? 'Alto Impacto' : 'Extremo / Crítico'
    }. Requerimientos estimados automáticamente: ${results.agents} agentes tácticos, ${results.commandUnits} centros de mando móviles, ${
      results.armoredSUVs ? `${results.armoredSUVs} SUVs blindadas, ` : ''
    }PMU obligatorio: ${results.pmuRequired ? 'SÍ' : 'NO'}. Índice estimado de riesgo: ${results.riskScore}%. Favor estructurar propuesta física final.`;
    
    onPreFillRequest(detailsString, results.recommendedSpecialty);
  };

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
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-xs text-brand-primary uppercase tracking-[0.3em] block"
          >
            SERVICIOS DE CLASE MUNDIAL
          </motion.span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto"></div>
          <p className="text-brand-variant text-base sm:text-lg font-light leading-relaxed">
            Soluciones integrales de ingeniería, resguardo y mitigación de amenazas diseñadas para blindar la experiencia del espectador y corporativos.
          </p>
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

        {/* Dynamic Logistics Estimations Calculator Widget */}
        <div className="mt-16 sm:mt-24 bg-brand-container border border-brand-outline-variant/35 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-brand-outline-variant/30 pb-6">
            <div>
              <span className="font-mono text-xs text-brand-primary uppercase font-bold tracking-[0.25em] flex items-center gap-2">
                <Sliders className="h-4 w-4 text-brand-red" />
                SIMULADOR OPERATIVO
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase text-white mt-2">
                Pre-Evalúa tus Requerimientos en Segundos
              </h3>
            </div>
            <p className="text-xs text-brand-variant max-w-sm font-light">
              Calcula el personal mínimo requerido y el coeficiente de riesgo estandarizado para tu cobertura antes de la llamada de consultoría.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            {/* Left Inputs Panel */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Event Type selection */}
              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase text-white/70 tracking-widest font-extrabold block">
                  1. Naturaleza del Escenario
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setEventType('corporativo')}
                    className={`py-3.5 px-2 text-center text-[10px] sm:text-xs font-bold uppercase transition-all border ${
                      eventType === 'corporativo'
                        ? 'bg-brand-red text-white border-brand-red'
                        : 'bg-brand-low text-brand-variant border-brand-outline-variant/35 hover:border-brand-primary'
                    }`}
                  >
                    CORPORATIVO / GALA
                  </button>
                  <button
                    onClick={() => setEventType('masivo')}
                    className={`py-3.5 px-2 text-center text-[10px] sm:text-xs font-bold uppercase transition-all border ${
                      eventType === 'masivo'
                        ? 'bg-brand-red text-white border-brand-red'
                        : 'bg-brand-low text-brand-variant border-brand-outline-variant/35 hover:border-brand-primary'
                    }`}
                  >
                    CONCIERTO / MASIVO
                  </button>
                  <button
                    onClick={() => setEventType('vip')}
                    className={`py-3.5 px-2 text-center text-[10px] sm:text-xs font-bold uppercase transition-all border ${
                      eventType === 'vip'
                        ? 'bg-brand-red text-white border-brand-red'
                        : 'bg-brand-low text-brand-variant border-brand-outline-variant/35 hover:border-brand-primary'
                    }`}
                  >
                    RESGUARDO VIP
                  </button>
                </div>
              </div>

              {/* Attendance slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono font-bold uppercase text-white/70">
                  <span>2. Aforo Estimado</span>
                  <span className="text-brand-primary text-sm px-2.5 py-0.5 bg-brand-low border border-brand-outline-variant/30">
                    {attendance.toLocaleString()} Asistentes
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="50000"
                  step="100"
                  value={attendance}
                  onChange={(e) => setAttendance(parseInt(e.target.value))}
                  className="w-full h-1 bg-brand-outline-variant rounded-lg appearance-none cursor-pointer accent-brand-red"
                />
                <div className="flex justify-between font-mono text-[9px] text-brand-variant">
                  <span>100 Personas</span>
                  <span>15k</span>
                  <span>30k</span>
                  <span>50k PAX</span>
                </div>
              </div>

              {/* Security Level selection */}
              <div className="space-y-3">
                <label className="font-mono text-[10px] uppercase text-white/70 tracking-widest font-extrabold block">
                  3. Nivel de Protección Demandada
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { key: 'standard', name: 'Estándar', r: 'Bajo Perfil' },
                    { key: 'high', name: 'Alto Impacto', r: 'Doble Anillo' },
                    { key: 'critical', name: 'Extremo / Crítico', r: 'Táctico Militar' }
                  ].map((x) => (
                    <button
                      key={x.key}
                      onClick={() => setSecurityTier(x.key as any)}
                      className={`p-3 text-center transition-all border flex flex-col items-center justify-center ${
                        securityTier === x.key
                          ? 'bg-brand-lowest text-white border-brand-red ring-1 ring-brand-red/30'
                          : 'bg-brand-low text-brand-variant border-brand-outline-variant/25 hover:border-brand-primary'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase tracking-wide">{x.name}</span>
                      <span className="text-[8px] font-mono mt-1 opacity-75">{x.r}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Results Dashboard Display */}
            <div className="lg:col-span-6 bg-brand-low border border-brand-outline-variant/40 p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-brand-outline-variant/30 pb-3">
                  <span className="font-mono text-[10px] uppercase text-brand-primary font-bold tracking-wider">
                    EVALUACIÓN AUTOMÁTICA DE COMPLEJIDAD
                  </span>
                  <span className="text-xs font-mono text-brand-variant">PRE-PROPUESTA TÁCTICA</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-container p-4 border-l-2 border-brand-red">
                    <span className="text-[10px] font-mono uppercase text-brand-variant">Agentes Tácticos Mínimos</span>
                    <span className="font-display font-black text-3xl text-white block mt-1">{results.agents} Pax</span>
                  </div>
                  <div className="bg-brand-container p-4 border-l-2 border-brand-red">
                    <span className="text-[10px] font-mono uppercase text-brand-variant">Unidades de Comando / Coordinación</span>
                    <span className="font-display font-black text-3xl text-white block mt-1">{results.commandUnits} Uds</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs text-brand-variant">
                    <span>Requisito Obligatorio PMU:</span>
                    <span className={`font-mono font-bold uppercase px-2 py-0.5 text-[10px] ${results.pmuRequired ? 'bg-brand-red/15 text-brand-primary' : 'bg-brand-container text-brand-variant'}`}>
                      {results.pmuRequired ? 'SÍ (REQUERIDO)' : 'NO (OPCIONAL)'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-brand-variant">
                    <span>Transporte Vehicular Blindado:</span>
                    <span className="font-mono text-white text-[11px] font-bold">
                      {results.armoredSUVs > 0 ? `${results.armoredSUVs} SUVs Escolta N-III` : 'Ninguno'}
                    </span>
                  </div>

                  {/* Coeficiente rago riesgo progress bar */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                      <span className="text-brand-variant">Índice de Riesgo Estándar</span>
                      <span className={`font-bold ${results.riskScore > 60 ? 'text-brand-red' : results.riskScore > 30 ? 'text-amber-500' : 'text-green-500'}`}>
                        {results.riskScore}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-brand-container">
                      <div
                        className={`h-full transition-all duration-500 ${
                          results.riskScore > 60 ? 'bg-brand-red' : results.riskScore > 30 ? 'bg-amber-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${results.riskScore}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 sm:pt-4 border-t border-brand-outline-variant/30 mt-4">
                <button
                  onClick={handleTransferToForm}
                  className="w-full bg-brand-red hover:bg-white text-white hover:text-brand-red py-4 font-sans text-xs uppercase font-extrabold tracking-widest text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-brand-red/10"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Transferir Plan a Formulario</span>
                </button>
              </div>
            </div>
          </div>
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
