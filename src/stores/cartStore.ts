import { writable } from 'svelte/store';

export const cart = writable<{ id: string; name: string; price: number; quantity: number }[]>([]);

export function addToCart(product: { id: string; name: string; price: number }) {
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

export function increaseQuantity(id: string) {
  cart.update((items) => {
    return items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  });
}

export function decreaseQuantity(id: string) {
  cart.update((items) => {
    return items.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
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
