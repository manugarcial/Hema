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

  const whatsappNumber = '34635968035';
</script>

<svelte:head>
  <!-- Preload fonts in the head section -->
  <link rel="preload" href="https://fonts.gstatic.com/s/playfairdisplay/v16/6xK5nbYm8h_eBihnGhFgI9XzZsB1W3n8W9KLxQGw1Vw.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="https://fonts.gstatic.com/s/roboto/v27/4h06bC3y1t5kcP2dCpFnboLZ8Ig0d9k2fwzjA6tPiGM.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</svelte:head>

<style>
h2 {
  font-family: 'Playfair Display', serif;
}

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

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25D366;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000; /* Ensure it stays on top */
  cursor: pointer;
  transition: transform 0.3s ease;
}

.whatsapp-button:hover {
  transform: scale(1.1); /* Slightly enlarge button on hover */
}

.whatsapp-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
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
  .whatsapp-button {
    bottom: 10px;
    right: 10px;
  }
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
<!-- Floating WhatsApp button -->
<a href={`https://wa.me/${whatsappNumber}`} target="_blank" class="whatsapp-button" aria-label="Chat with us on WhatsApp">
  <!-- <img src="whatsapp-icon.svg" alt="WhatsApp" /> -->
  <svg fill="#ffffff" class="whatsapp-icon" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve">
    <g id="XMLID_468_">
      <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156   c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687   c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887   c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153   c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348   c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802   c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922   c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0   c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458   C233.168,179.508,230.845,178.393,227.904,176.981z"/>
      <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716   c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396   c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z    M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188   l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677   c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867   C276.546,215.678,222.799,268.994,156.734,268.994z"/>
    </g>
  </svg>
</a>
