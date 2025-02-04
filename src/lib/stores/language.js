// src/lib/stores/language.js
import { writable } from 'svelte/store';

export const currentLanguage = writable('en');

export const translations = {
  en: {
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    backToPortfolio: '← Back to Portfolio',
    seriesDescriptions: {
      'threshold-configurations': 'A series exploring geometric patterns and color relationships through systematic mark-making. Each work investigates the interplay between structure and chromatic harmony.'
    }
  },
  fr: {
    portfolio: 'Portfolio',
    about: 'À propos',
    contact: 'Contact',
    backToPortfolio: '← Retour au Portfolio',
    seriesDescriptions: {
      'threshold-configurations': 'Une série explorant les motifs géométriques et les relations chromatiques à travers des marques systématiques. Chaque œuvre étudie l\'interaction entre la structure et l\'harmonie chromatique.'
    }
  },
  it: {
    portfolio: 'Portfolio',
    about: 'Chi Sono',
    contact: 'Contatti',
    backToPortfolio: '← Torna al Portfolio',
    seriesDescriptions: {
      'threshold-configurations': 'Una serie che esplora pattern geometrici e relazioni cromatiche attraverso segni sistematici. Ogni opera indaga l\'interazione tra struttura e armonia cromatica.'
    }
  }
};