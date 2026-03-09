import { useState } from 'react';
import styles from './CartPage.module.scss';
import { PrimaryButton, ArrowButton } from '../../components/common/Buttons';
import { CartItem } from '../../components/CartItem/CartItem';
import { useCartStore } from '../../store/useCartStore';
import { useTranslation } from 'react-i18next';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { CheckoutModal } from '../../components/CheckoutModal/CheckoutModal';

export const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const totalAmount = useCartStore((state) => state.totalAmount());
  const totalItems = useCartStore((state) => state.totalItems());
  const { t } = useTranslation();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Breadcrumbs categoryName="Cart" />

      <ArrowButton
        text="Back"
        back
      />

      <h1 className={styles.cartTitle}>{t('cart.title')}</h1>

      {cart.length === 0 ?
        <div className={styles.emptyState}>
          <img
            src={getCleanImagePath('cart-is-empty.png')}
            alt="No products"
            className={styles.emptyImage}
          />
          <h2 className={styles.emptyMessage}>{t('cart.empty')}</h2>
        </div>
      : <div className={styles.cartPage}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onIncrease={(id) => changeQuantity(id, 'increase')}
                onDecrease={(id) => changeQuantity(id, 'decrease')}
              />
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.summaryInfo}>
              <p className={styles.totalAmount}>${totalAmount}</p>
              <p className={styles.totalItems}>{t('cart.total', { count: totalItems })}</p>
            </div>
            <div className={styles.checkout}>
              <PrimaryButton onClick={() => setIsCheckoutOpen(true)}>
                {t('cart.checkout')}
              </PrimaryButton>
            </div>
          </div>
        </div>
      }

      {isCheckoutOpen && (
        <CheckoutModal
          amount={totalAmount}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </div>
  );
};
