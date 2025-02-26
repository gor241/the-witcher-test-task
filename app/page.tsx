'use client';

import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import React from 'react';
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <div className="container">
        {/* <ActorsSection />
        <GallerySection /> */}
      </div>
      {/* <MapSection /> */}
    </main>
  );
}
