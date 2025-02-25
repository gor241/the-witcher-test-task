"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  value: string;
  placeholder?: string; 
  error?: string;
  onChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  placeholder = "Выберите город",
  onChange,
  error,
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["select-wrapper"]}>
      <div
        className={`${styles["select-header"]} ${error ? styles.error : ""}`}
        onClick={toggleOpen}
      >
        <span>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={`${styles.arrow} ${open ? styles.open : ""}`} />
      </div>

      <ul className={`${styles["options-list"]} ${open ? styles["open-list"] : ""}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={`
                ${styles["option-item"]} 
                ${option.value === value ? styles["selected-option"] : ""}
              `}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>

      {error && <div className={styles["error-message"]}>{error}</div>}
    </div>
  );
};
