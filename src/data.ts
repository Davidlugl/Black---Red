import { Service, ProjectCase, CompanyMilestone } from './types';

export const LOGO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG_HhibbpoOGXEzCCtHnxeepYwgdnzGAwQoK4h2YbJ7DUIkTykk6SpLa9J8tn7kJipQm_j3qH83I6RtG_1ukbDtPWtevOTm7lwSMl9_t1gny53mbeC_MjqwOYboHQQiyhgUv3ROXRVvVxj5jfZUCyOXRsBy65MljDhuY-AQi0dghiAlxrIxyzIrEbaGVfjlRi1YhJN_YbM4FpwDZjlAerqvGmyzL-pE64KGEEcZ_doygDi7ZLRuCVVv4I2Z6q6G8uCqXPKaYZ8ns4';

export const HERO_BG_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl3ah1SthNre4FX4gOab_GUzmKdgczHVReJs0y0gpxqVNq9gIMjEslBv09FCj3VMr85PeD4DJG0jzdSMJyoj0S8xfcOahxzYpxyQzOfe8DtbHMjil1PqWehSS6jbSRqO2cGgbEK59RuMhlmSsZFiAADB6F2wJQSM2lVmLaU_aeEgcwnFnwBcnUd7CQLzL4UXylJ0Uxux44MBR7fZA_zCdC8qNoBfWjmCvujtlDjfwM-VYO6s6xUB-d5cAZ6Qx-PmR-D3nOLyJA4xo';

export const ABOUT_COMMAND_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4xSpp42LZzNi6ExLh5rMgRwlEUr3asjpG44FCWnwZs7XgDaALRZWAf77hMiVnujmr6v-nIlhbxH2bZJygi1DonMrUfYetYcWAU6Yh1b3d3RDTABLOV92IATKs2sQRU5eCXK8nUpKwJqeJY_3jACMDZvurPL68cG587JZa_vgoknBdTeq7xxmyt6v9igCeVGjqEkCdWlMxzIYQqmMRnk2U5FXM0FdBsuUkOFXrxhMbioyBKY8JeF-Oz1gaaAyA7sSZLcJQej3CnE0';

export const SERVICES_DATA: Service[] = [
  {
    id: 'btl-logistica',
    title: 'Logística BTL & Montaje',
    tag: 'Infraestructura',
    description: 'Arquitectura técnica para activaciones de marca. Gestionamos desde la permisología hasta el montaje estructural más complejo.',
    longDescription: 'Ofrecemos soluciones avanzadas de ingeniería, diseño estructural y montaje técnico para activaciones de marca, eventos masivos y lanzamientos corporativos. Garantizamos el cumplimiento estricto de normativas de sismo-resistencia y seguridad de escenarios.',
    iconName: 'LayoutGrid',
    features: ['Planimetría Digital CAD', 'Montaje Estructural de Tarimas', 'Ingeniería Acústica & Lumínica', 'Permisos Gubernamentales Express'],
    metrics: [
      { label: 'Estructuras Montadas', value: '450+' },
      { label: 'Tiempo Promedio de Carga', value: '6h' }
    ],
    capabilities: [
      'Estudios de carga estructural firmados por ingenieros autorizados.',
      'Sistemas de rigging y andamiaje certificados según el estándar europeo EN 13814.',
      'Gestión integral de permisos ante alcaldías locales y cuerpos de bomberos.'
    ]
  },
  {
    id: 'seguridad-elite',
    title: 'Seguridad de Élite',
    tag: 'Servicio Core',
    description: 'Protección ejecutiva y control de masas con personal bilingüe, entrenado en protocolo internacional y gestión de crisis.',
    longDescription: 'Nuestra división insignia reúne a profesionales certificados de la seguridad táctica. Ofrecemos protección cercana para personalidades VIP, esquemas de transporte blindado hiper-seguros y gestión táctica de perímetros de alta criticidad.',
    iconName: 'ShieldAlert',
    features: ['Escoltas Certificados y Bilingües', 'Control Tecnológico Biométrico', 'Custodia Blindada Satelital', 'Análisis Táctico Preventivo'],
    metrics: [
      { label: 'Custodias VIP Exitosas', value: '1.2k+' },
      { label: 'Tiempo de Reacción Crítica', value: '<45s' }
    ],
    capabilities: [
      'Agentes tácticos formados en evasión armada e inteligencia preventiva corporativa.',
      'Vehículos blindados de última generación vinculados a la central de mando 24/7.',
      'Sistemas antiinterferencia de radiofrecuencias para eventos VIP de alta visibilidad.'
    ]
  },
  {
    id: 'planes-pmu',
    title: 'Planes PMU',
    tag: 'Legalización & Riesgos',
    description: 'Legalización total de eventos masivos. Diseñamos planes de contingencia avalados por entidades gubernamentales.',
    longDescription: 'Desarrollamos e implementamos Planes de Gestión del Riesgo y Emergencias para Puestos de Mando Unificado (PMU). Somos responsables de la articulación con entes públicos, defensa civil, policía y secretarías de salud.',
    iconName: 'FileCheck',
    features: ['Asesoría Legal de Eventos', 'Gestión de Riesgos Integrados', 'Pistas de Evacuación Segura', 'Amnistía Regulatoria PMU'],
    metrics: [
      { label: 'Aprobaciones de PMU', value: '100%' },
      { label: 'Simulacros Ejecutados', value: '380+' }
    ],
    capabilities: [
      'Representación técnica directa ante autoridades municipales y secretarías de gobierno.',
      'Evaluación de carga máxima, planes de contingencia médica y brigadas contra incendios.',
      'Monitoreo analítico de multitudes en tiempo real para predecir aglomeraciones críticas.'
    ]
  }
];

export const PORTFOLIO_DATA: ProjectCase[] = [
  {
    id: 'cumbre-iberoamericana',
    title: 'Cumbre Iberoamericana',
    type: 'Corporativo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXq9cQu1WgPTcFC17TSR0ZAp5zyblqbC2lHRAEW1KG6Z-r9MPCMnZXMFnWuhYnCILdAT8cRMiWIIbd1ZVbb5iv6S1AfLcsBZ6GhCLcM9pWET7bIOLYT4As2EwDxZV0dP3wYUa_5UAmjyNKk_zpbtavccpvo3Y-H-qWR1J3-XPeThRwGkuPPXfPoUqqrOpX0wVdXk_VWNkwzCv5w_sWIlqHuGqa_ONk7GyybRzSU0PKqMYExBSfaTJQueDQo0vEL5eQUj-i5Tg5S2o',
    description: 'Despliegue operativo y protocolo blindado para la comitiva de Jefes de Estado. Coordinamos un perímetro seguro de 3 niveles con tecnología de monitoreo térmico.',
    location: 'Centro de Convenciones, Bogotá D.C.',
    year: '2025',
    metrics: [
      { label: 'Mandatarios Protegidos', value: '22 Jefes de Estado' },
      { label: 'Perímetro Controlado', value: '1.5 km²' }
    ],
    securityLayout: 'Control perimetral reforzado con fuerzas especiales, patrullas blindadas constantes, sensores de movimiento por radar y cámaras térmicas infrarrojas conectadas al satélite táctico central.'
  },
  {
    id: 'festival-logistico-vehicular',
    title: 'Despliegue Logístico Vehicular 24/7',
    type: 'Logística',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7U3zb6rq6WV5YIZCXydfkoRVcwxCGJYi5LbZr5FF8a-Vv3uY0IKAchEAgm_QdAbr_QU4Oae1YBW2h7yQOev-BA9WEdscWbXMzMxkzOLdidkT5wzi6_5TNbcsiswQi1Mp2GExDzPYEp9c9GK4W-VROExRQzHVsYt-GpxrLPEwoZexlQ3GXlXc9-emG1p1y92mG2J_NbcojK0zPl3XtN8Mn_U-s6RYfWx2lYsqOZY8Q0o2Xq6-WhnEUXtrYQ5ux7H8EtGjhJcJx2QU',
    description: 'Administración inteligente de la flota de transporte pesado y custodia satelital ininterrumpida para el traslado de montajes de escala masiva.',
    location: 'Rutas de Cobertura Nacional',
    year: '2024',
    metrics: [
      { label: 'Camiones Pesados Activos', value: '85 Vehículos' },
      { label: 'Índice de Siniestralidad', value: '0%' }
    ],
    securityLayout: 'Asignación de patrullas de escolta armada, seguimiento por geocerca activa automatizada, telecomunicaciones VHF encriptadas y sistemas redundantes anti-inhibición de señal (anti-jamming).'
  },
  {
    id: 'gran-gala-internacional',
    title: 'Gala Internacional de Espectáculos',
    type: 'Entretenimiento',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdaf1WoOhP-axdzZMpZPfNc867VAsMd3DiFKIqC8iv0btYVhDOCrCa97cvjLI2rSgNOMfJBashZbbVH_vJjoMjSekTmwtNX0SZJODqUjfbxfiwsxYTS0IkcachmBOI-6x2gS4Q9_hfLzaxKDTV_REhK7QuvLRZxtIDwLM2mS88XxRHv1iCq735936fpX1PBcr2x2ufyqczI6rOx55F0onc2SFhqKDTah_pfC4o_HiMPPm0jSmGMf7tmw06w63GotoOrVAW6j5Ub6A',
    description: 'Control de más de 45,000 espectadores simultáneos en escenario de alta concurrencia. Gestión de flujos de egreso y prevención de estampidas mediante simuladores virtuales.',
    location: 'Estadio Metropolitano',
    year: '2024',
    metrics: [
      { label: 'Espectadores Controlados', value: '45,000+' },
      { label: 'Personal Táctico Desplegado', value: '620 Agentes' }
    ],
    securityLayout: 'Alineación de 40 puntos biométricos de acceso, vallas pesadas anti-avalancha secundadas por un PMU modular integrado que coordina bomberos, salud, policía y unidades de respuesta móvil.'
  },
  {
    id: 'centro-mando-operativo',
    title: 'Centro de Mando Operativo Integrado',
    type: 'Monitoreo / VIP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANy84TD9ozkRhyu7DLkyZecTRllHLib-Ux0CcJVgU-3bZ54ME0g7m9SoigryuO1TFyhb21GFRvBu9y76PpvtkEMSejNe3CqKMZ7QiClFrsXnTk7wh1MoNm7vg9h5vMz-8LURJlE_2d3QKtGQtzQF3sEd3yFtSDrlzzAo-Fj1MtnNDiJrCWW6opWGvNigSrupRA9G7lsJQZkGaH3BZALdltfvi4CXVqjTrHLPynTn4yZmVgP2dN6sFLxYw6TMUtBsylJzjAnPhwVxk',
    description: 'Monitoreo de redes críticas de telecomunicaciones tácticas de nivel militar. Enlace satelital redundante coordinado directamente con el Pentágono de Seguridad de B&R.',
    location: 'Sede Principal, Bogotá',
    year: '2025',
    metrics: [
      { label: 'Pantallas en Muro de Eventos', value: '24 feeds HD' },
      { label: 'Uptime del Core de Datos', value: '99.98%' }
    ],
    securityLayout: 'Encriptación AES-256 de extremo a extremo, generadores de energía trifásicos de backup inmediato, servidores de redundancia total localizados en bunkers subterráneos.'
  }
];

export const MILESTONES: CompanyMilestone[] = [
  {
    year: '2010',
    title: 'Fundación del Grupo Logístico',
    description: 'Iniciamos operaciones con 12 vehículos y 30 agentes tácticos enfocados únicamente en el sector corporativo de Bogotá.',
    metric: 'Inicio de operaciones'
  },
  {
    year: '2015',
    title: 'Homologación de Estándares PMU',
    description: 'B&R se convierte en el principal estructurador de planes de contingencia ante cuerpos gubernamentales del país.',
    metric: '98% tasa de éxito regulatorio'
  },
  {
    year: '2020',
    title: 'Monitoreo Satelital en Tiempo Real',
    description: 'Lanzamos el Centro de Inteligencia y Control Georreferenciado, elevando los sistemas de resguardo vehicular a niveles de grado táctico.',
    metric: '100% flota monitoreada 24/7'
  },
  {
    year: '2024',
    title: 'Consolidación de Élite con Operaciones VIP',
    description: 'Protegemos y escoltamos con éxito a las 15 personalidades globales más importantes que visitaron la región.',
    metric: 'Líder absoluto de seguridad'
  }
];

export const MOCK_LEADS: ContactLead[] = [
  {
    id: 'lead-1',
    name: 'Carlos Mendoza',
    email: 'c.mendoza@epic-promotions.co',
    phone: '+57 312 990 4452',
    specialty: 'Eventos Corporativos',
    requirements: 'Requerimos cobertura de control de masas y montaje estructural para un foro de 1,200 directivos internacionales en Noviembre.',
    timestamp: '2026-05-29T10:15:00Z',
    status: 'Asignado',
    leadScore: 88
  },
  {
    id: 'lead-2',
    name: 'Silvia Restrepo',
    email: 'srestrepo@rock-and-pop.com.co',
    phone: '+57 321 445 6678',
    specialty: 'Logística Masiva',
    requirements: 'Plan PMU completo y logística estructural de tarima para concierto musical con un aforo esperado de 35,000 espectadores.',
    timestamp: '2026-05-30T14:40:00Z',
    status: 'En Viabilidad',
    leadScore: 95
  }
];
export const PRE_APPROVED_PLANS = [
  {
    name: 'Operativo VIP Alfa',
    description: 'Formación de blindaje doble anillo, 4 escoltas bilingües, camioneta armada blindada nivel III con telemetría encriptada permanente.'
  },
  {
    name: 'Logística de Escenario Mega',
    description: 'Armado rápido de graderías y tarima principal en 48 horas bajo protocolo europeo TÜV con planimetría CAD en tiempo real.'
  },
  {
    name: 'PMU Modular Ultra',
    description: 'Enlace inalámbrico dedicado de seguridad local y estatal, personal de evacuación certificado y brigada médica in situ.'
  }
];
