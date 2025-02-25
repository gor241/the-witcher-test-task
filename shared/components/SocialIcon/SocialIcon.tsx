"use client";
import React from "react";
import styles from "./SocialIcon.module.scss";

type SocialIconType = "instagram" | "facebook" | "vk" | "twitter";

type SocialIconProps = {
  type: SocialIconType;
  onClick?: () => void;
};

export const SocialIcon: React.FC<SocialIconProps> = ({ type, onClick }) => {
  const iconSrc = {
    instagram: "/icons/instagram.svg",
    facebook: "/icons/facebook.svg",
    vk: "/icons/vk.svg",
    twitter: "/icons/twitter.svg",
  }[type];

  return (
    <div
    className={styles.icon}
    style={{ maskImage: `url(${iconSrc})`, WebkitMaskImage: `url(${iconSrc})` }}
    onClick={onClick}
    aria-label={type}
  />
  );
};
