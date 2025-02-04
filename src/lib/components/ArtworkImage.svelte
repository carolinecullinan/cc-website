<script>
  import { onMount } from 'svelte';

  export let src = '';
  export let alt = '';
  export let className = '';

  let loaded = false;
  let error = false;
  let imageElement;

  onMount(() => {
    if (imageElement && imageElement.complete) {
      loaded = true;
    }
  });

  function handleLoad() {
    loaded = true;
  }

  function handleError() {
    error = true;
  }
</script>

<div class="relative {className}">
  {#if !loaded && !error}
    <div class="absolute inset-0 bg-gray-50 animate-pulse" />
  {/if}
  
  <img
    bind:this={imageElement}
    {src}
    {alt}
    class="w-full h-full object-cover transition-opacity duration-300 {loaded ? 'opacity-100' : 'opacity-0'} 
           {error ? 'hidden' : ''}"
    on:load={handleLoad}
    on:error={handleError}
  />
  
  {#if error}
    <div class="absolute inset-0 flex items-center justify-center bg-gray-50">
      <p class="text-gray-400 text-sm">Unable to load image</p>
    </div>
  {/if}
</div>