"use client";
import React from "react";
import Image from "next/image";
import styles from "./ActorCard.module.scss";

type ActorCardProps = {
  heroName: string;
  actorName: string;
  description: string;
  image: string;
};

export const ActorCard: React.FC<ActorCardProps> = ({
  heroName,
  actorName,
  description,
  image,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={heroName}
        fill
        className={styles.image}
        sizes="(max-width: 360px) 216px,
               (max-width: 768px) 258px,
               282px"
      />
      <div className={styles["text-overlay"]}>
        <div className={styles["top-texts"]}>
          <p className={styles["hero-name"]}>{heroName}</p>
          <p className={styles["actor-name"]}>{actorName}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
