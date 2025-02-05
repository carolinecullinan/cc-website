// src/routes/portfolio/[series]/+page.svelte
<script>
  import Layout from '$lib/components/Layout.svelte';
  import { currentLanguage, translations } from '$lib/stores/language';
  import { fade } from 'svelte/transition';
  
  export let data;
  
  $: t = translations[$currentLanguage];
  let activeImage = null;


  // Contains ALL the details for ALL pieces in each series
  const seriesData = {

    'heterotopia-systems-of-order': {
      title: 'Heterotopia: Systems of Order',
      pieces: [
        {
          title: 'Heterotopia: Systems of Order',
          year: '2024',
          dimensions: {
            en: '91.4 x 122 cm (36 x 48 inches)',
            fr: '91,4 x 122 cm (36 x 48 pouces)',
            it: '91,4 x 122 cm (36 x 48 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/heterotopia-systems-of-order-2024-36x48-inch-acrylic-canvas.jpg'
        }
      ]
    },

    'threshold-configurations': {
      title: 'Threshold Configurations',
      pieces: [
        {
          title: 'Threshold Configuration I',
          year: '2024',
          dimensions: {
            en: '122 x 91.4 cm (48 x 36 inches)',
            fr: '122 x 91,4 cm (48 x 36 pouces)',
            it: '122 x 91,4 cm (48 x 36 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/threshold-configuration-1-2024-48x36-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Threshold Configuration II',
          year: '2024',
          dimensions: {
            en: '122 x 91.4 cm (48 x 36 inches)',
            fr: '122 x 91,4 cm (48 x 36 pouces)',
            it: '122 x 91,4 cm (48 x 36 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/threshold-configuration-2-2024-48x36-inch-acrylic-canvas.jpg'
        }
      ]
    }
  };

  const series = seriesData[data.series];
</script>

<Layout>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <!-- Series Header with Description -->
    <div class="mb-20">
      <a 
        href="/portfolio" 
        class="text-sm text-gray-600 hover:text-black transition-colors"
      >
        {t.backToPortfolio}
      </a>
      <h1 class="font-display text-3xl mt-8 mb-6">{series.title}</h1>
      <p class="text-gray-600 max-w-2xl leading-relaxed">
        {t.seriesDescriptions[data.series]}
      </p>
    </div>

    <!-- Artwork Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-24">
      {#each series.pieces as piece}
        <div class="artwork-container">
          <div 
            class="mb-6 cursor-zoom-in relative group"
            on:click={() => activeImage = piece}
          >
            <img
              src={piece.imageUrl}
              alt={piece.title}
              class="w-full h-auto transition-opacity duration-300"
            />
            <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          </div>
          <div class="text-center">
            <h2 class="font-display text-lg">{piece.title}, {piece.year}</h2>
            <p class="text-gray-600 mt-2">{piece.dimensions[$currentLanguage]}</p>
            <p class="text-gray-600">{piece.medium[$currentLanguage]}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Lightbox -->
  {#if activeImage}
    <div 
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      on:click={() => activeImage = null}
      transition:fade
    >
      <div class="max-w-[90vw] max-h-[90vh] relative">
        <img
          src={activeImage.imageUrl}
          alt={activeImage.title}
          class="max-w-full max-h-[90vh] object-contain"
        />
        <div class="absolute bottom-0 left-0 right-0 text-white text-center pb-4">
          <p class="text-lg">{activeImage.title}, {activeImage.year}</p>
          <p class="text-sm">{activeImage.dimensions[$currentLanguage]}</p>
          <p class="text-sm">{activeImage.medium[$currentLanguage]}</p>
        </div>
        <button 
          class="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
          on:click|stopPropagation={() => activeImage = null}
        >
          ×
        </button>
      </div>
    </div>
  {/if}
</Layout>

<style>
  .artwork-container img {
    max-height: 70vh;
    width: 100%;
    object-fit: contain;
  }
</style>