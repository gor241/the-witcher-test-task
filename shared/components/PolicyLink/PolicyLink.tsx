"use client";
import React from "react";
import styles from "./PolicyLink.module.scss";

type PolicyLinkProps = {
  onClick?: () => void;
  multiline?: boolean;
};

export const PolicyLink: React.FC<PolicyLinkProps> = ({ onClick, multiline = false }) => {
  return  (
    <button className={styles["policy-link"]} onClick={onClick}>
      {multiline ? (
        <>
          Политика обработки <br /> персональных данных
        </>
      ) : (
        "Политика обработки персональных данных"
      )}
    </button>
  );
};
