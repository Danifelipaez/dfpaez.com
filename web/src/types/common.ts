/**
 * Tipos globales compartidos entre features
 */

export type Theme = 'light' | 'dark' | 'system';

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface Metadata {
  title: "Daniel Paez, Desarrollador Full Stack | Fotografia | Branding";
  description: "Bienvenidos a mi portafolio! Soy un desarrollador Full Stack con experiencia en la creación de sitios web y chatbots. Cuento con experiencia en la fotografia y branding.";
    keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
}

export interface FormFieldError {
  field: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Date;
  read: boolean;
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'other';
  icon?: string;
  proficiency: 'expert' | 'intermediate' | 'learning';
}