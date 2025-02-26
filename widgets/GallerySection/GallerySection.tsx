'use client';
import React, { useState } from 'react';
import styles from './GallerySection.module.scss';
import { shotsData } from '@/entities/shots/model/mockShots';
import { Button } from '@/components//Button/Button';

export const GallerySection: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const visibleShots = shotsData.slice(0, visibleCount);


  return (
    <section className={styles['shots-section']}>
      <div className="container">
        <h2 className={styles.title}>Кадры со съемок</h2>
        <div className={styles.gallery}>
          {visibleShots.map((shot, index) => {
            return (
              <div
                key={shot.id}
                className={
                  index === 0 ? styles['big-shot'] : styles['small-shot']
                }
              >
                <img src={shot.src} alt={shot.alt} />
              </div>
            );
          })}
        </div>
        <div className={styles.btn}>
          <Button fullWidth variant="secondary" onClick={handleShowMore}>
            Показать ещё
          </Button>
        </div>
      </div>
    </section>
  );
};
