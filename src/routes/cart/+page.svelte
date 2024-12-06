<script lang="ts">
  import { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '$stores/cartStore';
  import { get } from 'svelte/store';

  let cartItems = get(cart);
  let totalSum = 0;

  let name = '';
  let email = '';
  let address = '';

  // Track the cart items and total sum
  cart.subscribe((items) => {
    cartItems = items;
    totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  });

  // Increase item quantity
  function handleIncrease(id: string) {
    increaseQuantity(id);
  }

  // Decrease item quantity
  function handleDecrease(id: string) {
    decreaseQuantity(id);
  }

  // Remove item from cart
  function handleRemove(id: string) {
    removeFromCart(id);
  }

  // Clear the entire cart
  function handleClearCart() {
    clearCart();
  }

  const phoneNumber = '34655107255';

  // Function to generate the WhatsApp message and update the link
  function generateWhatsAppMessage() {
    if (!name || !email || !address) {
      alert('Por favor, completa todos los campos.');
      return '';
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, introduce un email válido.');
      return '';
    }

    // Generate cart items details
    const message = cartItems.map(item => 
      `${item.name} - €${item.price} x ${item.quantity}`
    ).join("\n");

    // Generate the total and address message
    const totalMessage = `\nTotal: €${totalSum.toFixed(2)}`;
    const addressMessage = `
    Nombre: ${name}
    Correo: ${email}
    Dirección: ${address}`;
    
    // Construct the full message
    const fullMessage = `Hola, me gustaría realizar el siguiente pedido:\n${message}${totalMessage}\n\nDetalles de entrega:${addressMessage}`;

    // Encode the message and set the WhatsApp link
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  }

  // Handle the WhatsApp redirection on link click
  function handleWhatsAppRedirect(event) {
    // Prevent the default link behavior (i.e., reloading the page)
    event.preventDefault();

    // Generate the WhatsApp link
    const whatsappLink = generateWhatsAppMessage();

    if (whatsappLink) {
      window.open(whatsappLink, '_blank');
    }
  }

  $: isFormValid = name && email && address && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
</script>


<style>
  .cart-title {
    justify-content: center;
    display: flex;
    font-weight: 700;
  }
  .cart-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ddd;
  }
  .cart-item h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  .cart-item button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .cart-item button:hover {
    background-color: #ff3333;
  }
  .cart-summary {
    text-align: right;
    margin-top: 1rem;
  }
  .cart-summary .cart-sum {
    margin: 10px 0;
  }
  .cart-summary button {
    background-color: #333;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .cart-summary button:hover {
    background-color: #555;
  }

  .quantity-controls {
    display: flex;
    gap: 5px;
  }

  .quantity-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  .quantity-button:hover {
    background-color: #0056b3;
  }

  .checkout-container {
    margin-top: 2rem;
    text-align: center;
  }

  .checkout-button {
    padding: 10px 20px;
    background-color: #25D366;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 4px;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
  }

  .checkout-button:hover {
    background-color: #128C7E;
  }
  
  .checkout-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    color: #666;
  }

  .form-container {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>

<div class="cart-container">
  <h1 class="cart-title">Tu carrito</h1>

  {#if cartItems.length > 0}
    <div>
      {#each cartItems as item}
        <div class="cart-item">
          <div>
            <h3>{item.name}</h3>
            <p>Precio: €{item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
          <div class="quantity-controls">
            <button class="quantity-button" on:click={() => handleDecrease(item.id)}>-</button>
            <button class="quantity-button" on:click={() => handleIncrease(item.id)}>+</button>
          </div>
          <button on:click={() => handleRemove(item.id)}>Eliminar</button>
        </div>
      {/each}
    </div>

    <div class="cart-summary">
      <p class="cart-sum">Total: €{totalSum.toFixed(2)}</p>
      <button on:click={handleClearCart}>Vaciar carrito</button>
    </div>
  {/if}

  {#if cartItems.length > 0}
    <div class="form-container">
      <h1 class="cart-title">Detalles de entrega</h1>

      <div class="form-group">
        <label for="name">Nombre y apellidos:</label>
        <input 
          id="name" 
          type="text" 
          bind:value={name} 
          placeholder="Introduce tu nombre" 
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          id="email" 
          type="email" 
          bind:value={email} 
          placeholder="Introduce tu email" 
          required
        />
      </div>
      <div class="form-group">
        <label for="address">Dirección:</label>
        <input 
          id="address" 
          type="text" 
          bind:value={address} 
          placeholder="Introduce tu dirección" 
          required
        />
      </div>
    </div>
  {/if}

  <!-- Checkout Section -->
  <div class="checkout-container">
    {#if cartItems.length > 0}
      <button 
        type="submit"
        class="checkout-button"
        on:click={(event) => handleWhatsAppRedirect(event)}
        disabled={!isFormValid}>
        Realizar pedido via WhatsApp
      </button>
    {:else}
      <p>Tu carrito está vacío. Añade artículos al carrito para realizar el pedido.</p>
    {/if}
  </div>
</div>
