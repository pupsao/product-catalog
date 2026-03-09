import { Heart } from 'lucide-react';
import styles from './HeartButton.module.scss';

interface HeartButtonProps {
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export function HeartButton({
  selected,
  onClick,
  disabled,
  ariaLabel = 'Add to favorites',
}: HeartButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${styles.heartButton} ${selected ? styles.selected : ''}`}
    >
      <Heart className={styles.icon} />
    </button>
  );
}
