'use client';

import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import React from 'react';
import styles from './page.module.scss'
import { ActorsSection } from '@/widgets/ActorsSection/ActorsSection';

export default function Home() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <div className="container">
        {/* <GallerySection /> */}
      </div>
        <ActorsSection />
      {/* <MapSection /> */}
    </main>
  );
}
