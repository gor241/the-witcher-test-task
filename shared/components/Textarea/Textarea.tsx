"use client";
import React from "react";
import styles from "./Textarea.module.scss";

type TextareaProps = {
  label?: string;
  value: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className={styles['textarea-wrapper']}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        className={`${styles.textarea} ${error ? styles.error : ""}`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      {error && <div className={styles['error-message']}>{error}</div>}
    </div>
  );
};
