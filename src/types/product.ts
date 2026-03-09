export interface ProductDetails {
  id: string;
  category: ProductCategory;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  selectedCapacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  selectedColor: string;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
  isOnSale: boolean;
}

interface Description {
  title: string;
  text: string[];
}

export interface Product {
  id: number;
  category: ProductCategory;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  isOnSale: boolean;
}

export type ProductCategory = 'phones' | 'tablets' | 'accessories';

export type CartItemType = Product & {
  quantity: number;
};
