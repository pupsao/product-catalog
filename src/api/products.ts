import { supabase } from '../services/supabaseClient';
import type { Product, ProductCategory } from '../types/product';
interface CatalogParams {
  category?: ProductCategory;
  page: number;
  perPage: string | 'all';
  sort: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    console.error('Error fetching master list:', error);
    throw new Error(error.message);
  }

  return data || [];
};

export const getBrandNewProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.rpc('get_brand_new_products');

  console.log('brandNew data:', data);
  console.log('brandNew error:', error);

  if (error) {
    console.error('Error fetching Brand New Products:', error);
    throw new Error(error.message);
  }

  return data || [];
};

export const getDiscountProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('isOnSale', true)
    .order('fullPrice', { ascending: false });

  if (error) {
    console.error('Error fetching Discount Products:', error);
    throw new Error(error.message);
  }

  return data || [];
};

export const getMayLikeProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase.rpc('get_random_products', { lim: 10 });

  if (error) {
    console.error('Error fetching May Like Products:', error);
    throw new Error(error.message);
  }

  return data || [];
};

export const getCatalogProducts = async ({
  category,
  page,
  perPage,
  sort,
}: CatalogParams): Promise<{ products: Product[]; total: number }> => {
  let query = supabase.from('products').select('*', { count: 'exact' }).eq('category', category);

  switch (sort) {
    case 'age':
      query = query.order('year', { ascending: false });
      break;
    case 'title':
      query = query.order('name', { ascending: true });
      break;
    case 'priceAsc':
      query = query.order('price', { ascending: true });
      break;
    case 'priceDesc':
      query = query.order('price', { ascending: false });
      break;
  }

  if (perPage !== 'all') {
    const limit = Number(perPage);
    const start = (page - 1) * limit;
    query = query.range(start, start + limit - 1);
  }

  const { data, count, error } = await query;

  if (error) {
    console.error('Error fetching catalog products:', error);
    throw new Error(error.message);
  }

  return {
    products: data || [],
    total: count || 0,
  };
};
