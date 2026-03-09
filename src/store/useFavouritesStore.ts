import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';

interface FavouritesState {
  favourites: Product[];

  addToFavourites: (product: Product) => void;
  removeFromFavourites: (productId: number) => void;
  toggleFavourite: (product: Product) => void;
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],

      addToFavourites: (product) => {
        set((state) => {
          const exists = state.favourites.some((p) => p.id === product.id);
          if (exists) return state;

          return {
            favourites: [...state.favourites, product],
          };
        });
      },

      removeFromFavourites: (productId) => {
        set((state) => ({
          favourites: state.favourites.filter((p) => p.id !== productId),
        }));
      },

      toggleFavourite: (product) => {
        const { favourites, addToFavourites, removeFromFavourites } = get();
        const exists = favourites.some((p) => p.id === product.id);

        if (exists) {
          removeFromFavourites(product.id);
        } else {
          addToFavourites(product);
        }
      },
    }),
    {
      name: 'favourites-storage',
    },
  ),
);
