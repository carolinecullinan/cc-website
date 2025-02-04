<script>
  import { currentLanguage } from '$lib/stores/language';

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'it', label: 'IT' }
  ];
</script>

<div class="flex space-x-4 items-center">
  {#each languages as lang}
    <button
      class="text-sm {$currentLanguage === lang.code ? 'text-black' : 'text-gray-400'} 
             hover:text-black transition-colors"
      on:click={() => currentLanguage.set(lang.code)}
    >
      {lang.label}
    </button>
  {/each}
</div>