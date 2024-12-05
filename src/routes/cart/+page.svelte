<script lang="ts">
  import { cart, removeFromCart, clearCart } from '$stores/cartStore';
  import { get } from 'svelte/store';

  let cartItems = get(cart);
  let totalSum = 0;

  cart.subscribe((items) => {
    cartItems = items;
    totalSum = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  });

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
    const fullMessage = `Hello! I'd like to place an order:\n${message}${totalMessage}`;

    return encodeURIComponent(fullMessage); // URL encode the message
  }

  // WhatsApp phone number (replace with your own)
  const phoneNumber = '34655107255'; // Replace with the phone number you want to send to
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
</script>

<style>
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

  .checkout-container {
    margin-top: 2rem;
    text-align: center;
  }

  .checkout-button {
    padding: 10px 20px;
    background-color: #25D366; /* WhatsApp green */
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
    background-color: #128C7E; /* Darker green on hover */
  }
</style>


<div class="cart-container">
  <h1>Shopping Cart</h1>

  {#if cartItems.length > 0}
    <div>
      {#each cartItems as item}
        <div class="cart-item">
          <div>
            <h3>{item.name}</h3>
            <p>Price: €{item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <button on:click={() => handleRemove(item.id)}>Remove</button>
        </div>
      {/each}
    </div>

    <div class="cart-summary">
      <p class="cart-sum">Total: €{cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0)}</p>
      <button on:click={handleClearCart}>Clear Cart</button>
    </div>
  {:else}
    <p>Your cart is empty.</p>
  {/if}
</div>

<div class="checkout-container">
  {#if cartItems.length > 0}
    <a href={whatsappLink} class="checkout-button" target="_blank" rel="noopener noreferrer">
      Checkout via WhatsApp
    </a>
  {:else}
    <p>Your cart is empty. Add items to your cart to checkout.</p>
  {/if}
</div>