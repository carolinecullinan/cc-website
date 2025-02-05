// src/lib/stores/language.js
import { writable } from 'svelte/store';

export const currentLanguage = writable('en');

export const translations = {
  en: {
    portfolio: 'Portfolio',
    statement: 'Artist Statement',
    contact: 'Contact',
    backToPortfolio: '← Back to Portfolio',
    seriesDescriptions: {
      'threshold-configurations': 'An exploration of psychological thresholds through densely configured geometric networks,where each element exists in a state of contained isolation while participating in larger systematic patterns. Through precise chromatic relationships and methodical mark-making, these threshold configurations examine how the mind creates boundaries between discrete psychological states while maintaining cohesive perceptual experience.'
    }
  },
  fr: {
    portfolio: 'Portfolio',
    statement: 'Pratique Artistique',
    contact: 'Contact',
    backToPortfolio: '← Retour au Portfolio',
    seriesDescriptions: {
      'threshold-configurations': 'Une exploration des seuils psychologiques à travers des réseaux géométriques densément configurés, où chaque élément existe dans un état d\'isolement contenu tout en participant à des motifs systémiques plus larges. À travers des relations chromatiques précises et une construction méthodique des marques, ces configurations de seuil examinent comment l\'esprit crée des frontières entre des états psychologiques discrets tout en maintenant une expérience perceptive cohésive.'
    }
  },
  it: {
    portfolio: 'Portfolio',
    statement: 'Pratica Artistica',
    contact: 'Contatti',
    backToPortfolio: '← Torna al Portfolio',
    seriesDescriptions: {
      'threshold-configurations': 'Un\'esplorazione delle soglie psicologiche attraverso reti geometriche densamente configurate, dove ogni elemento esiste in uno stato di isolamento contenuto mentre partecipa a più ampi schemi sistematici. Attraverso precise relazioni cromatiche e segni metodici, queste configurazioni di soglia esaminano come la mente crei confini tra stati psicologici discreti mantenendo un\'esperienza percettiva coesiva.'
    }
  }
};