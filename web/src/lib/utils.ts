/**
 * Funciones puras y utilitarias
 * Sin dependecias de React, reutilizables en cualquier lugar
 * 
 * Combina clases de Tailwind y evita conflictos de clases
 */

import { clearTimeout } from "timers";

export function cn(...classes:(string | undefined |false)[]): string {
  return classes.filter(Boolean).join(' ');
}

//no creo que sea necesario, pasa de 01/12/2025 -> 1 de diciembre de 2025, no le veo uso en este caso
export function formatDate (date: Date, locale: string = 'es-CO'): string {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date));
}

//Formatea una fecha como tiempo relativo (ej. hace 2 horas)

export function timeAgo(date:Date): string {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000); // diferencia en miliseg y convr a seg

    let interval = seconds / 31536000; // 31536000 seg = 1 año 
    if (interval >1) return Math.floor(interval) + ' años'; //

    interval = seconds / 2592000;
    if (interval >1) return Math.floor(interval) + ' meses';

    interval = seconds / 86400;
    if (interval >1) return Math.floor(interval) + ' dias';

    interval = seconds / 3600;
    if (interval >1) return Math.floor(interval) + ' horas';

    interval = seconds / 60;
    if (interval >1) return Math.floor(interval) + ' minutos';

    return Math.floor(seconds) + ' segundos';
}

/**
 * Genera un slug a partir de un string
 * "Mi Proyecto Increíble" → "mi-proyecto-increible"
 */
export function slugify(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export function truncate(text: string, maxChars: number): string{
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + '...';
}
export function isValidEmail(email:string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidNumber(number: string): boolean {
  const numberRegex = /^3[0-9]{9}$/;
  return numberRegex.test(number);
}

// Debounce, Retrasa ejecuciones múltiples de una función en un intervalo de tiempo.
export function debounce<T extends(...args: any[]) => any> (func: T, delay: number): 
(...args: Parameters<T>)=> void  {
  let timeoutId: NodeJS.Timeout;
  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=> func(...args),delay)
  };
}

//Throttle, setea la frecuencia de ejecuciones de una función

export function throttle<T extends (...args: any[])=>any> (func: T, limit: number): (...args :Parameters<T>) => void {
  let inThrottle = false;

  return function (...args: Parameters<T>){
    if (!inThrottle){
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}
/**
 * Convierte un objeto a query string
 */
export function objectToQueryString(obj: Record<string, any>): string {
  return Object.entries(obj)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

/**
 * Clona un objeto profundamente (JSON-safe)
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Compara dos objetos superficialmente
 */
export function shallowEqual(obj1: any, obj2: any): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every((key) => obj1[key] === obj2[key]);
}
