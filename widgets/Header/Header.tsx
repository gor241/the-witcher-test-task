"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/shared/components/Button/Button";
import styles from "./Header.module.scss";
import { useIsMobile } from "@/shared/hooks/useIsMobile";
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const isMobile = useIsMobile(768);
  const pathname = usePathname();
  const showButton = pathname === '/';

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/images/header-log.png"
          alt="Ведьмак"
          width={isMobile ? 106.36 : 130}
          height={isMobile ? 36 : 44}
          priority
        />
      </Link>

      <div className={styles.actions}>
        {showButton ? (
          <Link href="/request" className={styles.button}>
            <Button variant="secondary" size={isMobile ? 'small' : 'medium'}>
              Подключить подписку
            </Button>
          </Link>
        ) : (
          <div className={styles.placeholder}></div>
        )}
      </div>
    </header>
  );
};
