<script lang="ts">
  export let slug: string; // Capture the slug parameter

  // Sample product data
  const products = [
    { slug: 'tote-serena', title: 'Tote Serena', description: 'A beautiful tote bag.' },
    { slug: 'tote-amelie', title: 'Tote Amelie', description: 'Stylish tote with bows.' },
  ];

  const product = products.find((p) => p.slug === slug);
</script>

{#if product}
  <h1>{product.title}</h1>
  <p>{product.description}</p>
{#else}
  <h1>404 - Product Not Found</h1>
{/if}
