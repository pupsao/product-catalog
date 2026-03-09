import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Icon } from '../common/Icon';
import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  categoryName: string;
  productName?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ categoryName, productName }) => {
  const { t } = useTranslation();

  const translatedCategory = t(`products.category.${categoryName}`, {
    defaultValue: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
  });

  return (
    <nav
      className={styles.breadcrumbs}
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className={styles.home}
      >
        <Icon
          name="home"
          strokeWidth={2}
        />
      </Link>

      {categoryName && (
        <>
          <Icon
            name="chevronRight"
            strokeWidth={2}
            className={styles.separator}
          />

          {productName ?
            <Link
              to={`/${categoryName.toLowerCase()}`}
              className={styles.link}
            >
              {translatedCategory}
            </Link>
          : <span className={styles.current}>{translatedCategory}</span>}
        </>
      )}

      {productName && (
        <>
          <Icon
            name="chevronRight"
            strokeWidth={2}
            className={styles.separator}
          />
          <span className={styles.current}>{productName}</span>
        </>
      )}
    </nav>
  );
};
