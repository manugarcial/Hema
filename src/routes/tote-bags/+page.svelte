<script lang="ts">
  let logoFallback = 'hema-logo.png';

  function handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = logoFallback;
  }
  const products = [
    {
      image: "/path/to/tote-bag.jpg",
      title: "Tote bag toda bordada motivo aleatorio.",
      name: "Tote Serena",
      size: "39x39cm",
      price: "€25",
    },
    {
      image: "tote-bag",
      title: "Tote bag con lazos.",
      name: "Tote Amelie",
      size: "39x39cm",
      price: "€20",
    },
    {
      image: "/path/to/lazo.jpg",
      title: "Tote bag con retazos.",
      name: "Tote Siena",
      size: "39x39cm",
      price: "€20",
    },
    {
      image: "/path/to/lazo.jpg",
      title: "Tote bag clásica.",
      name: "Tote Enea",
      size: "39x39cm",
      price: "€15",
    },
    {
      image: "/path/to/lazo.jpg",
      title: "Tote bag iniciales y dibujo bordadas.",
      name: "Tote Amira",
      size: "39x39cm",
      price: "€25",
      extra: "Personalizable"
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
        {#if product.size}
          <p class="text-sm">{product.size}</p>
        {/if}

        {#if product.price}
          <p class="text-md font-bold">{product.price}</p>
        {/if}

        <!-- {#if product.sizes}
          <ul class="text-sm space-y-1 mt-2">
            {#each product.sizes as size}
              <li>{size.size}: {size.dimensions} - {size.price}</li>
            {/each}
          </ul>
          <p class="text-sm italic mt-1">{product.extra}</p>
        {/if} -->
      </div>
    </div>
  {/each}
</main>
