'use client';

import { HeroSection } from '@/widgets/HeroSection/HeroSection';
import React from 'react';
import styles from './page.module.scss'
import { ActorsSection } from '@/widgets/ActorsSection/ActorsSection';
import { GallerySection } from '@/widgets/GallerySection/GallerySection';

export default function Home() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <ActorsSection />
      <div className="container">
        <GallerySection />
      </div>
      {/* <MapSection /> */}
    </main>
  );
}
