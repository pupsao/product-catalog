import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleToggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'uk' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      className={styles.switcher}
      onClick={handleToggleLanguage}
    >
      {i18n.language === 'en' ? 'UA' : 'EN'}
    </button>
  );
};
