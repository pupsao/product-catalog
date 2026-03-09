import { Moon, Sun } from 'lucide-react';
import styles from './ThemeButton.module.scss';
import { useThemeStore } from '../../../../store/useThemeStore';

interface ThemeButtonProps {
  className?: string;
}

export function ThemeButton({ className }: ThemeButtonProps) {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`${styles.themeButton} ${className || ''}`}
    >
      {isDark ?
        <Sun
          strokeWidth={2}
          className={styles.icon}
        />
      : <Moon
          strokeWidth={2}
          className={styles.icon}
        />
      }
    </button>
  );
}
