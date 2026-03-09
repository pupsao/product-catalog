import Skeleton from 'react-loading-skeleton';
import styles from './DetailPageSkeleton.module.scss';
const THUMBNAILS_COUNT = 4;
const OPTIONS_COUNT = 3;
const DETAILS_COUNT = 2;
const TITLE_COUNT = 8;
export const DetailPageSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton className={styles.backButton} />

      <Skeleton className={styles.title} />

      <div className={styles.mainContent}>
        <div className={styles.gallery}>
          <div className={styles.thumbnails}>
            {Array.from({ length: THUMBNAILS_COUNT }).map((_, i) => (
              <Skeleton
                key={i}
                className={styles.thumbnail}
              />
            ))}
          </div>
          <div className={styles.mainImage}>
            <Skeleton className={styles.mainImageBox} />
          </div>
        </div>

        <div className={styles.infoPanel}>
          <Skeleton className={styles.optionTitle} />
          <div className={styles.colorOptions}>
            {Array.from({ length: THUMBNAILS_COUNT }).map((_, i) => (
              <Skeleton
                key={i}
                className={styles.colorCircle}
              />
            ))}
          </div>

          <Skeleton className={styles.optionTitle} />
          <div className={styles.capacityOptions}>
            {Array.from({ length: OPTIONS_COUNT }).map((_, i) => (
              <Skeleton
                key={i}
                className={styles.capacityButton}
              />
            ))}
          </div>

          <div className={styles.purchaseSection}>
            <Skeleton className={styles.priceBox} />
            <div className={styles.actions}>
              <Skeleton className={styles.addToCartButton} />
              <Skeleton className={styles.heartButton} />
            </div>
          </div>

          <div className={styles.specsShort}>
            {Array.from({ length: THUMBNAILS_COUNT }).map((_, i) => (
              <Skeleton
                key={i}
                className={styles.specLine}
              />
            ))}
          </div>

          <Skeleton className={styles.itemId} />
        </div>
      </div>

      <div className={styles.detailsSection}>
        <Skeleton className={styles.sectionTitle} />
        {Array.from({ length: DETAILS_COUNT }).map((_, i) => (
          <div
            key={i}
            className={styles.descriptionItem}
          >
            <Skeleton className={styles.descriptionTitle} />
            <Skeleton className={styles.descriptionText} />
          </div>
        ))}

        <Skeleton className={styles.sectionTitle} />
        {Array.from({ length: TITLE_COUNT }).map((_, i) => (
          <Skeleton
            key={i}
            className={styles.techSpecLine}
          />
        ))}
      </div>

      <Skeleton className={styles.hotPricesCarousel} />
    </div>
  );
};
