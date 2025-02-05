// src/routes/statement/+page.svelte
<script>
  import Layout from '$lib/components/Layout.svelte';
  import { currentLanguage, translations } from '$lib/stores/language';
  
  $: t = translations[$currentLanguage];

  const statementContent = {
    en: {
      statement: "Artist Statement",
      paragraph1: "My practice investigates the dialectic between order and psychological entropy through a systematic approach to geometric abstraction. Operating within and against the modernist grid tradition, I create large-scale compositions that examine how trauma disrupts our fundamental understanding of structure and containment. The work employs a deliberately constrained palette of near-primary colors, engaging with the legacy of color field painting while suggesting the impossibility of accessing pure, unmediated experience.",
      paragraph2: "Drawing from contemporary trauma theory and neuroscience research on pattern recognition in PTSD treatment, my process explores the relationship between repetitive mark-making and psychological processing. Each composition functions as a phenomenological map where geometric forms simultaneously suggest and resist containment. This tension manifests through methodical yet imperfect arrangements, positioning the work within current discourse on trauma-informed artistic practices while questioning modernist assumptions about order. Through this investigation, the work addresses broader questions about the role of systematic practice in confronting psychological complexity."
    },
    it: {
      statement: "Pratica Artistica",
      paragraph1: "La mia pratica indaga la dialettica tra ordine ed entropia psicologica attraverso un approccio sistematico all'astrazione geometrica. Operando all'interno e contro la tradizione della griglia modernista, creo composizioni su larga scala che esaminano come il trauma interrompa la nostra comprensione fondamentale della struttura e del contenimento. Il lavoro impiega una tavolozza deliberatamente vincolata di colori quasi-primari, dialogando con l'eredità della color field painting mentre suggerisce l'impossibilità di accedere a un'esperienza pura e non mediata.",
      paragraph2: "Attingendo dalla teoria contemporanea del trauma e dalla ricerca neuroscientifica sul riconoscimento dei pattern nel trattamento del PTSD, il mio processo esplora la relazione tra la costruzione ripetitiva del segno e l'elaborazione psicologica. Ogni composizione funziona come una mappa fenomenologica dove le forme geometriche simultaneamente suggeriscono e resistono al contenimento. Questa tensione si manifesta attraverso disposizioni metodiche ma imperfette, posizionando il lavoro all'interno del discorso attuale sulle pratiche artistiche trauma-informed mentre mette in discussione le assunzioni moderniste sull'ordine. Attraverso questa indagine, il lavoro affronta questioni più ampie sul ruolo della pratica sistematica nel confronto con la complessità psicologica."
    },
    fr: {
      statement: "Pratique Artistique",
      paragraph1: "Ma pratique examine la dialectique entre l'ordre et l'entropie psychologique à travers une approche systématique de l'abstraction géométrique. Opérant à l'intérieur et contre la tradition de la grille moderniste, je crée des compositions à grande échelle qui examinent comment le trauma perturbe notre compréhension fondamentale de la structure et du confinement. Le travail emploie une palette délibérément contrainte de couleurs quasi-primaires, dialoguant avec l'héritage du color field painting tout en suggérant l'impossibilité d'accéder à une expérience pure et non médiée.",
      paragraph2: "S'appuyant sur la théorie contemporaine du trauma et la recherche en neurosciences sur la reconnaissance des motifs dans le traitement du PTSD, mon processus explore la relation entre la construction répétitive de la marque et le traitement psychologique. Chaque composition fonctionne comme une carte phénoménologique où les formes géométriques suggèrent et résistent simultanément au confinement. Cette tension se manifeste à travers des arrangements méthodiques mais imparfaits, positionnant le travail dans le discours actuel sur les pratiques artistiques trauma-informed tout en questionnant les présupposés modernistes sur l'ordre. À travers cette investigation, le travail aborde des questions plus larges sur le rôle de la pratique systématique dans la confrontation avec la complexité psychologique."
    }
  };
</script>

<Layout>
  <div class="max-w-3xl mx-auto px-6 py-16">
    <article class="prose prose-lg">
      <h1 class="font-display text-3xl mb-12">{statementContent[$currentLanguage].statement}</h1>
      
      <div class="space-y-8 text-gray-800 leading-relaxed">
        <p>{statementContent[$currentLanguage].paragraph1}</p>
        <p>{statementContent[$currentLanguage].paragraph2}</p>
      </div>
    </article>
  </div>
</Layout>

<style>
  :global(.prose) {
    max-width: none;
  }

  :global(.prose p) {
    margin-bottom: 2em;
  }
</style>