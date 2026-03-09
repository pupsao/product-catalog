import { create } from 'zustand';
import {
  getBrandNewProducts,
  getDiscountProducts,
  getProducts,
  getMayLikeProducts,
} from '../api/products';
import type { Product } from '../types/product';

interface ProductStore {
  products: Product[];
  discountProducts: Product[];
  brandNewProducts: Product[];
  mayLikeProducts: Product[];
  mobilesCounter: number;
  tabletsCounter: number;
  accessoriesCounter: number;
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  getProductByItemId: (itemId: string) => Product | null;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  discountProducts: [],
  brandNewProducts: [],
  mayLikeProducts: [],
  mobilesCounter: 0,
  tabletsCounter: 0,
  accessoriesCounter: 0,
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    if (get().products.length > 0) return;

    set({ isLoading: true, error: null });

    try {
      const [products, discountProducts, brandNewProducts, mayLikeProducts] = await Promise.all([
        getProducts(),
        getDiscountProducts(),
        getBrandNewProducts(),
        getMayLikeProducts(),
      ]);

      const counters = products.reduce(
        (acc, product) => {
          if (product.category === 'phones') acc.mobiles++;
          if (product.category === 'tablets') acc.tablets++;
          if (product.category === 'accessories') acc.accessories++;

          return acc;
        },
        { mobiles: 0, tablets: 0, accessories: 0 },
      );
      set({
        products,
        discountProducts,
        brandNewProducts,
        mayLikeProducts,
        mobilesCounter: counters.mobiles,
        tabletsCounter: counters.tablets,
        accessoriesCounter: counters.accessories,
        isLoading: false,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'Something went wrong', isLoading: false });
      }
    }
  },

  getProductByItemId: (itemId: string) => {
    const { products } = get();
    return products.find((product) => product.itemId === itemId) || null;
  },
}));
