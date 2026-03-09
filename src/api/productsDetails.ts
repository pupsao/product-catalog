import { supabase } from '../services/supabaseClient';
import type { ProductCategory, ProductDetails } from '../types/product';

export const getProductDetails = async (
  itemId: string,
  category: ProductCategory,
): Promise<ProductDetails> => {
  const { data, error } = await supabase
    .from(category)
    .select('*')
    .eq('id', itemId)
    .single<ProductDetails>();

  console.log(itemId);

  if (error) {
    console.error(`Failed to fetch ${itemId} from ${category}:`, error);
    throw new Error(error.message);
  }

  return data;
};
