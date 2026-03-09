import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';
import { useCartStore } from '../../store/useCartStore';
import { saveOrder } from '../../api/orders';
import styles from './OrderSuccessPage.module.scss';

export const OrderSuccessPage = () => {
  console.log('OrderSuccessPage rendered');
  const stripe = useStripe();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const clientSecret = params.get('payment_intent_client_secret');
    const paymentIntentId = params.get('payment_intent');

    console.log('clientSecret:', clientSecret);
    console.log('paymentIntentId:', paymentIntentId);

    if (!stripe || !clientSecret || !paymentIntentId) {
      console.log('Early return — missing:', {
        stripe: !!stripe,
        clientSecret: !!clientSecret,
        paymentIntentId: !!paymentIntentId,
      });
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log('paymentIntent status:', paymentIntent?.status);

      if (paymentIntent?.status === 'succeeded') {
        const amount = (paymentIntent.amount ?? 0) / 100;
        setTotalAmount(amount);

        saveOrder({
          items: cart,
          totalAmount: amount,
          paymentIntentId,
        })
          .then(() => {
            clearCart();
            setStatus('success');
          })
          .catch(() => setStatus('error'));
      } else {
        setStatus('error');
      }
    });
  }, [stripe, cart, clearCart]);

  if (status === 'loading') {
    return <div className={styles.container}>Loading...</div>;
  }

  if (status === 'error') {
    return (
      <div className={styles.container}>
        <h2>Something went wrong</h2>
        <Link to="/cart">Go back to cart</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Order Successful</h1>
      <p className={styles.amount}>Total paid: ${totalAmount}</p>
      <Link
        to="/"
        className={styles.homeLink}
      >
        Continue Shopping
      </Link>
    </div>
  );
};
