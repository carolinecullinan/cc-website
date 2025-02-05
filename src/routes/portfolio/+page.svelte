<script>
  import Layout from '$lib/components/Layout.svelte';
  import ArtworkImage from '$lib/components/ArtworkImage.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  
  const artworkSeries = [
    {
      id: 'threshold-configurations',
      title: 'Threshold Configurations',
      year: '2024',
      description: 'An exploration of psychological thresholds through densely configured geometric networks, where each element exists in a state of contained isolation while participating in larger systematic patterns. Through precise chromatic relationships and methodical mark-making, these threshold configurations examine how the mind creates boundaries between discrete psychological states while maintaining cohesive perceptual experience.',
      coverImage: '/images/threshold-configuration-1-2024-48x36-inch-acrylic-canvas.jpg',
      totalPieces: 2
    },
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