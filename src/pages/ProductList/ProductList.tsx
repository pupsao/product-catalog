import type { Product } from '../../types/product';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import styles from './ProductList.module.scss';

interface Props {
  products: Product[];
  isLoading: boolean;
}

export const ProductList = ({ products, isLoading }: Props) => {
  return (
    <div className={styles.grid}>
      {isLoading ?
        Array.from({ length: 8 }).map((_, i) => (
          <ProductCard
            key={i}
            isLoading
          />
        ))
      : products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  );
};
