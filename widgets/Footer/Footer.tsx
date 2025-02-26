"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { PolicyLink } from "@/shared/components/PolicyLink/PolicyLink";
import { SocialIcon } from "@/shared/components/SocialIcon/SocialIcon";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {

  const isMobile = useIsMobile(768);
  const handlePolicyClick = () => {
    // openModal();
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
      {isMobile ? (
          <div className={styles['mobile-footer']}>
            <div className={styles['top-row']}>
              <Link href="/" className={styles['logo-link']}>
                <Image
                  src="/images/header-log.png"
                  alt="Ведьмак"
                  width={100}
                  height={30}
                />
              </Link>
              <div className={styles.socials}>
                <SocialIcon type="instagram" />
                <SocialIcon type="facebook" />
                <SocialIcon type="vk" />
              </div>
            </div>

            <div className={styles['bottom-row']}>
              <PolicyLink onClick={handlePolicyClick} multiline={!isMobile} />
            </div>
          </div>
        ) : (
          <div className={styles['desktop-footer']}>
            <Link href="/" className={styles['logo-link']}>
              <Image
                src="/images/header-log.png"
                alt="Ведьмак"
                width={130}
                height={44}
              />
            </Link>

            <PolicyLink onClick={handlePolicyClick} multiline={!isMobile} />

            <div className={styles.socials}>
              <SocialIcon type="instagram" />
              <SocialIcon type="facebook" />
              <SocialIcon type="vk" />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
