/**
 * Constantes globales y configuración
 * Single source of truth para valores que se repiten
 */

import type { NavLink } from '@/types/common';

export const SITE_NAME = 'Portafolio de servicios';
export const SITE_DESCRIPTION = 'Desarrollador Full Stack | Fotografía | Branding';
export const SITE_URL = 'https://dfpaez.com';
export const SITE_AUTHOR = 'Daniel Felipe Páez';

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    description: 'Inicio',
  },
  {
    label: 'Portafolio',
    href: '/portfolio',
    description: 'Mis proyectos',
  },
  {
    label: 'Fotografía',
    href: '/fotografia',
    description: 'Galería fotográfica',
  },
  {
    label: 'Branding',
    href: '/branding',
    description: 'Trabajos de diseño',
  },
  {
    label: 'Tienda',
    href: '/tienda',
    description: 'Compra mis fotos',
  },
  {
    label: 'Contacto',
    href: '/contacto',
    description: 'Ponte en contacto',
  },
];

export const FOOTER_LINKS = {
  social: [
    { label: 'GitHub', href: 'https://github.com/Danifelipaez' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/danifelipaez' },
    { label: 'Instagram', href: 'https://instagram.com/danielpaezzz' }
  ],
  legal: [
    { label: 'Privacidad', href: '/privacy' },
    { label: 'Términos', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

export const CONTACT_EMAIL = 'hello@dfpaez.com';
export const PHONE = '+57 321 954 3826';

// Configuración de validación
export const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Email inválido',
  },
  phone: {
    pattern: /^[\d\s\-\+\(\)]+$/,
    message: 'Teléfono inválido',
  },
  minLength: {
    name: 2,
    message: 5,
    subject: 5,
  },
  maxLength: {
    name: 100,
    message: 5000,
    subject: 200,
  },
};

// Breakpoints Tailwind (para componentes que necesiten lógica responsive)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Animaciones y timing
export const ANIMATION = {
  fast: 150,
  base: 300,
  slow: 500,
};

