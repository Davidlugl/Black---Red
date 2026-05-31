import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Send, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';
import { ContactLead } from '../types';

interface ContactFormProps {
  preFilledDetails: string;
  preFilledSpecialty: string;
  onAddLead: (lead: Omit<ContactLead, 'id' | 'timestamp' | 'status' | 'leadScore'>) => void;
  clearPreFill: () => void;
}

export default function ContactForm({ preFilledDetails, preFilledSpecialty, onAddLead, clearPreFill }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('Protección VIP');
  const [requirements, setRequirements] = useState('');
  
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle pre-fills coming from the estimates calculator
  useEffect(() => {
    if (preFilledDetails) {
      setRequirements(preFilledDetails);
    }
    if (preFilledSpecialty) {
      setSpecialty(preFilledSpecialty);
    }
  }, [preFilledDetails, preFilledSpecialty]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Por favor ingrese su nombre completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Por favor ingrese un correo corporativo válido.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Por favor ingrese un número telefónico de contacto direct.');
      return;
    }
    if (!requirements.trim()) {
      setErrorMessage('Por favor especifique los requerimientos de su evento o esquema.');
      return;
    }

    // Call callback to add real lead to state & localStorage
    onAddLead({
      name,
      email,
      phone,
      specialty,
      requirements
    });

    setIsSubmitSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setRequirements('');
    clearPreFill();

    // auto dismiss success
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-bg border-t border-brand-outline-variant/30 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-10 md:space-y-12">
          <div className="space-y-6">
            <span className="font-mono text-xs text-brand-primary uppercase font-bold tracking-[0.3em] block">
              SISTEMA DE ASIGNACIÓN DE RECURSOS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl uppercase text-white leading-tight">
              Hablemos de su <span className="text-brand-red italic font-black">Seguridad</span>
            </h2>
            <p className="font-sans text-brand-variant text-base leading-relaxed font-light">
              Nuestra consultoría inicial es fundamental para identificar vulnerabilidades físicas e informáticas. Agende una reunión presencial o virtual con nuestros directores tácticos para formular un plan de contingencia corporativo.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone Card */}
            <a
              href="tel:+576014567890"
              className="flex items-center gap-6 p-6 bg-brand-container border-l-4 border-brand-red hover:bg-brand-highest transition-all duration-300 group block"
            >
              <div className="p-3.5 bg-brand-low text-brand-primary group-hover:bg-brand-red group-hover:text-white transition-colors">
                <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase text-brand-primary tracking-wider font-extrabold mb-1">
                  Central de Atención Directa
                </p>
                <p className="font-display font-black text-lg sm:text-xl text-white tracking-wide group-hover:text-brand-primary transition-colors">
                  +57 (601) 456-7890
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:comercial@blackandred.co"
              className="flex items-center gap-6 p-6 bg-brand-container border-l-4 border-brand-red hover:bg-brand-highest transition-all duration-300 group block"
            >
              <div className="p-3.5 bg-brand-low text-brand-primary group-hover:bg-brand-red group-hover:text-white transition-colors">
                <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase text-brand-primary tracking-wider font-extrabold mb-1">
                  Consultas Comerciales & Dossier
                </p>
                <p className="font-display font-black text-lg sm:text-xl text-white tracking-wide group-hover:text-brand-primary transition-colors truncate max-w-xs sm:max-w-none">
                  comercial@blackandred.co
                </p>
              </div>
            </a>
          </div>

          <div className="bg-brand-container/30 border border-brand-outline-variant/35 p-5 flex items-start gap-3">
            <ShieldAlert className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
            <p className="text-xs text-brand-variant leading-relaxed font-light">
              <strong>Nota de Confiabilidad:</strong> Todos los datos transmitidos a través de esta pasarela están protegidos bajo protocolos de criptografía simétrica y confidencialidad industrial estricta.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Request Form */}
        <div className="lg:col-span-7 bg-brand-container p-8 sm:p-12 border border-brand-outline-variant/40 relative shadow-2xl">
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-red/10 -z-10 rounded-none"></div>

          {/* Toast Notification for pre-filled data */}
          {preFilledDetails && (
            <div className="mb-6 bg-brand-red/10 border border-brand-red/35 p-4 flex items-center justify-between">
              <span className="text-xs font-mono text-brand-primary flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-brand-red animate-pulse" />
                Plan del simulador cargado exitosamente.
              </span>
              <button
                onClick={clearPreFill}
                className="text-xs text-brand-variant hover:text-white font-mono uppercase"
              >
                Limpiar
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 bg-red-950/40 border border-brand-red/40 p-4 text-xs font-mono text-brand-primary">
              ERROR: {errorMessage}
            </div>
          )}

          <FormFields
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            specialty={specialty}
            setSpecialty={setSpecialty}
            requirements={requirements}
            setRequirements={setRequirements}
            handleSubmit={handleSubmit}
          />

          {/* Submit Success Message Pop */}
          <AnimatePresence>
            {isSubmitSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-x-4 bottom-4 bg-brand-lowest border border-brand-red p-6 shadow-2xl flex flex-col md:flex-row items-center gap-4 z-20"
              >
                <div className="p-3 bg-brand-red text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <p className="font-display font-bold text-sm text-white uppercase tracking-wider">
                    Solicitud Registrada en Central
                  </p>
                  <p className="text-xs text-brand-variant font-light">
                    Su solicitud ha sido enviada al Mando Táctico. Puede verificar su número de radicado e índice de viabilidad técnica abajo en el <strong>Portal de Monitoreo</strong>.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

interface FormFieldsProps {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  specialty: string;
  setSpecialty: (v: string) => void;
  requirements: string;
  setRequirements: (v: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

function FormFields({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  specialty,
  setSpecialty,
  requirements,
  setRequirements,
  handleSubmit
}: FormFieldsProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Name and email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase text-brand-variant font-extrabold tracking-widest block">
            Nombre Completo
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Juan Pérez"
            className="w-full bg-brand-low border-0 border-b-2 border-brand-outline-variant/60 focus:border-brand-red text-white py-3.5 px-3 focus:outline-none focus:ring-0 text-sm font-light transition-all placeholder:text-brand-variant/20"
          />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase text-brand-variant font-extrabold tracking-widest block">
            Email Corporativo
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="j.perez@empresa.com"
            className="w-full bg-brand-low border-0 border-b-2 border-brand-outline-variant/60 focus:border-brand-red text-white py-3.5 px-3 focus:outline-none focus:ring-0 text-sm font-light transition-all placeholder:text-brand-variant/20"
          />
        </div>
      </div>

      {/* Phone and specialty selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase text-brand-variant font-extrabold tracking-widest block">
            Teléfono de Contacto
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+57 300 000 0000"
            className="w-full bg-brand-low border-0 border-b-2 border-brand-outline-variant/60 focus:border-brand-red text-white py-3.5 px-3 focus:outline-none focus:ring-0 text-sm font-light transition-all placeholder:text-brand-variant/20"
          />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase text-brand-variant font-extrabold tracking-widest block">
            Especialidad Requerida
          </label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full bg-brand-low border-0 border-b-2 border-brand-outline-variant/60 focus:border-brand-red text-white py-3.5 px-3 focus:outline-none focus:ring-0 text-sm font-light transition-all"
          >
            <option value="Protección VIP">Protección VIP / Personalidades</option>
            <option value="Logística Masiva">Logística de Eventos Masivos</option>
            <option value="Eventos Corporativos">Eventos Corporativos de Gala</option>
            <option value="Montaje BTL">Estructura & Montaje BTL</option>
          </select>
        </div>
      </div>

      {/* Requirements description */}
      <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase text-brand-variant font-extrabold tracking-widest block">
          Requerimientos Especiales / Detalles del Plan
        </label>
        <textarea
          required
          rows={4}
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="Escriba de forma breve los objetivos del resguardo o montaje técnico..."
          className="w-full bg-brand-low border-0 border-b-2 border-brand-outline-variant/60 focus:border-brand-red text-white py-3.5 px-3 focus:outline-none focus:ring-0 text-sm font-light leading-relaxed transition-all resize-none placeholder:text-brand-variant/20"
        />
      </div>

      {/* Action button */}
      <button
        type="submit"
        className="w-full bg-brand-red text-white py-5 px-6 font-sans text-xs uppercase font-extrabold tracking-widest hover:bg-white hover:text-brand-red transition-all cursor-pointer shadow-xl shadow-brand-red/15 flex items-center justify-center gap-2 group"
      >
        <span>Enviar Solicitud de Consultoría</span>
        <Send className="h-3.5 w-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </form>
  );
}
