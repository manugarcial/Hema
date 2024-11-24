<!-- <link rel="preload" href="https://fonts.gstatic.com/s/playfairdisplay/v16/6xK5nbYm8h_eBihnGhFgI9XzZsB1W3n8W9KLxQGw1Vw.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="https://fonts.gstatic.com/s/roboto/v27/4h06bC3y1t5kcP2dCpFnboLZ8Ig0d9k2fwzjA6tPiGM.woff2" as="font" type="font/woff2" crossorigin="anonymous"> -->

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
