<script lang="ts">
  const fallbackImage = "https://hema-pro.vercel.app/hema-logo.png";
  function handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = fallbackImage;
  }
  const products = [
    {
      image: "https://hema-pro.vercel.app/hema-logo.png",
      title: "Funda de libros.",
      name: "Funda Celia Small",
      sizes: [
        { size: "Pequeño", dimensions: "19cm x 21cm", price: "€15" },
      ],
      extra: "Plus: Bordar iniciales + €5",
    },
    {
      image: "https://hema-pro.vercel.app/hema-logo.png",
      title: "Funda de libros.",
      name: "Funda Celia Big",
      sizes: [
        { size: "Grande", dimensions: "21cm x 26cm", price: "€20" },
      ],
      extra: "Plus: Bordar iniciales + €5",
    },
  ];
</script>

<main class="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
  {#each products as product}
    <a href={`/fundas-libros/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
    </a>
  {/each}
</main>
