<script lang="ts">
  const fallbackImage = "https://hema-pro.vercel.app/hema-logo.png";

  function handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = fallbackImage;
  }
  const products = [
    {
      image: "https://hema-pro.vercel.app/hema-logo.png",
      title: "Bolso de una tira con lazo en costados.",
      name: "Bolso Mila",
      size: "34x39cm",
      price: "€26",
    },
  ];
</script>

<main class="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
  {#each products as product}
    <a href={`/bolsos/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
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
        </div>
      </div>
    </a>
  {/each}
</main>
