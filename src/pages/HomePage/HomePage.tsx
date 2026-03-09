import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { BrandNewModelsCarousel } from '../../components/BrandNewModelsCarousel/BrandNewModelsCarousel';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPricesCarousel } from '../../components/HotPricesCarousel/HotPricesCarousel';
import { useTranslation } from 'react-i18next';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.visuallyHidden}>{t('home.catalog')}</h1>
      <h1 className={styles.welcomeTitle}>{t('home.welcome')}</h1>
      <ImageCarousel />
      <BrandNewModelsCarousel />
      <ShopByCategory />
      <HotPricesCarousel />
    </main>
  );
};
