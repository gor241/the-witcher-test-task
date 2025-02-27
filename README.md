# Witcher Project – Test Task

Это тестовое задание для фронтенд-разработчика. Проект представляет собой SPA/SSR-приложение, реализованное с использованием Next.js, React, TypeScript, Redux Toolkit, React Hook Form, SCSS и других современных библиотек.

## Функциональность

**Главная страница** включает:
- **HeroSection** – верхняя секция с крупным фоновым изображением, заголовком и кнопкой для перехода на страницу заявки.
- **ActorsSection** – слайдер с карточками актёров (фиксированные размеры карточек, адаптивное поведение).
- **GallerySection** – галерея кадров со съемок, где первая картинка большая, а остальные маленькие, с возможностью подгрузки дополнительных изображений.
- **MapSection** – страница с интерактивной картой (реализованной с помощью React Leaflet) с маркерами магазинов мерча.

**Страница заявки** включает:
- Форму для отправки заявки, которая использует React Hook Form и кастомные UI-компоненты (Input, Select, Textarea, Checkbox, Button).
- Валидацию обязательных полей (город, имя, email, телефон, сообщение, согласие), при этом поле файла не обязательно.
- Имитацию отправки заявки через Redux Toolkit (статусы: idle, loading, success, error). При успешной отправке отображается сообщение «Заявка отправлена!» с контактной информацией и кнопкой возврата на главную.
- Адаптивное расположение полей: на ПК Email и Телефон располагаются в одну строку, а на планшете и мобильном — по столбцам.

**Модальное окно (PolicyModal)**:
- Попап с информацией о политике обработки персональных данных, который открывается по клику на ссылку PolicyLink.
- Реализован через React Portal с плавными анимациями открытия и закрытия.
- Закрывается по клику на кнопку закрытия или вне модального окна.

## Технологии и библиотеки

- **Next.js** – для SSR/SPA приложения.
- **React** – для построения UI.
- **TypeScript** – для статической типизации.
- **Redux Toolkit** – для управления состоянием.
- **React Hook Form** – для работы с формами и валидации.
- **React Leaflet & Leaflet** – для отображения интерактивной карты.
- **SCSS** – модульная стилизация.
- **Turbopack** – для быстрого запуска разработки.

## Структура проекта

/app
├─ layout.tsx          // Глобальный layout: Header, Footer, PolicyModal, Providers
├─ page.tsx            // Главная страница (HeroSection, ActorsSection, GallerySection, MapSection)
└─ /request
   ├─ page.tsx         // Страница заявки
   └─ /success
      └─ page.tsx      // Страница "Заявка отправлена!"

/components
├─ Button
├─ Input
├─ Select
├─ Textarea
├─ Checkbox
└─ SocialIcon

/features
├─ form
│  └─ formSlice.ts     // Redux-slice для обработки заявки
└─ ui
   └─ uiSlice.ts       // Redux-slice для управления UI (например, модалка PolicyModal)

/entities
├─ actor
│  └─ model
│     └─ mockActors.ts // Мок-данные актёров
└─ shots
   └─ model
      └─ mockShots.ts  // Мок-данные для галереи

/shared
├─ store
│  └─ store.ts         // Redux store
└─ hooks
   └─ useIsMobile.ts   // Хук для определения мобильного режима

/widgets
├─ Header
│  └─ Header.tsx
├─ Footer
│  └─ Footer.tsx
├─ HeroSection
├─ ActorsSection
├─ GallerySection
└─ MapSection

## Установка и запуск

1. **Клонируйте репозиторий:**
   git clone <URL>
   cd the-witcher-test-task
   npm install -f 

   Запустите проект в режиме разработки:
   npm run dev

   Собрать проект для production:
   npm run build
   npm run start