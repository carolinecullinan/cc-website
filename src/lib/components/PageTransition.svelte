<script>
  import { fly } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
</script>

<div
  in:fly={{ y: 50, duration: 500, delay: 200, easing: cubicInOut }}
  out:fly={{ y: -50, duration: 500, easing: cubicInOut }}
>
  <slot />
</div>

<style>
  div {
    width: 100%;
  }
</style>