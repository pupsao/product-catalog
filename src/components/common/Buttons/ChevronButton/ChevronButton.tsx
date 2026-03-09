import classNames from 'classnames';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ChevronButton.module.scss';

interface ChevronButtonProps {
  direction?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export function ChevronButton({
  direction = 'right',
  onClick,
  disabled,
  ariaLabel,
  className,
}: ChevronButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || direction}
      className={classNames(styles.chevronButton, className)}
    >
      <Icon className={styles.icon} />
    </button>
  );
}
