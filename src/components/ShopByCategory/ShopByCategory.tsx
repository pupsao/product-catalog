import { Link } from 'react-router-dom';
import styles from './ShopByCategory.module.scss';
import { useProductStore } from '../../store/useProductStore';
import { useTranslation } from 'react-i18next';

export const ShopByCategory = () => {
  const mobilesCounter = useProductStore((state) => state.mobilesCounter);
  const tabletsCounter = useProductStore((state) => state.tabletsCounter);
  const accessoriesCounter = useProductStore((state) => state.accessoriesCounter);
  const { t } = useTranslation();

  return (
    <article className={styles.categor}>
      <h2>{t('home.shopByCategory')}</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link
            to="/phones"
            className={styles.categoryLink}
          >
            <img
              src="img/category-phones.webp"
              alt="Category-phones"
              className={styles.categoryImage}
            />
          </Link>
          <h3>{t('products.category.phones')}</h3>
          <p className="body-text">
            {mobilesCounter} {t('products.models')}
          </p>
        </div>
        <div className={styles.category}>
          <Link
            to="/tablets"
            className={styles.categoryLink}
          >
            <img
              src="img/category-tablets.png"
              alt="Category-tablets"
              className={styles.categoryImage}
            />
          </Link>
          <h3>{t('products.category.tablets')}</h3>
          <p className="body-text">
            {tabletsCounter} {t('products.models')}
          </p>
        </div>
        <div className={styles.category}>
          <Link
            to="/accessories"
            className={styles.categoryLink}
          >
            <img
              src="img/category-accessories.webp"
              alt="Category-accessories"
              className={styles.categoryImage}
            />
          </Link>
          <h3>{t('products.category.accessories')}</h3>
          <p className="body-text">
            {accessoriesCounter} {t('products.models')}
          </p>
        </div>
      </div>
    </article>
  );
};
