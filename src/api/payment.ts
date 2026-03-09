import { supabase } from '../services/supabaseClient';

export const createPaymentIntent = async (amount: number): Promise<string> => {
  const { data, error } = await supabase.functions.invoke('create-payment-intent', {
    body: { amount },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
  });

  if (error) throw new Error(error.message);

  return data.clientSecret;
};
