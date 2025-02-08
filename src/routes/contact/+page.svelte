<script>
  import Layout from '$lib/components/Layout.svelte';
  import { currentLanguage, translations } from '$lib/stores/language';
  
  $: t = translations[$currentLanguage];

  let formData = {
    name: '',
    email: '',
    message: ''
  };
  
  let status = {
    sending: false,
    sent: false,
    error: null
  };

  async function handleSubmit() {
    status.sending = true;
    status.error = null;
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      status.sent = true;
      formData = { name: '', email: '', message: '' };
    } catch (error) {
      status.error = 'Failed to send message. Please try again.';
    } finally {
      status.sending = false;
    }
  }
</script>

<Layout>
  <div class="max-w-2xl mx-auto px-6 py-16">
    <div class="mb-12">
      <h1 class="font-display text-3xl mb-6">Contact</h1>
      <p class="text-gray-600">
        {$currentLanguage === 'en' ? 'For inquiries about artwork or collaborations, please use the form below.' :
         $currentLanguage === 'fr' ? 'Pour toute demande concernant les œuvres ou les collaborations, veuillez utiliser le formulaire ci-dessous.' :
         'Per informazioni sulle opere o collaborazioni, si prega di utilizzare il modulo sottostante.'}
      </p>
    </div>

    {#if status.sent}
      <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <p class="text-green-800">
          {$currentLanguage === 'en' ? 'Message sent successfully. Thank you for your interest!' :
           $currentLanguage === 'fr' ? 'Message envoyé avec succès. Merci de votre intérêt !' :
           'Messaggio inviato con successo. Grazie per il vostro interesse!'}
        </p>
      </div>
    {/if}

    <form on:submit|preventDefault={handleSubmit} class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
          {$currentLanguage === 'en' ? 'Name' :
           $currentLanguage === 'fr' ? 'Nom' :
           'Nome'}
        </label>
        <input
          type="text"
          id="name"
          required
          bind:value={formData.name}
          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
          {$currentLanguage === 'en' ? 'Email' :
           $currentLanguage === 'fr' ? 'Email' :
           'Email'}
        </label>
        <input
          type="email"
          id="email"
          required
          bind:value={formData.email}
          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
          {$currentLanguage === 'en' ? 'Message' :
           $currentLanguage === 'fr' ? 'Message' :
           'Messaggio'}
        </label>
        <textarea
          id="message"
          required
          rows="6"
          bind:value={formData.message}
          class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
        ></textarea>
      </div>

      {#if status.error}
        <div class="text-red-600 text-sm">{status.error}</div>
      {/if}

      <button
        type="submit"
        disabled={status.sending}
        class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {#if status.sending}
          {$currentLanguage === 'en' ? 'Sending...' :
           $currentLanguage === 'fr' ? 'Envoi en cours...' :
           'Invio in corso...'}
        {:else}
          {$currentLanguage === 'en' ? 'Send Message' :
           $currentLanguage === 'fr' ? 'Envoyer le message' :
           'Invia messaggio'}
        {/if}
      </button>
    </form>
  </div>
</Layout>