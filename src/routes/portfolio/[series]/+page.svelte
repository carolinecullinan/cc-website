// src/routes/portfolio/[series]/+page.svelte
<script>
  import Layout from '$lib/components/Layout.svelte';
  import { currentLanguage, translations } from '$lib/stores/language';
  import { fade } from 'svelte/transition';
  
  export let data;
  
  $: t = translations[$currentLanguage];
  let activeImage = null;

 // Calculate grid classes based on number of pieces
 $: gridClasses = series?.pieces?.length === 1 ? 'max-w-2xl mx-auto' : 
                   series?.pieces?.length === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto' :
                   'grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto';
                   
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
    },

    'liminal-variations': {
      title: 'Liminal Variations',
      pieces: [
        {
          title: 'Liminal Variations I',
          year: '2024',
          dimensions: {
            en: '50.8 x 50.8 cm (20 x 20 inches)',
            fr: '50,8 x 50,8 cm (20 x 20 pouces)',
            it: '50,8 x 50,8 cm (20 x 20 pollici)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/liminal-variations-1-2024-20x20-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Liminal Variations II',
          year: '2024',
          dimensions: {
            en: '50.8 x 50.8 cm (20 x 20 inches)',
            fr: '50,8 x 50,8 cm (20 x 20 pouces)',
            it: '50,8 x 50,8 cm (20 x 20 pollici)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/liminal-variations-2-2024-20x20-inch-acrylic-canvas.jpg'
        }
      ]
    },

    'liminal-studies': {
      title: 'Liminal Studies',
      pieces: [
        {
          title: 'Liminal Studies I',
          year: '2024',
          dimensions: {
            en: '61 x 61 cm (24 x 24 inches)',
            fr: '61 x 61 cm (24 x 24 pouces)',
            it: '61 x 61 cm (24 x 24 pollici)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/liminal-studies-1-2024-24x24-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Liminal Studies II',
          year: '2024',
          dimensions: {
            en: '61 x 61 cm (24 x 24 inches)',
            fr: '61 x 61 cm (24 x 24 pouces)',
            it: '61 x 61 cm (24 x 24 pollici)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/liminal-studies-2-2024-24x24-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Liminal Studies III',
          year: '2024',
          dimensions: {
            en: '61 x 61 cm (24 x 24 inches)',
            fr: '61 x 61 cm (24 x 24 pouces)',
            it: '61 x 61 cm (24 x 24 pollici)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/liminal-studies-3-2024-24x24-inch-acrylic-canvas.jpg'
        }
      ]
    },

    'spatial-dialectics-materiality-and-void': {
      title: 'Spatial Dialectics: Materiality and Void',
      pieces: [
        {
          title: 'Spatial Dialectics: Materiality and Void I',
          year: '2024',
          dimensions: {
            en: '101.6   x 91.4 cm (40 x 36 inches)',
            fr: '101,6 x 91,4 cm (40 x 36 pouces)',
            it: '101,6 x 91,4 cm (40 x 36 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/spatial-dialectics-materiality-and-void-1-2024-40x36-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Spatial Dialectics: Materiality and Void II',
          year: '2024',
          dimensions: {
            en: '101.6   x 91.4 cm (40 x 36 inches)',
            fr: '101,6 x 91,4 cm (40 x 36 pouces)',
            it: '101,6 x 91,4 cm (40 x 36 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/spatial-dialectics-materiality-and-void-2-2024-40x36-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Spatial Dialectics: Materiality and Void III',
          year: '2024',
          dimensions: {
            en: '101.6   x 91.4 cm (40 x 36 inches)',
            fr: '101,6 x 91,4 cm (40 x 36 pouces)',
            it: '101,6 x 91,4 cm (40 x 36 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/spatial-dialectics-materiality-and-void-3-2024-40x36-inch-acrylic-canvas.jpg'
        } 
      ]
    },

    'spatial-dialectics-chromatic-tensions': {
      title: 'Spatial Dialectics: Chromatic Tensions',
      pieces: [
        {
          title: 'Spatial Dialectics: Chromatic Tensions I',
          year: '2024',
          dimensions: {
            en: '101.6 x 91.4 cm (40 x 36 inches)',
            fr: '101,6 x 91,4 cm (40 x 36 pouces)',
            it: '101,6 x 91,4 cm (40 x 36 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/spatial-dialectics-chromatic-tensions-1-2024-40x36-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Spatial Dialectics: Chromatic Tensions II',
          year: '2024',
          dimensions: {
            en: '101.6 x 91.4 cm (40 x 36 inches)',
            fr: '101,6 x 91,4 cm (40 x 36 pouces)',
            it: '101,6 x 91,4 cm (40 x 36 inches)'
          },
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/spatial-dialectics-chromatic-tensions-2-2024-40x36-inch-acrylic-canvas.jpg'
        },
        {
          title: 'Spatial Dialectics: Chromatic Tensions III',  
          year: '2024',
          dimensions: {
            en: '101.6 x 91.4 cm (40 x 36 inches)',
            fr: '101,6 x 91,4 cm (40 x 36 pouces)',
            it: '101,6 x 91,4 cm (40 x 36 inches)'
          },  
          medium: {
            en: 'Acrylic on canvas',
            fr: 'Acrylique sur toile',
            it: 'Acrilico su tela'
          },
          imageUrl: '/images/spatial-dialectics-chromatic-tensions-3-2024-40x36-inch-acrylic-canvas.jpg'
        }
      ]
    }

    // 'micro-paradigms': {
    //   title: 'Micro Paradigms',
    //   pieces: [
    //     {
    //       title: 'Micro Paradigms I',
    //       year: '2024',
    //       dimensions: {
    //         en: '20.3 x 20.3 cm (8 x 8 inches)',
    //         fr: '20,3 x 20,3 cm (8 x 8 pouces)',
    //         it: '20,3 x 20,3 cm (8 x 8 pollici)'
    //       },
    //       medium: {
    //         en: 'Acrylic on canvas',
    //         fr: 'Acrylique sur toile',
    //         it: 'Acrilico su tela'
    //       },
    //       imageUrl: '/images/micro-paradigms-1-2024-8x8-inch-acrylic-canvas.jpg'
    //     },
    //     {
    //       title: 'Micro Paradigms II',
    //       year: '2024',
    //       dimensions: {
    //         en: '20.3 x 20.3 cm (8 x 8 inches)',
    //         fr: '20,3 x 20,3 cm (8 x 8 pouces)',
    //         it: '20,3 x 20,3 cm (8 x 8 pollici)'
    //       },
    //       medium: {
    //         en: 'Acrylic on canvas',
    //         fr: 'Acrylique sur toile',
    //         it: 'Acrilico su tela'
    //       },
    //       imageUrl: '/images/micro-paradigms-2-2024-8x8-inch-acrylic-canvas.jpg'
    //     }
    //   ]
    // }
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

    <!-- Artwork Grid (dynamically centered based on number of pieces)-->
    <div class={gridClasses}>
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
        <!-- <div class="absolute bottom-0 left-0 right-0 text-white text-center pb-4">
          <p class="text-lg">{activeImage.title}, {activeImage.year}</p>
          <p class="text-sm">{activeImage.dimensions[$currentLanguage]}</p>
          <p class="text-sm">{activeImage.medium[$currentLanguage]}</p>
        </div> -->
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