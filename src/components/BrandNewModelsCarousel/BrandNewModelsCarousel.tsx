import styles from './BrandNewModelsCarousel.module.scss';
import '../../assets/styles/variables.scss';
import { ChevronButton } from '../common/Buttons';
import { useProductStore } from '../../store/useProductStore';
import { Slider } from '../Slider/Slider';
import { useTranslation } from 'react-i18next';

export const BrandNewModelsCarousel = () => {
  const brandNewProducts = useProductStore((state) => state.brandNewProducts);

  const { t } = useTranslation();

  return (
    <div className={styles.banner}>
      <h2>{t('home.brandNew')}</h2>
      <ChevronButton
        direction="left"
        className={styles['js-prev']}
      />
      <ChevronButton
        direction="right"
        className={styles['js-next']}
      />
      <Slider data={brandNewProducts} />
    </div>
  );
};
