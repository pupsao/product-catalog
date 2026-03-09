import { supabase } from '../services/supabaseClient';
import type { CartItemType } from '../types/product';

interface SaveOrderParams {
  items: CartItemType[];
  totalAmount: number;
  paymentIntentId: string;
}

export const saveOrder = async ({ items, totalAmount, paymentIntentId }: SaveOrderParams) => {
  const { error } = await supabase.from('orders').insert({
    items,
    total_amount: totalAmount,
    payment_intent_id: paymentIntentId,
  });

  if (error) throw new Error(error.message);
};
