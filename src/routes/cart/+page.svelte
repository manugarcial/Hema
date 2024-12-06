<script lang="ts">
  import { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '$stores/cartStore';
  import { get } from 'svelte/store';

  let cartItems = get(cart);
  let totalSum = 0;

  cart.subscribe((items) => {
    cartItems = items;
    totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  });

  function handleIncrease(id: string) {
    increaseQuantity(id);
  }

  function handleDecrease(id: string) {
    decreaseQuantity(id);
  }

  function handleRemove(id: string) {
    removeFromCart(id);
  }

  function handleClearCart() {
    clearCart();
  }

  function generateWhatsAppMessage() {
    const message = cartItems.map(item => 
      `${item.name} - €${item.price} x ${item.quantity}`
    ).join("\n");

    const totalMessage = `\nTotal: €${totalSum.toFixed(2)}`;
    const fullMessage = `Hola, me gustaría realizar el siguiente pedido:\n${message}${totalMessage}`;

    return encodeURIComponent(fullMessage);
  }

  const phoneNumber = '34655107255';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
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
      <p class="cart-sum">Total: €{cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0)}</p>
      <button on:click={handleClearCart}>Vaciar carrito</button>
    </div>
  {:else}
    <p>Tu carrito está vacío.</p>
  {/if}
</div>

<div class="checkout-container">
  {#if cartItems.length > 0}
    <a href={whatsappLink} class="checkout-button" target="_blank" rel="noopener noreferrer">
      Realizar pedido via WhatsApp
    </a>
  {:else}
    <p>Tu carrito está vacío. Añada artículos al carrito para realizar el pedido.</p>
  {/if}
</div>