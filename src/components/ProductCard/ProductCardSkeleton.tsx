import Skeleton from 'react-loading-skeleton';
import styles from './ProductCardSkeleton.module.scss';
const OPTIONS_SKELETON = [1, 2, 3];
export const ProductCardSkeleton = () => {
  return (
    <article className={styles.card}>
      <Skeleton className={styles.image} />
      <div className={styles.title}>
        <Skeleton height={16} />
        <Skeleton
          height={16}
          width="70%"
        />
      </div>

      <div className={styles.prices}>
        <Skeleton
          height={20}
          width={60}
        />
        <Skeleton
          height={18}
          width={50}
        />
      </div>

      <div className={styles.options}>
        {OPTIONS_SKELETON.map((i) => (
          <div
            key={i}
            className={styles.option}
          >
            <Skeleton
              width={50}
              height={12}
            />
            <Skeleton
              width={40}
              height={12}
            />
          </div>
        ))}
      </div>

      <div className={styles.buttons}>
        <Skeleton />
        <Skeleton circle />
      </div>
    </article>
  );
};
