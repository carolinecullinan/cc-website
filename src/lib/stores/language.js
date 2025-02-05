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

      'heterotopia-systems-of-order': 'An exploration of heterotopic space through systematic abstraction, where multiple ordering principles simultaneously construct and destabilize perceptual hierarchies. Through expansive geometric arrangements and calculated chromatic relationships, these works investigate how the mind creates parallel systems of order within psychological space, reflecting the complex interplay between structured thought and cognitive variance.',

      'threshold-configurations': 'An exploration of psychological thresholds through densely configured geometric networks,where each element exists in a state of contained isolation while participating in larger systematic patterns. Through precise chromatic relationships and methodical mark-making, these threshold configurations examine how the mind creates boundaries between discrete psychological states while maintaining cohesive perceptual experience.'

    }
  },
  fr: {
    portfolio: 'Portfolio',
    statement: 'Pratique Artistique',
    contact: 'Contact',
    backToPortfolio: '← Retour au Portfolio',
    seriesDescriptions: {

      'heterotopia-systems-of-order': 'Une exploration de l\'espace hétérotopique à travers l\'abstraction systématique, où de multiples principes ordonnateurs construisent et déstabilisent simultanément les hiérarchies perceptives. À travers des arrangements géométriques expansifs et des relations chromatiques calculées, ces œuvres examinent comment l\'esprit crée des systèmes parallèles d\'ordre au sein de l\'espace psychologique, reflétant l\'interaction complexe entre la pensée structurée et la variance cognitive.',

      'threshold-configurations': 'Une exploration des seuils psychologiques à travers des réseaux géométriques densément configurés, où chaque élément existe dans un état d\'isolement contenu tout en participant à des motifs systémiques plus larges. À travers des relations chromatiques précises et une construction méthodique des marques, ces configurations de seuil examinent comment l\'esprit crée des frontières entre des états psychologiques discrets tout en maintenant une expérience perceptive cohésive.'

    }
  },
  it: {
    portfolio: 'Portfolio',
    statement: 'Pratica Artistica',
    contact: 'Contatti',
    backToPortfolio: '← Torna al Portfolio',
    seriesDescriptions: {

      'heterotopia-systems-of-order': 'Un\'esplorazione dello spazio eterotopico attraverso l\'astrazione sistematica, dove molteplici principi ordinatori simultaneamente costruiscono e destabilizzano le gerarchie percettive. Attraverso disposizioni geometriche espansive e relazioni cromatiche calcolate, queste opere indagano come la mente crei sistemi paralleli di ordine all\'interno dello spazio psicologico, riflettendo la complessa interazione tra pensiero strutturato e varianza cognitiva.',

      'threshold-configurations': 'Un\'esplorazione delle soglie psicologiche attraverso reti geometriche densamente configurate, dove ogni elemento esiste in uno stato di isolamento contenuto mentre partecipa a più ampi schemi sistematici. Attraverso precise relazioni cromatiche e segni metodici, queste configurazioni di soglia esaminano come la mente crei confini tra stati psicologici discreti mantenendo un\'esperienza percettiva coesiva.'

    }
  }
};