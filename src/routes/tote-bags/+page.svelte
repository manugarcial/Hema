<script lang="ts">
  const fallbackImage = "https://hema-pro.vercel.app/hema-logo.png";

  function handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = fallbackImage;
  }
  const products = [
    {
      image: "/path/to/tote-bag.jpg",
      title: "Tote bag toda bordada motivo aleatorio.",
      name: "Tote Serena",
      size: "39x39cm",
      price: "€25",
      slug: "tote-serena"
    },
    {
      image: "tote-bag",
      title: "Tote bag con lazos.",
      name: "Tote Amelie",
      size: "39x39cm",
      price: "€20",
      slug: "tote-serena"
    },
    {
      image: "/path/to/lazo.jpg",
      title: "Tote bag con retazos.",
      name: "Tote Siena",
      size: "39x39cm",
      price: "€20",
      slug: "tote-serena"
    },
    {
      image: "/path/to/lazo.jpg",
      title: "Tote bag clásica.",
      name: "Tote Enea",
      size: "39x39cm",
      price: "€15",
      slug: "tote-serena"
    },
    {
      image: "/path/to/lazo.jpg",
      title: "Tote bag iniciales y dibujo bordadas.",
      name: "Tote Amira",
      size: "39x39cm",
      price: "€25",
      extra: "Personalizable",
      slug: "tote-serena"
    },
  ];
</script>

<main class="max-w-4xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
  {#each products as product}
    <a href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div class="flex flex-col gap-4">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-64 object-cover rounded shadow-md"
          on:error={handleImageError}
        />
        <div class="text-center md:text-left">
          <h2 class="text-lg font-semibold">{product.title}</h2>
          <p class="text-md italic">{product.name}</p>
          {#if product.price}
            <p class="text-md font-bold">{product.price}</p>
          {/if}
        </div>
      </div>
    </a>
  {/each}
</main>
