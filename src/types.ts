export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  tag?: string;
  features: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  capabilities: string[];
}

export interface ProjectCase {
  id: string;
  title: string;
  type: string;
  image: string;
  description: string;
  location: string;
  year: string;
  metrics: {
    label: string;
    value: string;
  }[];
  securityLayout: string;
}

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialty: string;
  requirements: string;
  timestamp: string;
  status: 'Revisión Pendiente' | 'Asignado' | 'En Viabilidad' | 'Aprobado';
  leadScore: number;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
  metric: string;
}
