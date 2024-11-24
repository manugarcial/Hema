<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Ensure that font loading runs only on the client side
    const font1 = new FontFace('Playfair Display', 'url(https://fonts.gstatic.com/s/playfairdisplay/v16/6xK5nbYm8h_eBihnGhFgI9XzZsB1W3n8W9KLxQGw1Vw.woff2)');
    const font2 = new FontFace('Roboto', 'url(https://fonts.gstatic.com/s/roboto/v27/4h06bC3y1t5kcP2dCpFnboLZ8Ig0d9k2fwzjA6tPiGM.woff2)');
    
    Promise.all([font1.load(), font2.load()]).then(() => {
      document.body.classList.add('fonts-loaded');
    }).catch((error) => {
      console.error("Font loading failed", error);
      document.body.classList.add('fonts-loaded');
    });
  });
</script>

<svelte:head>
  <!-- Preload fonts in the head section -->
  <link rel="preload" href="https://fonts.gstatic.com/s/playfairdisplay/v16/6xK5nbYm8h_eBihnGhFgI9XzZsB1W3n8W9KLxQGw1Vw.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="https://fonts.gstatic.com/s/roboto/v27/4h06bC3y1t5kcP2dCpFnboLZ8Ig0d9k2fwzjA6tPiGM.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap'); */
.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #f5ece4; /* Matching the light background color */
}

.features-container {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.text-section, .images-section {
  flex: 1;
  padding: 20px;
}

.text-section {
  max-width: 50%; /* Set max-width to 50% for desktop */
}

.images-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 images per row on desktop */
  gap: 15px;
  max-width: 50%; /* Set max-width to 50% for desktop */
}

.image-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5ece4;
  border-radius: 5px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 5px;
}

.feature-item {
  margin-bottom: 20px;
}

.feature-item h2 {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
}

.feature-item p {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .features-container {
    flex-direction: column;
  }
  .text-section, .images-section {
    max-width: 100%;
  }

  .images-section {
    grid-template-columns: 1fr;
  }
}

body {
  font-family: 'Roboto', sans-serif;
  visibility: hidden; /* Hide text until fonts are loaded */
}

body.fonts-loaded {
  visibility: visible;
  font-family: 'Roboto', sans-serif;
}

h2 {
  font-family: 'Playfair Display', serif;
}
</style>

<section class="features-section">
  <div class="features-container">
    <div class="text-section">
      <div class="feature-item">
        <h2>Tu toque único</h2>
        <p>
          Descubre nuestros productos personalizables con bordados a mano, diseñados especialmente para reflejar tu personalidad.
          Cada detalle es exclusivo, asegurando que nadie más lleve algo igual que tú. ¡Dale tu toque único a lo que amas!
        </p>
      </div>
      <div class="feature-item">
        <h2>Calidad artesanal</h2>
        <p>
          Nuestros productos están hechos a mano con dedicación, utilizando los mejores materiales para garantizar una calidad especial.
          Cada pieza es única, creada con esmero para ofrecerte algo verdaderamente excepcional.
        </p>
      </div>
      <div class="feature-item">
        <h2>Diseños que destacan</h2>
        <p>
          Creamos diseños únicos y con mucho estilo, pensados para que brilles en cada momento. Porque sabemos que lo importante eres tú,
          y queremos que seas el centro de todas las miradas.
        </p>
      </div>
    </div>

    <div class="images-section">
      <div class="image-item">
        <img src="dos-lazos-rojo-negro-hema.png" alt="Fundas para libros con diseño floral" />
      </div>
      <div class="image-item">
        <img src="bolso-flores-hema.png" alt="Bolsa estampada con flores rojas" />
      </div>
      <div class="image-item">
        <img src="bolso-flores-hema.png" alt="Bolsa de lino con diseño bordado" />
      </div>
      <div class="image-item">
        <img src="lazo-rojo-hema.png" alt="Lazo rojo con fondo claro" />
      </div>
    </div>
  </div>
</section>
