<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import { page } from '$app/stores';
  import { addToCart } from '$stores/cartStore';

  interface Product {
    id: string;
    images: string[];
    title: string;
    name: string;
    size?: string;
    price: number;
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
      price: 25,
      id: "tote-serena",
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag con lazos.",
      name: "Tote Amelie",
      size: "39x39cm",
      price: 20,
      id: "tote-amelie",
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag con retazos.",
      name: "Tote Siena",
      size: "39x39cm",
      price: 20,
      id: "tote-siena"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag clásica.",
      name: "Tote Enea",
      size: "39x39cm",
      price: 15,
      id: "tote-enea"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Tote bag iniciales y dibujo bordadas.",
      name: "Tote Amira",
      size: "39x39cm",
      price: 25,
      extra: "Personalizable",
      id: "tote-amira"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Bolso de una tira con lazo en costados.",
      name: "Bolso Mila",
      size: "34x39cm",
      price: 26,
      id: "bolso-mila"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: "Lazos para el cabello con cola.",
      name: "Lazo Talia",
      price: 12,
      id: "lazo-talia"
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: 'Funda de libros.',
      name: 'Funda Celia',
      price: 15,
      sizes: [
        { size: 'Pequeño', dimensions: '19cm x 21cm', price: '€15' },
      ],
      extra: 'Plus: Bordar iniciales + €5',
      id: "funda-celia-small",
    },
    {
      images: ["https://hema-pro.vercel.app/hema-logo.png"],
      title: 'Funda de libros.',
      name: 'Funda Celia',
      price: 20,
      sizes: [
        { size: 'Grande', dimensions: '21cm x 26cm', price: '€20' },
      ],
      extra: 'Plus: Bordar iniciales + €5',
      id: "funda-celia-big",
    },
  ];

  let product: Product | undefined;
  let showNotification = false; // State to manage notification visibility
  let notificationMessage = ''; // Message to show in the notification

  // Function to handle adding an item to the cart and showing notification
  function handleAddToCart(product: { id: string; name: string; price: number }) {
    addToCart(product); // Add the product to the cart

    // Set notification message and show it
    notificationMessage = `¡${product.name} ha sido añadido al carrito!`;
    showNotification = true;

    // Hide notification after 3 seconds
    setTimeout(() => {
      showNotification = false;
    }, 3000);
  }

  $: {
    const id = $page.url.pathname.split('/').pop();
    product = products.find((p) => p.id === id);
  }
</script>

<style>
  .add-to-cart {
    background-color: #007bff;  /* Blue color */
    color: white;  /* White text */
    border: none;  /* Remove default border */
    padding: 10px 20px;  /* Add some padding */
    font-size: 16px;  /* Set font size */
    border-radius: 5px;  /* Round corners */
    cursor: pointer;  /* Show pointer cursor on hover */
    transition: background-color 0.3s ease;  /* Smooth transition */
    margin-top: 20px;
  }

  .add-to-cart:hover {
    background-color: #0056b3;  /* Darker blue on hover */
  }

  .add-to-cart:focus {
    outline: none;  /* Remove outline on focus */
  }

  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #444;
    color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000; /* Ensure it's on top of other elements */
  }
</style>

{#if product}
  <div class="max-w-4xl mx-auto py-8 px-4">
    <Carousel images={product.images} />

    <h1 class="text-2xl font-bold mt-4">{product.title}</h1>
    <p class="text-lg italic">{product.name}</p>
    {#if product.size}
      <p class="text-md">Tamaño: {product.size}</p>
    {/if}
    {#if product.price}
      <p class="text-md font-bold">Precio: {product.price}</p>
    {/if}
    {#if product.extra}
      <p class="text-sm italic mt-2">Extras: {product.extra}</p>
    {/if}

    {#if product.sizes}
      <h2 class="text-lg font-semibold mt-4">Tamaños disponibles:</h2>
      <ul>
        {#each product.sizes as size}
          <li>{size.size}: {size.dimensions} - {size.price}</li>
        {/each}
      </ul>
    {/if}
    <button class="add-to-cart" on:click={() => handleAddToCart(product)}>
      Añadir al carrito
    </button>
  </div>
{:else}
  <p>¡Producto no encontrado!</p>
{/if}

<!-- Notification Popup -->
{#if showNotification}
  <div class="notification">
    <p>{notificationMessage}</p>
  </div>
{/if}
