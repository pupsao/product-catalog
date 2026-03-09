import React from 'react';
import styles from './CartItem.module.scss';
import { Icon } from '../common/Icon';
import type { CartItemType } from '../../types/product';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
  const totalPrice = item.price * item.quantity;

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemMain}>
        <button
          className={styles.cartItemRemove}
          onClick={() => onRemove(item.id)}
        >
          <Icon name="close" />
        </button>

        <img
          src={item.image}
          alt={item.name}
          className={styles.cartItemImage}
        />

        <h3 className={styles.cartItemTitle}>{item.name}</h3>
      </div>

      <div className={styles.cartItemControls}>
        <div className={styles.cartItemQuantity}>
          <button
            className={styles.quantityBtn}
            onClick={() => onDecrease(item.id)}
          >
            <Icon name="minus" />
          </button>

          <span className={styles.quantityValue}>{item.quantity}</span>

          <button
            className={styles.quantityBtn}
            onClick={() => onIncrease(item.id)}
          >
            <Icon name="plus" />
          </button>
        </div>

        <p className={styles.cartItemPrice}>${totalPrice}</p>
      </div>
    </div>
  );
};
