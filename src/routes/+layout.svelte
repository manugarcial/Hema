<script lang="ts">
	// import { i18n } from '$lib/i18n';
	// import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	// let { children } = $props();
</script>

<!-- <ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS> -->

<Navbar />

<main>
  <slot />
</main>

<Footer /> 

<style>
  main {
    padding: 20px;
		background-color: #f5ece4;
  }
</style>
