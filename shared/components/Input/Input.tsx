import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  label?: string; 
  type?: string;
  value: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  placeholder,
  error,
  disabled = false,
  onChange,
  className,
}) => {

  const hasValue = Boolean(value);

  return  (
    <div className={`${styles['input-wrapper']} ${className || ""}`}>
      <div className={styles['field-container']}>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={`${styles.input} ${error ? styles.error : ""}`}
        />
        {label && (
          <label
            className={`${styles['floating-label']} ${
              hasValue ? styles.floating : ""
            }`}
          >
            {label}
          </label>
        )}
      </div>

      <div className={styles['error-container']}>
        {error && <span className={styles['error-message']}>{error}</span>}
      </div>
    </div>
  );
};
