import styles from './HotPricesCarousel.module.scss';
import '../../assets/styles/variables.scss';
import { ChevronButton } from '../common/Buttons';
import { Slider } from '../Slider/Slider';
import { useProductStore } from '../../store/useProductStore';
import { useTranslation } from 'react-i18next';

export const HotPricesCarousel = () => {
  const discountProducts = useProductStore((state) => state.discountProducts);
  const { t } = useTranslation();
  return (
    <div className={styles.banner}>
      <h2>{t('home.hotPrices')}</h2>
      <ChevronButton
        direction="left"
        className={styles['js-prev']}
      />
      <ChevronButton
        direction="right"
        className={styles['js-next']}
      />
      <Slider data={discountProducts} />
    </div>
  );
};
