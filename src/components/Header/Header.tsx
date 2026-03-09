import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Icon } from '../common/Icon';
import { Link, NavLink } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { useCartStore } from '../../store/useCartStore';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { ThemeButton } from '../common/Buttons/ThemeButton/ThemeButton';
import { useThemeStore } from '../../store/useThemeStore';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import cn from 'classnames';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites } = useFavouritesStore();
  const totalCartItems = useCartStore((state) => state.totalItems());
  const { t } = useTranslation();

  const isDark = useThemeStore((state) => state.isDark);

  const whiteLogo = getCleanImagePath('/img/logo-white.svg');
  const darkLogo = getCleanImagePath('/img/logo-dark.svg');

  const navItems = [
    { to: '/', label: 'home' },
    { to: '/phones', label: 'phones' },
    { to: '/tablets', label: 'tablets' },
    { to: '/accessories', label: 'accessories' },
  ];

  return (
    <>
      <header className={styles.header}>
        <Link
          to="/"
          className={styles.logoContainer}
        >
          <img
            src={isDark ? whiteLogo : darkLogo}
            alt="NiceGadgets"
          />
        </Link>

        <nav className={styles.nav}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
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

        <div className={styles.buttons}>
          <div className={styles.iconButton}>
            <ThemeButton />
          </div>

          <div className={styles.iconButton}>
            <LanguageSwitcher />
          </div>

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              cn(styles.iconButton, {
                [styles.activeIcon]: isActive,
              })
            }
          >
            <Icon
              name="heart"
              strokeWidth={2}
            />

            {favourites.length > 0 && <span className={styles.badge}>{favourites.length}</span>}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn(styles.iconButton, {
                [styles.activeIcon]: isActive,
              })
            }
          >
            <Icon
              name="bag"
              strokeWidth={2}
            />

            {totalCartItems > 0 && <span className={styles.badge}>{totalCartItems}</span>}
          </NavLink>
        </div>

        <button
          className={styles.burger}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Icon
            name={isMenuOpen ? 'close' : 'menu'}
            strokeWidth={2}
          />
        </button>
      </header>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        favouritesCount={favourites.length}
        cartCount={totalCartItems}
      />
    </>
  );
};
