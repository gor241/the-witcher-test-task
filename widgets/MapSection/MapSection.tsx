'use client';
import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from './MapSection.module.scss';
import { useIsMobile } from '@/shared/hooks/useIsMobile';

export const MapSection: React.FC = () => {
  const isMobile = useIsMobile(997);

  const defaultCenter: [number, number] = [55.751574, 37.573856];
  const shops = [
    [55.760574, 37.615856],
    [55.745574, 37.565856],
    [55.775574, 37.585856],
  ];

  return (
    <section className={styles['map-section']}>
      <div className={`${styles['map-header']} container`}>
        <h2 className={styles.title}>Магазины мерча ведьмака</h2>
      </div>
      <div className={`${styles['map-wrapper']} ${isMobile ? '' : 'container'}`}>
        <YMaps
          query={{
            apikey: '4d14a6a8-1b0e-4ba6-83e5-d1fca29df963',
            lang: 'ru_RU',
          }}
        >
          <Map
            defaultState={{
              center: defaultCenter,
              zoom: 10,
            }}
            width="100%"
            height={isMobile ? '400px' : '500px'}
          >
            {shops.map((coords, idx) => (
              <Placemark
                key={idx}
                geometry={coords}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/icons/logo.svg',
                  iconImageSize: [40, 40],
                }}
                properties={{
                  hintContent: `Магазин #${idx + 1}`,
                  balloonContent: `Адрес магазина #${idx + 1}`,
                }}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </section>
  );
};
