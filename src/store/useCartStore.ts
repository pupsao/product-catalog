import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';

interface CartItem extends Omit<Product, 'description' | 'specs'> {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeItem: (productId: number) => void;
  changeQuantity: (productId: number, action: 'increase' | 'decrease') => void;
  clearCart: () => void;
  totalItems: () => number;
  totalAmount: () => number;
  isInCart: (productId: number) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const { cart } = get();
        const index = cart.findIndex((item) => item.id === product.id);

        if (index !== -1) {
          const newCart = [...cart];
          newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };
          set({ cart: newCart });
        } else {
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          });
        }
      },

      removeItem: (productId) => {
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        });
      },

      changeQuantity(productId, action) {
        const currentItem = get().cart.find((item) => item.id === productId);

        if (!currentItem) return;

        if (action === 'decrease' && currentItem.quantity === 1) {
          get().removeItem(productId);
          return;
        }

        set({
          cart: get().cart.map((item) =>
            item.id === productId ?
              {
                ...item,
                quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
              }
            : item,
          ),
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      totalItems: () => {
        return get().cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      totalAmount: () => {
        return get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },

      isInCart: (productId) => {
        return get().cart.some((item) => item.id === productId);
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
);
