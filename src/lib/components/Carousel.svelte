<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let images: string[] = [];
  let currentIndex = 0;

  let interval: number;
  const fallbackImage = "https://hema-pro.vercel.app/hema-logo.png";

  let displayImages = [...images];

  onMount(() => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % displayImages.length;
    }, 10000);

    return () => clearInterval(interval);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  // Handle image loading error
  function handleImageError(event: Event, index: number) {
    const target = event.target as HTMLImageElement;
    displayImages[index] = fallbackImage;
  }

  function handleLineClick(index: number) {
    currentIndex = index;
  }
</script>

<style>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 24rem;
    border-radius: 8px;
  }

  .images {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(calc(-100% * var(--current-index)));
  }

  .image {
    flex-shrink: 0;
    width: 100%;
    height: 24rem;
    object-fit: cover;
  }

  .lines {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
    visibility: hidden;
  }

  .lines.visible {
    visibility: visible;
  }

  .line {
    width: 20px;
    height: 4px;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .line.active {
    background-color: #333;
  }
</style>

<div class="carousel">
  <div class="images" style="--current-index: {currentIndex}">
    {#each displayImages as image, index}
      <img
        src={image}
        alt="Product Image"
        class="image"
        on:error={(event) => handleImageError(event, index)}
      />
    {/each}
  </div>

  <div
    class="lines {displayImages.length > 1 ? 'visible' : ''}"
  >
    {#each displayImages as _, index}
      <div
        class="line {index === currentIndex ? 'active' : ''}"
        on:click={() => handleLineClick(index)}
      ></div>
    {/each}
  </div>
</div>
