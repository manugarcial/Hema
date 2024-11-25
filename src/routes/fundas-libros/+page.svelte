<script lang="ts">
  let logoFallback = 'hema-logo.png';

  function handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = logoFallback;
  }
  const products = [
    {
      image: "/path/to/funda.jpg",
      title: "Funda de libros.",
      name: "Funda Celia",
      sizes: [
        { size: "Pequeño", dimensions: "19cm x 21cm", price: "€15" },
        { size: "Grande", dimensions: "21cm x 26cm", price: "€20" },
      ],
      extra: "Plus: Bordar iniciales + €5",
    },
  ];
</script>

<main class="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
  {#each products as product}
    <div class="flex flex-col gap-4">
      <!-- Product Image -->
      <img
        src={product.image}
        alt={product.name}
        class="w-full h-64 object-cover rounded shadow-md"
        on:error={handleImageError}
      />

      <!-- Product Info -->
      <div class="text-center md:text-left">
        <h2 class="text-lg font-semibold">{product.title}</h2>
        <p class="text-md italic">{product.name}</p>
        <!-- {#if product.size}
          <p class="text-sm">{product.size}</p>
        {/if}

        {#if product.price}
          <p class="text-md font-bold">{product.price}</p>
        {/if} -->

        {#if product.sizes}
          <ul class="text-sm space-y-1 mt-2">
            {#each product.sizes as size}
              <li>{size.size}: {size.dimensions} - {size.price}</li>
            {/each}
          </ul>
          <p class="text-sm italic mt-1">{product.extra}</p>
        {/if}
      </div>
    </div>
  {/each}
</main>
