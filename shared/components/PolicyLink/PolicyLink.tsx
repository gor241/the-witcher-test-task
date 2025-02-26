"use client";
import React from "react";
import styles from "./PolicyLink.module.scss";
import { useDispatch } from 'react-redux';
import { openPolicyModal } from '@/features/ui/uiSlice';

type PolicyLinkProps = {
  multiline?: boolean;
};

export const PolicyLink: React.FC<PolicyLinkProps> = ({
  multiline = false,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPolicyModal());
  };
  return (
    <button className={styles['policy-link']} onClick={handleClick}>
      {multiline ? (
        <>
          Политика обработки <br /> персональных данных
        </>
      ) : (
        'Политика обработки персональных данных'
      )}
    </button>
  );
};
