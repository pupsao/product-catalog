import type { ReactNode } from 'react';
import styles from './PrimaryButton.module.scss';

interface PrimaryButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  selected?: boolean;
  type?: 'button' | 'submit';
}

export function PrimaryButton({
  onClick,
  disabled,
  children,
  selected = false,
  type = 'button',
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.primaryButton} ${selected ? styles.selected : ''}`}
    >
      {children}
    </button>
  );
}
