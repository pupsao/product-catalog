import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { Icon } from '../../common/Icon';
import { ThemeButton } from '../../common/Buttons/ThemeButton/ThemeButton';
import { LanguageSwitcher } from '../../common/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  favouritesCount: number | undefined;
  cartCount: number | undefined;
};

export const BurgerMenu: React.FC<Props> = ({
  isOpen,
  onClose,
  favouritesCount = 0,
  cartCount = 0,
}) => {
  const { t } = useTranslation();
  const navItems = [
    { to: '/', label: 'home' },
    { to: '/phones', label: 'phones' },
    { to: '/tablets', label: 'tablets' },
    { to: '/accessories', label: 'accessories' },
  ];

  return (
    <div
      className={cn(styles.menu, {
        [styles.open]: isOpen,
      })}
    >
      <nav className={styles.nav}>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              cn(styles.navLink, 'uppercase', {
                [styles.active]: isActive,
              })
            }
          >
            {t(`nav.${label}`)}
          </NavLink>
        ))}
      </nav>

      <div className={styles.bottom}>
        <div className={styles.bottomButton}>
          <ThemeButton />
        </div>

        <div className={styles.bottomButton}>
          <LanguageSwitcher />
        </div>

        <NavLink
          to="/favorites"
          onClick={onClose}
          className={({ isActive }) =>
            cn(styles.bottomButton, {
              [styles.activeIcon]: isActive,
            })
          }
        >
          <div className={styles.iconWrapper}>
            <Icon
              name="heart"
              strokeWidth={2}
            />
            {favouritesCount > 0 && <span className={styles.badge}>{favouritesCount}</span>}
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          onClick={onClose}
          className={({ isActive }) =>
            cn(styles.bottomButton, {
              [styles.activeIcon]: isActive,
            })
          }
        >
          <div className={styles.iconWrapper}>
            <Icon
              name="bag"
              strokeWidth={2}
            />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
