<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import { page } from '$app/stores';

  interface Product {
    slug: string;
    images: string[];
    title: string;
    name: string;
    size?: string;
    price?: string;
    sizes?: { size: string; dimensions: string; price: string }[];
    extra?: string;
  }

  let products: Product[] = [
    {
      images: [
        "https://hema-pro.vercel.app/hema-logo.png",
        "https://hema-pro.vercel.app/hema-logo.png",
        "https://hema-pro.vercel.app/hema-logo.png",
      ],
      title: "Tote bag toda bordada motivo aleatorio.",
      name: "Tote Serena",
      size: "39x39cm",
      price: "€25",
      slug: "tote-serena",
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag con lazos.",
      name: "Tote Amelie",
      size: "39x39cm",
      price: "€20",
      slug: "tote-amelie",
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag con retazos.",
      name: "Tote Siena",
      size: "39x39cm",
      price: "€20",
      slug: "tote-serena"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag clásica.",
      name: "Tote Enea",
      size: "39x39cm",
      price: "€15",
      slug: "tote-enea"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag iniciales y dibujo bordadas.",
      name: "Tote Amira",
      size: "39x39cm",
      price: "€25",
      extra: "Personalizable",
      slug: "tote-amira"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Bolso de una tira con lazo en costados.",
      name: "Bolso Mila",
      size: "34x39cm",
      price: "€26",
      slug: "bolso-mila"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Lazos para el cabello con cola.",
      name: "Lazo Talia",
      price: "€12",
      slug: "lazo-talia"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: 'Funda de libros.',
      name: 'Funda Celia',
      sizes: [
        { size: 'Pequeño', dimensions: '19cm x 21cm', price: '€15' },
        { size: 'Grande', dimensions: '21cm x 26cm', price: '€20' },
      ],
      extra: 'Plus: Bordar iniciales + €5',
      slug: "funda-celia",
    },
  ];

  let product: Product | undefined;

  $: {
    const slug = $page.url.pathname.split('/').pop();
    product = products.find((p) => p.slug === slug);
  }
</script>

{#if product}
  <div class="max-w-4xl mx-auto py-8 px-4">
    <Carousel images={product.images} />

    <h1 class="text-2xl font-bold mt-4">{product.title}</h1>
    <p class="text-lg italic">{product.name}</p>
    {#if product.size}
      <p class="text-md">Size: {product.size}</p>
    {/if}
    {#if product.price}
      <p class="text-md font-bold">Price: {product.price}</p>
    {/if}
    {#if product.extra}
      <p class="text-sm italic mt-2">Extra: {product.extra}</p>
    {/if}

    {#if product.sizes}
      <h2 class="text-lg font-semibold mt-4">Available Sizes:</h2>
      <ul>
        {#each product.sizes as size}
          <li>{size.size}: {size.dimensions} - {size.price}</li>
        {/each}
      </ul>
    {/if}
  </div>
{:else}
  <p>Product not found!</p>
{/if}
