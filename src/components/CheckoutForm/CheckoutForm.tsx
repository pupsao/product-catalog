import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import styles from './CheckoutForm.module.scss';
import { PrimaryButton } from '../common/Buttons';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/#/order-success`,
      },
    });

    if (error) {
      console.error(error.message);
    }

    setIsLoading(false);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <PaymentElement />
      <div className={styles.checkout}>
        <PrimaryButton
          type="submit"
          disabled={isLoading || !stripe}
        >
          {isLoading ? 'Processing...' : 'Pay now'}
        </PrimaryButton>
      </div>
    </form>
  );
};
