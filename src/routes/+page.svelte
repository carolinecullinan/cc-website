<script>
  import Layout from '$lib/components/Layout.svelte';
  import { currentLanguage, translations } from '$lib/stores/language';
  
  $: t = translations[$currentLanguage];

  const featuredWork = {
    title: {
      en: "Heterotopia: Systems of Order",
      fr: "Heterotopia: Systèmes d'Ordre",
      it: "Heterotopia: Sistemi di Ordine"
    },
    year: "2024",
    medium: {
      en: "Acrylic on canvas",
      fr: "Acrylique sur toile",
      it: "Acrilico su tela"
    },
    dimensions: {
      en: "91.4 x 122 cm (36 x 48 inches)",
      fr: "91,4 x 122 cm (36 x 48 pouces)",
      it: "91,4 x 122 cm (36 x 48 pollici)"
    },
    imageUrl: "/images/heterotopia-systems-of-order-2024-36x48-inch-acrylic-canvas.jpg"
  };

  const shortStatement = {
    en: "Through systematic geometric abstraction, my practice investigates the dialectical relationship between order and psychological entropy. Drawing from trauma theory and pattern recognition research, the work explores how structured mark-making and controlled color relationships can simultaneously contain and reveal psychological complexity.",
    fr: "À travers l'abstraction géométrique systématique, ma pratique examine la relation dialectique entre l'ordre et l'entropie psychologique. S'appuyant sur la théorie du trauma et la recherche sur la reconnaissance des motifs, le travail explore comment la construction structurée de la marque et les relations chromatiques contrôlées peuvent simultanément contenir et révéler la complexité psychologique.",
    it: "Attraverso l'astrazione geometrica sistematica, la mia pratica indaga la relazione dialettica tra ordine ed entropia psicologica. Attingendo dalla teoria del trauma e dalla ricerca sul riconoscimento dei pattern, il lavoro esplora come la costruzione strutturata del segno e le relazioni cromatiche controllate possano simultaneamente contenere e rivelare la complessità psicologica."
  };
</script>

<Layout>
  <!-- Minimal Hero - Single Featured Work -->
  <section class="h-screen flex flex-col justify-center px-6 bg-white">
    <div class="max-w-6xl mx-auto w-full">
      <!-- Artwork Display -->
      <div class="mb-8">
        <img 
          src={featuredWork.imageUrl} 
          alt={featuredWork.title[$currentLanguage]}
          class="w-full h-[80vh] object-contain"
        />
      </div>
      
      <!-- Artwork Details -->
      <div class="flex justify-between items-baseline text-sm text-gray-600 font-light">
        <div>
          <h1 class="text-base font-normal text-black">{featuredWork.title[$currentLanguage]}</h1>
          <p>{featuredWork.year} | {featuredWork.medium[$currentLanguage]} | {featuredWork.dimensions[$currentLanguage]}</p>
        </div>
        <a 
          href="/portfolio" 
          class="text-black hover:text-gray-600 transition-colors"
        >
          {$currentLanguage === 'en' ? 'View Portfolio →' : 
           $currentLanguage === 'fr' ? 'Voir le Portfolio →' : 
           'Vedi Portfolio →'}
        </a>
      </div>
    </div>
  </section>

  <!-- Minimal Artist Statement -->
  <section class="py-24 px-6 bg-white border-t border-gray-100">
    <div class="max-w-2xl mx-auto">
      <p class="text-base leading-relaxed text-gray-800 font-light">
        {shortStatement[$currentLanguage]}
      </p>
    </div>
  </section>
</Layout>

<style>
  :global(body) {
    background-color: white;
    color: black;
    font-family: 'Helvetica Neue', sans-serif;
  }
</style>