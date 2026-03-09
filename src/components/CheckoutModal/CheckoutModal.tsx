/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';
import { createPaymentIntent } from '../../api/payment';
import styles from './CheckoutModal.module.scss';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface Props {
  amount: number;
  onClose: () => void;
}

export const CheckoutModal = ({ amount, onClose }: Props) => {
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    createPaymentIntent(amount).then(setClientSecret).catch(console.error);
  }, [amount]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          ✕
        </button>
        <h2>Checkout</h2>

        {clientSecret ?
          <Elements
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <CheckoutForm />
          </Elements>
        : <div>Loading payment form...</div>}
      </div>
    </div>
  );
};
