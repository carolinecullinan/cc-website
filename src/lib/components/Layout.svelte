<script>
  import { page } from '$app/stores';
  import { currentLanguage, translations } from '$lib/stores/language';
  import LanguageSelector from './LanguageSelector.svelte';
  
  let isMenuOpen = false;
  
  $: t = translations[$currentLanguage];
</script>

<div class="min-h-screen bg-white">
  <nav class="fixed top-0 left-0 right-0 bg-white/95 z-50 border-b border-gray-50">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Name -->
        <a href="/" class="text-base tracking-wide hover:text-gray-600 transition-colors">
          TEXT TEXT TEXT
        </a>

        <div class="hidden md:flex items-center space-x-8">
          <!-- Navigation -->
          <a 
            href="/portfolio" 
            class="text-sm hover:text-gray-600 transition-colors"
          >
            {t.portfolio}
          </a>
          <a 
          href="/statement" 
          class="text-sm hover:text-gray-600 transition-colors {$page.url.pathname === '/statement' ? 'text-gray-600' : ''}"
        >
          {t.statement}
        </a>
          <a 
            href="/contact" 
            class="text-sm hover:text-gray-600 transition-colors"
          >
            {t.contact}
          </a>
          
          <!-- Language Selector -->
          <LanguageSelector />
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden"
          on:click={() => isMenuOpen = !isMenuOpen}
        >
          <div class="space-y-1.5">
            <span class="block w-6 h-px bg-black"></span>
            <span class="block w-6 h-px bg-black"></span>
            <span class="block w-6 h-px bg-black"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden border-t border-gray-100">
        <div class="px-6 py-4 space-y-3">
          <a href="/portfolio" class="block text-sm">{t.portfolio}</a>
          <a href="/about" class="block text-sm">{t.about}</a>
          <a href="/contact" class="block text-sm">{t.contact}</a>
          <div class="pt-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    {/if}
  </nav>

  <main class="pt-16">
    <slot />
  </main>
</div>