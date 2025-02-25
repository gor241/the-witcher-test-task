"use client";
import React from "react";
import styles from "./Checkbox.module.scss";

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  error,
}) => {
  return (
    <div className={styles['checkbox-wrapper']}>
      <label className={styles['checkbox-label']}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={`${styles['checkbox-input']} ${error ? styles.error : ""}`}
        />
        <span className={styles['custom-box']} />
        {label && <span className={styles['label-text']}>{label}</span>}
      </label>
      {error && <div className={styles['error-message']}>{error}</div>}
    </div>
  );
};
