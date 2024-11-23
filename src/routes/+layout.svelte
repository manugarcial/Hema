<script lang="ts">
	// import { i18n } from '$lib/i18n';
	// import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	// let { children } = $props();
</script>

<!-- <ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS> -->

<Navbar /> <!-- Add the Navbar component here -->

<main>
  <slot />
</main>

<style>
  main {
    padding: 20px;
  }
</style>
