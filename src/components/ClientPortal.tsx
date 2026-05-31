import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Trash2, 
  RefreshCw, 
  Layers, 
  FileText,
  AlertTriangle,
  Flame,
  PlusSquare,
  HelpCircle
} from 'lucide-react';
import { ContactLead } from '../types';
import { PRE_APPROVED_PLANS } from '../data';

interface ClientPortalProps {
  leads: ContactLead[];
  onDeleteLead: (id: string) => void;
  onUpdateLeadStatus: (id: string) => void;
  onLoadPredefinedLead: (type: 'VIP' | 'TARIMA' | 'PMU') => void;
}

export default function ClientPortal({ leads, onDeleteLead, onUpdateLeadStatus, onLoadPredefinedLead }: ClientPortalProps) {
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(leads[0]?.id || null);

  const activeLead = leads.find(l => l.id === selectedLeadId) || leads[0];

  // Colors for statuses
  const getStatusStyle = (status: ContactLead['status']) => {
    switch (status) {
      case 'Revisión Pendiente':
        return 'bg-amber-950/40 text-amber-400 border-amber-500/50';
      case 'En Viabilidad':
        return 'bg-purple-950/40 text-purple-400 border-purple-500/50';
      case 'Asignado':
        return 'bg-blue-950/40 text-blue-400 border-blue-500/50';
      case 'Aprobado':
        return 'bg-green-950/40 text-green-400 border-green-500/50';
      default:
        return 'bg-stone-900 text-stone-400 border-stone-500/30';
    }
  };

  return (
    <section id="client-portal" className="py-24 md:py-32 bg-brand-lowest border-t border-brand-outline-variant/30 relative">
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-brand-outline-variant/10 via-brand-outline-variant/20 to-transparent hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs text-brand-primary uppercase font-bold tracking-[0.3em] block">
              PORTAL DE PROPUESTAS ACTIVO
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase text-white tracking-tight">
              Mando Táctico y Gestión
            </h2>
            <div className="w-16 h-1 bg-brand-red"></div>
            <p className="text-brand-variant text-sm font-light">
              Monitoree o simule en tiempo real el planeamiento operativo de consultorías registradas. Puede agregar plantillas de prueba rápida para verificar el flujo de trabajo regulatorio de Black and Red.
            </p>
          </div>

          {/* Quick template triggers */}
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onLoadPredefinedLead('VIP')}
              className="flex items-center gap-1.5 bg-brand-container hover:bg-brand-highest border border-brand-outline-variant/40 text-[10px] font-mono font-bold uppercase text-brand-primary py-2.5 px-4 transition-all"
            >
              <PlusSquare className="h-3.5 w-3.5 text-brand-red" />
              <span>Plantilla VIP</span>
            </button>
            <button
              onClick={() => onLoadPredefinedLead('TARIMA')}
              className="flex items-center gap-1.5 bg-brand-container hover:bg-brand-highest border border-brand-outline-variant/40 text-[10px] font-mono font-bold uppercase text-brand-primary py-2.5 px-4 transition-all"
            >
              <PlusSquare className="h-3.5 w-3.5 text-brand-red" />
              <span>Plantilla Tarima BTL</span>
            </button>
            <button
              onClick={() => onLoadPredefinedLead('PMU')}
              className="flex items-center gap-1.5 bg-brand-container hover:bg-brand-highest border border-brand-outline-variant/40 text-[10px] font-mono font-bold uppercase text-brand-primary py-2.5 px-4 transition-all"
            >
              <PlusSquare className="h-3.5 w-3.5 text-brand-red" />
              <span>Plantilla PMU Masivo</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid Container */}
        {leads.length === 0 ? (
          <div className="text-center py-16 bg-brand-container border border-brand-outline-variant/30 space-y-4 max-w-md mx-auto">
            <HelpCircle className="h-10 w-10 text-brand-variant mx-auto animate-bounce" />
            <p className="font-display font-bold text-sm text-white uppercase tracking-wider">
              No se han encontrado registros
            </p>
            <p className="text-xs text-brand-variant font-light max-w-xs mx-auto">
              Utilice el formulario de consultorías superior o haga clic en los botones de plantilla rápida para inicializar solicitudes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Requests Queue List */}
            <div className="lg:col-span-7 space-y-4 max-h-[600px] overflow-y-auto pr-2">
              <div className="text-[10px] font-mono uppercase text-brand-primary tracking-widest font-extrabold pb-2 border-b border-brand-outline-variant/20">
                Cola de Solicitudes Registradas ({leads.length})
              </div>

              {leads.map((lead) => {
                const isSelected = activeLead?.id === lead.id;
                return (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                    className={`p-5 transition-all duration-300 border cursor-pointer select-none relative ${
                      isSelected
                        ? 'bg-brand-container border-brand-red shadow-lg'
                        : 'bg-brand-container/40 border-brand-outline-variant/20 hover:border-brand-primary/40 hover:bg-brand-container/70'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red"></div>
                    )}

                    <div className="flex justify-between items-start gap-4">
                      <div>
                        {/* Radical ID Code */}
                        <span className="font-mono text-[9px] text-brand-primary font-bold uppercase tracking-wider block bg-brand-lowest py-0.5 px-1.5 border border-brand-outline-variant/30 inline-block mb-2">
                          ID: BRL-{lead.id.slice(-4).toUpperCase()}
                        </span>
                        
                        <h4 className="font-display font-bold text-base text-white uppercase tracking-wide">
                          {lead.name}
                        </h4>
                        
                        <span className="text-[10px] text-brand-variant font-mono font-bold block mt-1">
                          ESPECIALIDAD: {lead.specialty.toUpperCase()}
                        </span>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className={`px-2 py-0.5 border text-[9px] font-mono uppercase font-bold tracking-wider rounded-none ${getStatusStyle(lead.status)}`}>
                          {lead.status}
                        </span>
                        <span className="text-[9px] text-brand-outline font-mono">
                          {new Date(lead.timestamp).toLocaleDateString('es-ES')}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-brand-variant mt-3 font-light line-clamp-2 leading-relaxed">
                      {lead.requirements}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Detailed Tactical Diagnostics for Selected Item */}
            <div className="lg:col-span-5 bg-brand-container border border-brand-outline-variant/40 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-brand-outline-variant/35 pb-3">
                <span className="font-mono text-[10px] uppercase text-brand-primary font-bold tracking-widest flex items-center gap-1.5">
                  <Layers className="h-4 w-4 text-brand-red" />
                  DIAGNÓSTICO TÁCTICO INDIVIDUAL
                </span>
                <span className="font-mono text-[9px] text-brand-variant">RADICADO BRL-{activeLead?.id.slice(-4).toUpperCase()}</span>
              </div>

              {activeLead ? (
                <div className="space-y-6">
                  
                  {/* Subject overview */}
                  <div className="space-y-1">
                    <span className="text-[10px] text-brand-outline font-mono uppercase">SOLICITANTE RESPONSABLE</span>
                    <p className="font-display font-black text-xl text-white uppercase">{activeLead.name}</p>
                    <p className="text-xs text-brand-variant font-mono">{activeLead.email} // {activeLead.phone}</p>
                  </div>

                  {/* Requirements details summary */}
                  <div className="space-y-1 bg-brand-lowest p-4 border border-brand-outline-variant/30">
                    <span className="text-[9px] font-mono text-brand-primary uppercase font-extrabold block">Requerimientos Registrados:</span>
                    <p className="text-xs text-brand-variant font-light leading-relaxed mt-1.5 font-mono">
                      "{activeLead.requirements}"
                    </p>
                  </div>

                  {/* Risk factor details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-brand-low border border-brand-outline-variant/30">
                      <span className="text-[9px] font-mono text-brand-variant uppercase block">Coeficiente de Amenaza</span>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Flame className="h-4 w-4 text-brand-red animate-pulse" />
                        <span className="font-display font-black text-xl text-white">{activeLead.leadScore}%</span>
                      </div>
                    </div>
                    <div className="p-4 bg-brand-low border border-brand-outline-variant/30">
                      <span className="text-[9px] font-mono text-brand-variant uppercase block">Estatus de Escuadras</span>
                      <span className="font-display font-bold text-xs text-brand-primary uppercase tracking-wide block mt-2.5">
                        {activeLead.status === 'Aprobado' ? 'ASIGNACIÓN EJECUTADA' : 'EVALUANDO DISPONIBILIDAD'}
                      </span>
                    </div>
                  </div>

                  {/* Simulated Assigned Plan Card */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-brand-outline uppercase tracking-wider block">DISPOSICIÓN TÉCNICA SUGERIDA</span>
                    <div className="p-4 bg-brand-lowest border-l-2 border-brand-primary font-mono text-xs text-brand-variant space-y-1">
                      <p className="font-bold text-white uppercase text-[10px] tracking-wide mb-1">
                        {activeLead.specialty === 'Protección VIP' ? PRE_APPROVED_PLANS[0].name : activeLead.specialty === 'Montaje BTL' ? PRE_APPROVED_PLANS[1].name : PRE_APPROVED_PLANS[2].name}
                      </p>
                      <p className="text-[11px] leading-relaxed font-light font-sans">
                        {activeLead.specialty === 'Protección VIP' ? PRE_APPROVED_PLANS[0].description : activeLead.specialty === 'Montaje BTL' ? PRE_APPROVED_PLANS[1].description : PRE_APPROVED_PLANS[2].description}
                      </p>
                    </div>
                  </div>

                  {/* Diagnostic Actions buttons */}
                  <div className="pt-4 border-t border-brand-outline-variant/30 flex gap-3">
                    
                    {/* Status simulation action trigger */}
                    <button
                      onClick={() => onUpdateLeadStatus(activeLead.id)}
                      className="flex-grow bg-brand-lowest border border-brand-red hover:bg-brand-red text-white py-3.5 px-4 font-mono text-xs uppercase font-extrabold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                      title="Ciclo para simular las fases de aprobación: Pendiente -> Viabilidad -> Aprobado"
                    >
                      <RefreshCw className="h-3.5 w-3.5 text-brand-primary animate-spin" />
                      <span>Simular Ciclo Estado</span>
                    </button>

                    {/* Delete Lead action */}
                    <button
                      onClick={() => {
                        onDeleteLead(activeLead.id);
                        setSelectedLeadId(leads[0]?.id || null);
                      }}
                      className="bg-brand-lowest hover:bg-red-950/60 border border-brand-outline-variant/50 hover:border-brand-red text-brand-variant hover:text-white p-3.5 transition-colors cursor-pointer"
                      title="Eliminar Registro"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>

                  </div>

                </div>
              ) : (
                <p className="text-xs text-brand-variant font-light text-center py-6">
                  Cargue o seleccione una solicitud de la lista izquierda para auditar diagnósticos.
                </p>
              )}

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
