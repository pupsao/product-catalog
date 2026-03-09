import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className={styles.notFound}>
      <img
        src={getCleanImagePath('page-not-found.png')}
        alt="Not found page"
        className={styles.image}
      />
      <h1 className={styles.title}>{t('notFound.title')}</h1>
    </main>
  );
};
