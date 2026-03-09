import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Icon } from '../common/Icon';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { useTranslation } from 'react-i18next';

interface Props {
  isDark: boolean;
}

export const Footer: React.FC<Props> = ({ isDark }: Props) => {
  const whiteLogo = getCleanImagePath('/img/logo-white.svg');
  const darkLogo = getCleanImagePath('/img/logo-dark.svg');

  const { t } = useTranslation();
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link
          to="/"
          className={styles.logo}
        >
          <img
            src={isDark ? whiteLogo : darkLogo}
            alt="NiceGadgets"
          />
        </Link>

        <nav className={`${styles.links} uppercase`}>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
          >
            {t('footer.about')}
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
          >
            {t('footer.contacts')}
          </NavLink>

          <NavLink
            to="/privacy"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
          >
            {t('footer.privacy')}
          </NavLink>
        </nav>

        <div className={styles.backToTop}>
          <span className={`small-text`}>{t('footer.backToTop')}</span>
          <button
            onClick={handleBackToTop}
            className={styles.topButton}
          >
            <Icon
              name="chevronUp"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
