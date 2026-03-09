import styles from './NumberButton.module.scss';

interface NumberButtonProps {
  text: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function NumberButton({ text, selected, onClick, disabled }: NumberButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${styles.numberButton} ${selected ? styles.selected : ''}`}
    >
      {text}
    </button>
  );
}
