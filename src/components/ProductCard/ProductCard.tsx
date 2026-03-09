import type React from 'react';
import type { Product } from '../../types/product';
import styles from './ProductCard.module.scss';
import { HeartButton, PrimaryButton } from '../common/Buttons';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { useCartStore } from '../../store/useCartStore';
import { Link } from 'react-router-dom';
import { ProductCardSkeleton } from './ProductCardSkeleton';
import { getCleanImagePath } from '../../utils/getCleanImagePath';

interface ProductCardProps {
  product?: Product;
  isLoading?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isLoading = false }) => {
  const favourites = useFavouritesStore((state) => state.favourites);
  const toggleFavourite = useFavouritesStore((state) => state.toggleFavourite);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeItem);

  if (isLoading || !product) {
    return <ProductCardSkeleton />;
  }

  const { image, name, price, screen, capacity, ram, fullPrice, isOnSale } = product;

  const isFavourite = favourites.some((item) => item.id === product.id);
  const isInCart = cart.some((item) => item.id === product.id);

  const handleFavouriteClick = () => toggleFavourite(product);

  const handleAddToCart = () => {
    if (!isInCart) addToCart(product);
    else removeFromCart(product.id);
  };

  return (
    <article className={styles.card}>
      <Link
        to={`/${product.category}/${product.itemId}`}
        className={styles.link}
      >
        <img
          className={styles.imageLink}
          src={getCleanImagePath(image)}
          alt={name}
        />
        <p className={`${styles.titleLink} body-text`}>{name}</p>
      </Link>

      <div className={styles.prices}>
        <h3 className={styles.realPrice}>${price}</h3>
        {isOnSale && <h3 className={styles.price}>${fullPrice}</h3>}
      </div>

      <div className={styles.options}>
        <div className={styles.option}>
          <span className={`${styles.label} small-text`}>Screen</span>
          <span className={`${styles.value} uppercase`}>{screen}</span>
        </div>
        <div className={styles.option}>
          <span className={`${styles.label} small-text`}>Capacity</span>
          <span className={`${styles.value} uppercase`}>{capacity}</span>
        </div>
        <div className={styles.option}>
          <span className={`${styles.label} small-text`}>RAM</span>
          <span className={`${styles.value} uppercase`}>{ram}</span>
        </div>
      </div>

      <div className={styles.buttons}>
        <PrimaryButton
          onClick={handleAddToCart}
          selected={isInCart}
        >
          {isInCart ? 'Added to cart' : 'Add to cart'}
        </PrimaryButton>
        <HeartButton
          selected={isFavourite}
          onClick={handleFavouriteClick}
        />
      </div>
    </article>
  );
};
