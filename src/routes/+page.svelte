<script>
  import Layout from '$lib/components/Layout.svelte';
  
  const featuredWork = {
    title: "Threshold Configuration Series",
    year: "2024",
    medium: "Acrylic on Canvas",
    dimensions: "48 x 36 inches",
    imageUrl: "/images/threshold-configuration-1-2024-48x36-inch-acrylic-canvas.jpg"
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
          alt={featuredWork.title}
          class="w-full h-[80vh] object-contain"
        />
      </div>
      
      <!-- Artwork Details -->
      <div class="flex justify-between items-baseline text-sm text-gray-600 font-light">
        <div>
          <h1 class="text-base font-normal text-black">{featuredWork.title}</h1>
          <p>{featuredWork.year} | {featuredWork.medium} | {featuredWork.dimensions}</p>
        </div>
        <a 
          href="/portfolio" 
          class="text-black hover:text-gray-600 transition-colors"
        >
          View Portfolio →
        </a>
      </div>
    </div>
  </section>

  <!-- Minimal Artist Statement -->
  <section class="py-24 px-6 bg-white border-t border-gray-100">
    <div class="max-w-2xl mx-auto">
      <p class="text-base leading-relaxed text-gray-800 font-light">
        Through geometric abstraction and precise mark-making, I explore the intersection of structure 
        and emotion. My work investigates how systematic patterns and bold color relationships can 
        evoke complex emotional responses, creating a dialogue between order and expression.
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