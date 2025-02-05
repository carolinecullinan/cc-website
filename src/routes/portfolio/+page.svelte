<script>
  import Layout from '$lib/components/Layout.svelte';
  import ArtworkImage from '$lib/components/ArtworkImage.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  
  const artworkSeries = [
    {
      id: 'heterotopia-systems-of-order',
      title: 'Heterotopia: Systems of Order',
      year: '2024',
      description: 'An exploration of heterotopic space through systematic abstraction, where multiple ordering principles simultaneously construct and destabilize perceptual hierarchies. Through expansive geometric arrangements and calculated chromatic relationships, these works investigate how the mind creates parallel systems of order within psychological space, reflecting the complex interplay between structured thought and cognitive variance.',
      coverImage: '/images/heterotopia-systems-of-order-2024-36x48-inch-acrylic-canvas.jpg',
      totalPieces: 1
    },
  
    {
      id: 'threshold-configurations',
      title: 'Threshold Configurations',
      year: '2024',
      description: 'An exploration of psychological thresholds through densely configured geometric networks, where each element exists in a state of contained isolation while participating in larger systematic patterns. Through precise chromatic relationships and methodical mark-making, these threshold configurations examine how the mind creates boundaries between discrete psychological states while maintaining cohesive perceptual experience.',
      coverImage: '/images/threshold-configuration-1-2024-48x36-inch-acrylic-canvas.jpg',
      totalPieces: 2
    },

    {
      id: 'liminal-variations',
      title: 'Liminal Variations',
      year: '2024',
      description: 'A methodical exploration of psychological equilibrium through balanced geometric compositions, where carefully calibrated forms investigate the structured aspects of liminal experience. Through harmonious spatial arrangements and rhythmic dotted boundaries, these variations examine how the mind creates ordered frameworks to process transitional psychological states, revealing patterns within apparent disorder.',
      coverImage: '/images/liminal-variations-1-2024-20x20-inch-acrylic-canvas.jpg',
      totalPieces: 2
    },

    {
      id: 'liminal-studies',
      title: 'Liminal Studies',
      year: '2024',
      description: 'An examination of liminal psychological states through varied scalar relationships, where geometric forms navigate the space between isolation and connection. The works employ rhythmic dotted boundaries and deliberate spatial hierarchies to explore how the mind processes transitional experiences, creating visual metaphors for the psychological territory between discrete mental states.',
      coverImage: '/images/liminal-studies-1-2024-24x24-inch-acrylic-canvas.jpg',
      totalPieces: 3
    }
    // Add more series here as needed
  ];
</script>

<Layout>
  <PageTransition>
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each artworkSeries as series}
          <a href="/portfolio/{series.id}" class="group">
            <div class="mb-4">
              <ArtworkImage
                src={series.coverImage}
                alt={series.title}
                className="aspect-[4/3]"
              />
            </div>
            <div class="opacity-80 group-hover:opacity-100 transition-opacity">
              <h2 class="text-sm font-medium">{series.title}</h2>
              <p class="text-sm text-gray-600">{series.year}</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </PageTransition>
</Layout>