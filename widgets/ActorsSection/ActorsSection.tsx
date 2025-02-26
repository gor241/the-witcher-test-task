'use client';
import React, { useRef, useState, useEffect } from 'react';
import styles from './ActorsSection.module.scss';
import { ArrowButton } from '@/shared/components/ArrowButton/ArrowButton';
import { actorsData } from '@/entities/actor/model/mockActors';
import { ActorCard } from './ActorCard/ActorCard';

export const ActorsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardFullWidth, setCardFullWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      const cardElements = trackRef.current.children;
      if (cardElements.length > 1) {
        const firstCard = cardElements[0] as HTMLElement;
        const secondCard = cardElements[1] as HTMLElement;

        const distance = secondCard.offsetLeft - firstCard.offsetLeft;
        setCardFullWidth(distance);
      } else if (cardElements.length === 1) {
        const firstCard = cardElements[0] as HTMLElement;
        setCardFullWidth(firstCard.offsetWidth);
      }
    }
  }, []);

  const [windowWidth, setWindowWidth] = useState<number>(1920);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialOffset = windowWidth <= 1200 ? 16 : (windowWidth - 1200) / 2 + 16;

  const totalCards = actorsData.length;
  const maxIndex = totalCards > 0 ? totalCards - 1 : 0;
  const progress = maxIndex > 0 ? (currentIndex / maxIndex) * 100 : 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === maxIndex;

  return (
    <section className={styles['actors-section']}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Актерский состав</h2>
          <div className={styles.arrows}>
            <ArrowButton
              direction="left"
              onClick={handlePrev}
              endList={isAtStart}
            />
            <ArrowButton
              direction="right"
              onClick={handleNext}
              endList={isAtEnd}
            />
          </div>
        </div>
        <div className={styles['progress-bar']}>
          <div
            className={styles['progress-fill']}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={styles['slider-wrapper']}>
        <div className={styles['slider-container']}>
          <div
            ref={trackRef}
            className={styles['slider-track']}
            style={{
              transform: `translateX(${initialOffset - currentIndex * cardFullWidth}px)`,
            }}
          >
            {actorsData.map((actor) => (
              <ActorCard
                key={actor.id}
                heroName={actor.heroName}
                actorName={actor.actorName}
                description={actor.description}
                image={actor.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
