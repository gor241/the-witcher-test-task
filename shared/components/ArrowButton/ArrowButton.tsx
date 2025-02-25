"use client";
import React from "react";
import styles from "./ArrowButton.module.scss";

type ArrowButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
  endList?: boolean;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  onClick,
  endList
}) => {
  return (
    <button
      className={`${styles["arrow-button"]} ${styles[direction]} ${
        endList ? styles["end-list"] : ""
      }`}
      onClick={onClick}
      aria-label={direction === "left" ? "Предыдущий слайд" : "Следующий слайд"}
    >
      <svg
        className={styles["arrow-svg"]}
        width="18"
        height="32"
        viewBox="0 0 18 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.276 15.1219L2.47506 0.361867C1.99013 -0.121444 1.20501 -0.120631 0.720883 0.364367C0.237135 0.849302 0.238385 1.63486 0.723383 2.11855L14.6433 16L0.722883 29.8815C0.237947 30.3652 0.236697 31.1503 0.720383 31.6353C0.963069 31.8784 1.28101 32 1.59894 32C1.91607 32 2.23275 31.8792 2.475 31.6378L17.276 16.8782C17.5096 16.6458 17.6406 16.3295 17.6406 16C17.6406 15.6706 17.5092 15.3547 17.276 15.1219Z" />
      </svg>
    </button>
  );
};

