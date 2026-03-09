import React from 'react';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { ArrowButton } from '../../components/common/Buttons';
import { useTranslation } from 'react-i18next';

import styles from './FavouritesPage.module.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const FavouritesPage: React.FC = () => {
  const favourites = useFavouritesStore((state) => state.favourites);
  const isEmpty = favourites.length === 0;
  const { t } = useTranslation();

  return (
    <div className={styles.favouritesPage}>
      <Breadcrumbs categoryName={t('favourites.title')} />

      <ArrowButton
        text={t('common.back')}
        back
      />
      <h1 className={styles.title}>{t('favourites.title')}</h1>
      <p className={styles.count}>
        {favourites.length} {t('favourites.items')}
      </p>

      {isEmpty ?
        <div className={styles.emptyState}>
          <img
            src={getCleanImagePath('favourites-is-empty.png')}
            alt="No favourites"
            className={styles.emptyImage}
          />

          <p className={styles.emptyMessage}>{t('favourites.empty')}</p>
        </div>
      : <div className={styles.productsList}>
          {favourites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      }
    </div>
  );
};
