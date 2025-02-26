import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  children,
  fullWidth = false
}) => {
  const className = `${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles['full-width'] : ''}`;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
