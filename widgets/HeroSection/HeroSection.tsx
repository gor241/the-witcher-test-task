"use client";
import React from "react";
import styles from "./HeroSection.module.scss";
import { Button } from "@/shared/components/Button/Button";

export const HeroSection: React.FC = () => {
  return (
    <section className={styles['hero-section']}>
      <div className="container">
        <h1 className={styles.title}>Сериал Ведьмак</h1>
        <p className={styles.description}>
          Геральт из Ривии, наёмный охотник за чудовищами, перенесший мутации,
          идёт навстречу своей судьбе в неспокойном мире, где люди часто оказываются
          куда коварнее чудовищ.
        </p>
        <Button variant="primary" size="medium">
          Смотреть сериал
        </Button>
      </div>
    </section>
  );
};
