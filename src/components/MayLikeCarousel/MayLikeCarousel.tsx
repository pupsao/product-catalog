import styles from './MayLikeCarousel.module.scss';
import '../../assets/styles/variables.scss';
import { ChevronButton } from '../common/Buttons';
import { Slider } from '../Slider/Slider';
import { useTranslation } from 'react-i18next';
import { useProductStore } from '../../store/useProductStore';

export const MayLikeCarousel = () => {
  const mayLikeProducts = useProductStore((state) => state.mayLikeProducts);
  const { t } = useTranslation();
  return (
    <div className={styles.banner}>
      <h2>{t('productDetails.mayLike')}</h2>
      <ChevronButton
        direction="left"
        className={styles['js-prev']}
      />
      <ChevronButton
        direction="right"
        className={styles['js-next']}
      />
      <Slider data={mayLikeProducts} />
    </div>
  );
};
