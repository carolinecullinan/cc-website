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

      'threshold-configurations': 'An exploration of psychological thresholds through densely configured geometric networks,where each element exists in a state of contained isolation while participating in larger systematic patterns. Through precise chromatic relationships and methodical mark-making, these threshold configurations examine how the mind creates boundaries between discrete psychological states while maintaining cohesive perceptual experience.',

      'liminal-variations': 'A methodical exploration of psychological equilibrium through balanced geometric compositions, where carefully calibrated forms investigate the structured aspects of liminal experience. Through harmonious spatial arrangements and rhythmic dotted boundaries, these variations examine how the mind creates ordered frameworks to process transitional psychological states, revealing patterns within apparent disorder.',

      'liminal-studies': 'An exploration of liminal psychological states through varied scalar relationships, where geometric forms navigate the space between isolation and connection. The works employ rhythmic dotted boundaries and deliberate spatial hierarchies to explore how the mind processes transitional experiences, creating visual metaphors for the psychological territory between discrete mental states.',

      'spatial-dialectics-materiality-and-void': 'An exploration of psychological containment through the dialectical relationship between material presence and spatial void, where geometric forms negotiate territories of compression and release. Through intersecting vertical and horizontal elements, these works investigate how the mind constructs architectural frameworks to process traumatic space, revealing the tension between structural order and psychological entropy.',

      'spatial-dialectics-chromatic-tensions': 'An exploration of psychological containment through the dialectical relationship between chromatic intensity and spatial organization, where color interactions negotiate territories of emotional resonance and systematic order. Through strategic placement of warm and cool frequencies, these works investigate how the mind constructs frameworks to process affective experience, revealing the tension between chromatic energy and psychological structure.',

      'micro-paradigms': 'An exploration of psychological containment through the dialectical relationship between microscopic order and perceptual density, where intimate scaled forms negotiate territories of systematic processing and cognitive compression. Through concentrated geometric arrangements at reduced scale, these works investigate how the mind constructs organizational paradigms to process overwhelming complexity, revealing the tension between structured pattern and psychological saturation.'

    }
  },
  fr: {
    portfolio: 'Portfolio',
    statement: 'Pratique Artistique',
    contact: 'Contact',
    backToPortfolio: '← Retour au Portfolio',
    seriesDescriptions: {

      'heterotopia-systems-of-order': 'Une exploration de l\'espace hétérotopique à travers l\'abstraction systématique, où de multiples principes ordonnateurs construisent et déstabilisent simultanément les hiérarchies perceptives. À travers des arrangements géométriques expansifs et des relations chromatiques calculées, ces œuvres examinent comment l\'esprit crée des systèmes parallèles d\'ordre au sein de l\'espace psychologique, reflétant l\'interaction complexe entre la pensée structurée et la variance cognitive.',

      'threshold-configurations': 'Une exploration des seuils psychologiques à travers des réseaux géométriques densément configurés, où chaque élément existe dans un état d\'isolement contenu tout en participant à des motifs systémiques plus larges. À travers des relations chromatiques précises et une construction méthodique des marques, ces configurations de seuil examinent comment l\'esprit crée des frontières entre des états psychologiques discrets tout en maintenant une expérience perceptive cohésive.',

      'liminal-variations': 'Une exploration méthodique de l\'équilibre psychologique à travers des compositions géométriques équilibrées, où des formes soigneusement calibrées examinent les aspects structurés de l\'expérience liminale. À travers des arrangements spatiaux harmonieux et des frontières rythmiques pointillées, ces variations étudient comment l\'esprit crée des cadres ordonnés pour traiter les états psychologiques transitionnels, révélant des motifs au sein du désordre apparent.',

      'liminal-studies': 'Un exploration des états psychologiques liminaux à travers des relations scalaires variées, où les formes géométriques naviguent l\'espace entre isolement et connexion. Les œuvres emploient des frontières rythmiques pointillées et des hiérarchies spatiales délibérées pour explorer comment l\'esprit traite les expériences transitionnelles, créant des métaphores visuelles pour le territoire psychologique entre les états mentaux discrets.',

      'spatial-dialectics-materiality-and-void': 'Une exploration du confinement psychologique à travers la relation dialectique entre présence matérielle et vide spatial, où les formes géométriques négocient des territoires de compression et de relâchement. À travers des éléments verticaux et horizontaux entrecroisés, ces œuvres examinent comment l\'esprit construit des cadres architecturaux pour traiter l\'espace traumatique, révélant la tension entre l\'ordre structurel et l\'entropie psychologique.',

      'spatial-dialectics-chromatic-tensions': 'Une exploration du confinement psychologique à travers la relation dialectique entre intensité chromatique et organisation spatiale, où les interactions de couleur négocient des territoires de résonance émotionnelle et d\'ordre systématique. À travers le positionnement stratégique des fréquences chaudes et froides, ces œuvres examinent comment l\'esprit construit des cadres pour traiter l\'expérience affective, révélant la tension entre l\'énergie chromatique et la structure psychologique.',

      'micro-paradigms': 'Une exploration du confinement psychologique à travers la relation dialectique entre ordre microscopique et densité perceptive, où des formes à échelle intime négocient des territoires de traitement systématique et de compression cognitive. À travers des arrangements géométriques concentrés à échelle réduite, ces œuvres examinent comment l\'esprit construit des paradigmes organisationnels pour traiter la complexité accablante, révélant la tension entre motif structuré et saturation psychologique.'

    }
  },
  it: {
    portfolio: 'Portfolio',
    statement: 'Pratica Artistica',
    contact: 'Contatti',
    backToPortfolio: '← Torna al Portfolio',
    seriesDescriptions: {

      'heterotopia-systems-of-order': 'Un\'esplorazione dello spazio eterotopico attraverso l\'astrazione sistematica, dove molteplici principi ordinatori simultaneamente costruiscono e destabilizzano le gerarchie percettive. Attraverso disposizioni geometriche espansive e relazioni cromatiche calcolate, queste opere indagano come la mente crei sistemi paralleli di ordine all\'interno dello spazio psicologico, riflettendo la complessa interazione tra pensiero strutturato e varianza cognitiva.',

      'threshold-configurations': 'Un\'esplorazione delle soglie psicologiche attraverso reti geometriche densamente configurate, dove ogni elemento esiste in uno stato di isolamento contenuto mentre partecipa a più ampi schemi sistematici. Attraverso precise relazioni cromatiche e segni metodici, queste configurazioni di soglia esaminano come la mente crei confini tra stati psicologici discreti mantenendo un\'esperienza percettiva coesiva.',

      'liminal-variations': 'Un\'esplorazione metodica dell\'equilibrio psicologico attraverso composizioni geometriche bilanciate, dove le forme attentamente calibrate indagano le strutturate aspettative dell\'esperienza liminale. Attraverso disposizioni spaziali armoniose e linee punteggiate ritmiche, queste variazioni esaminano come la mente crei schemi ordinati per processare stati transitori di psicologia, rivelando pattern all\'interno del disordine apparente.',

      'liminal-studies': 'Un\'esplorazione degli stati psicologici liminali attraverso relazioni scalari variate, dove le forme geometriche navigano lo spazio tra isolamento e connessione. Le opere impiegano confini ritmici punteggiati e gerarchie spaziali deliberate per esplorare come la mente elabori le esperienze transitorie, creando metafore visive per il territorio psicologico tra stati mentali discreti.',

      'spatial-dialectics-materiality-and-void': 'Un\'esplorazione del contenimento psicologico attraverso la relazione dialettica tra presenza materiale e vuoto spaziale, dove le forme geometriche negoziano territori di compressione e rilascio. Attraverso elementi verticali e orizzontali intersecanti, queste opere indagano come la mente costruisca strutture architettoniche per elaborare lo spazio traumatico, rivelando la tensione tra ordine strutturale ed entropia psicologica.',

      'spatial-dialectics-chromatic-tensions': 'Un\'esplorazione del contenimento psicologico attraverso la relazione dialettica tra intensità cromatica e organizzazione spaziale, dove le interazioni cromatiche negoziano territori di risonanza emotiva e di ordine sistematico. Attraverso il posizionamento strategico delle frequenze calde e fredde, queste opere esaminano come l\'immagine costruisca schemi per elaborare esperienze affettive, rivelando la tensione tra energia cromatica e struttura psicologica.',

      'micro-paradigms': 'Un\'esplorazione del contenimento psicologico attraverso la relazione dialettica tra ordine microscopico e densità percettiva, dove forme in scala intima negoziano territori di elaborazione sistematica e compressione cognitiva. Attraverso disposizioni geometriche concentrate a scala ridotta, queste opere indagano come la mente costruisca paradigmi organizzativi per elaborare la complessità opprimente, rivelando la tensione tra pattern strutturato e saturazione psicologica.'

    }
  }
};