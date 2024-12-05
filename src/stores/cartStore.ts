import { writable } from 'svelte/store';
// import { notification } from '$stores/notificationStore';

export const cart = writable<{ id: string; name: string; price: number; quantity: number }[]>([]);

export function addToCart(product: { id: string; name: string; price: number }) {
  // notification.set({
  //   message: `${product.name} has been added to your cart.`,
  //   show: true,
  // });

  // // Hide the pop-up after 3 seconds
  // setTimeout(() => {
  //   notification.set({ message: '', show: false });
  // }, 3000);

  cart.update((items) => {
    const existingItem = items.find((item) => item.id === product.id);

    if (existingItem) {
      return items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }

    return [...items, { ...product, quantity: 1 }];
  });
}

export function removeFromCart(id: string) {
  cart.update((items) => {
    const filteredItems = items.filter((item) => item.id !== id);
    console.log("After remove:", filteredItems);
    return filteredItems;
  });
}

export function clearCart() {
  cart.set([]);
}
