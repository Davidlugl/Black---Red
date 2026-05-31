import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Siren, ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesCalculator from './components/ServicesCalculator';
import PortfolioGallery from './components/PortfolioGallery';
import ContactForm from './components/ContactForm';
import ClientPortal from './components/ClientPortal';
import Footer from './components/Footer';
import { ContactLead } from './types';
import { MOCK_LEADS } from './data';

export default function App() {
  const [leads, setLeads] = useState<ContactLead[]>([]);
  const [preFilledDetails, setPreFilledDetails] = useState('');
  const [preFilledSpecialty, setPreFilledSpecialty] = useState('');

  // Initial persist load
  useEffect(() => {
    const saved = localStorage.getItem('br_leads_v2');
    if (saved) {
      try {
        setLeads(JSON.parse(saved));
      } catch (err) {
        setLeads(MOCK_LEADS);
      }
    } else {
      setLeads(MOCK_LEADS);
    }
  }, []);

  // Sync state to local storage helper
  const syncLeadsToStorage = (updatedLeads: ContactLead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem('br_leads_v2', JSON.stringify(updatedLeads));
  };

  // Add lead derived from the Contact Form
  const handleAddLead = (newLeadData: Omit<ContactLead, 'id' | 'timestamp' | 'status' | 'leadScore'>) => {
    // Generate a beautiful threat analysis coefficient (e.g. 70-98%)
    const score = Math.floor(Math.random() * (99 - 68 + 1)) + 68;
    
    const newLead: ContactLead = {
      ...newLeadData,
      id: `lead-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: 'Revisión Pendiente',
      leadScore: score
    };

    const updated = [newLead, ...leads];
    syncLeadsToStorage(updated);
  };

  // Delete lead
  const handleDeleteLead = (id: string) => {
    const updated = leaguesFilter(id);
    syncLeadsToStorage(updated);
  };

  const leaguesFilter = (id: string) => {
    return leads.filter((item) => item.id !== id);
  };

  // Status simulation: cycle status
  const handleUpdateLeadStatus = (id: string) => {
    const updated = leads.map((lead) => {
      if (lead.id === id) {
        let nextStatus: ContactLead['status'] = 'Revisión Pendiente';
        if (lead.status === 'Revisión Pendiente') nextStatus = 'En Viabilidad';
        else if (lead.status === 'En Viabilidad') nextStatus = 'Asignado';
        else if (lead.status === 'Asignado') nextStatus = 'Aprobado';
        else if (lead.status === 'Aprobado') nextStatus = 'Revisión Pendiente';

        return {
          ...lead,
          status: nextStatus
        };
      }
      return lead;
    });
    syncLeadsToStorage(updated);
  };

  // Predefined templates generator
  const handleLoadPredefinedLead = (type: 'VIP' | 'TARIMA' | 'PMU') => {
    let name = '';
    let email = '';
    let phone = '';
    let specialty = '';
    let requirements = '';
    
    if (type === 'VIP') {
      name = 'Mauricio de la Rue';
      email = 'm.delarue@ministryofculture.gov';
      phone = '+57 310 882 1109';
      specialty = 'Protección VIP';
      requirements = 'Fórmula de resguardo y cápsula de movilidad blindada dual para la comitiva consular del Embajador de Francia. Acciones diplomáticas de alta distinción.';
    } else if (type === 'TARIMA') {
      name = 'Inversiones Primavera S.A.S.';
      email = 'operaciones@primaverafest.com.co';
      phone = '+57 318 400 9011';
      specialty = 'Montaje BTL';
      requirements = 'Montaje de tarima pesada de 24x18 metros, andamiaje certificado para arrays de sonido de 4.8 toneladas y planimetría CAD contra-viento para el Primavera Stage.';
    } else {
      name = 'Arena Espectáculos';
      email = 'pmu@arenabogota.co';
      phone = '+57 316 221 4455';
      specialty = 'Logística Masiva';
      requirements = 'Auditoría PMU masiva, evacuaciones de emergencia y enlace satelital con los cuerpos de Socorro para el ciclo anual de 4 conciertos de afluencia extrema.';
    }

    const randomizedId = `lead-pre-${Date.now()}`;
    const score = Math.floor(Math.random() * (99 - 72 + 1)) + 72;

    const template: ContactLead = {
      id: randomizedId,
      name,
      email,
      phone,
      specialty,
      requirements,
      timestamp: new Date().toISOString(),
      status: 'En Viabilidad',
      leadScore: score
    };

    const updated = [template, ...leads];
    syncLeadsToStorage(updated);
  };

  // Navigations scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetPos = el.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  // Calculator prefill coordinator
  const handlePreFillRequest = (details: string, specialty: string) => {
    setPreFilledDetails(details);
    setPreFilledSpecialty(specialty);
    scrollTo('contact');
  };

  const clearPreFill = () => {
    setPreFilledDetails('');
    setPreFilledSpecialty('');
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-onsurface font-sans selection:bg-brand-red selection:text-white">
      
      {/* Real-time Emergency alert ticker */}
      <div className="bg-brand-red/90 text-white font-mono text-[10px] md:text-xs py-2 uppercase tracking-[0.25em] text-center px-4 flex items-center justify-center gap-2 select-none relative z-50">
        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
        <span className="font-extrabold flex items-center gap-1.5 justify-center">
          <Siren className="h-3.5 w-3.5" />
          Protocolo de Contingencia Activa: Coordinación Operativa Centralizada
        </span>
      </div>

      {/* Main sticky navigation */}
      <Navbar 
        onQuoteTrigger={() => scrollTo('services')} 
        onRequestPortalTrigger={() => scrollTo('client-portal')} 
      />

      {/* Main sections */}
      <main>
        
        {/* Full Screen High-Impact Hero Landing */}
        <Hero 
          onExploreServices={() => scrollTo('services')} 
          onTalkToExpert={() => scrollTo('contact')} 
        />

        {/* Corporate Side-by-Side Values & Timeline Timeline */}
        <About />

        {/* Core services & Dynamic Resource Estimates Calculator */}
        <ServicesCalculator onPreFillRequest={handlePreFillRequest} />

        {/* Active Cases Portfolio filterable Gallery */}
        <PortfolioGallery />

        {/* High Precision Quote submission form with pre-fills */}
        <ContactForm 
          preFilledDetails={preFilledDetails} 
          preFilledSpecialty={preFilledSpecialty} 
          onAddLead={handleAddLead} 
          clearPreFill={clearPreFill} 
        />

        {/* Client Interactive Portal Dashboard */}
        <ClientPortal 
          leads={leads} 
          onDeleteLead={handleDeleteLead} 
          onUpdateLeadStatus={handleUpdateLeadStatus} 
          onLoadPredefinedLead={handleLoadPredefinedLead} 
        />

      </main>

      {/* Complete Footer Sitemap */}
      <Footer />

    </div>
  );
}
