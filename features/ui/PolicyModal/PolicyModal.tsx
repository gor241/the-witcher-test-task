"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/shared/store/store";
import { closePolicyModal } from "@/features/ui/uiSlice";
import styles from "./PolicyModal.module.scss";
import Image from "next/image";

export const PolicyModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.isPolicyOpen);

   const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        dispatch(closePolicyModal());
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, dispatch]);

     if (!isOpen && !isClosing) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={`${styles.backdrop} ${isClosing ? styles['fade-out'] : styles['fade-in']}`}
    onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {/* Кнопка (иконка) закрытия в правом верхнем углу */}
        <button
          className={styles['close-btn']}
          onClick={handleClose}
          aria-label="Закрыть"
        >
        <Image src='/icons/close.svg'
        alt='close-icon'
        className={styles.image} width={24} height={24}/>
        </button>

        <h2 className={styles.title}>Обработка данных</h2>

        <div className={styles.content}>
          {/* Здесь ваш полный текст политики, согласно макету */}
          <div className={styles['paragraph-blocks']}>
            <p className={styles['bold-paragraph']}>1. Что регулирует настоящая политика конфиденциальности</p>
            <p className={styles['norm-paragraph']}>Настоящая политика конфиденциальности (далее — Политика) действует в отношении всей информации, включая персональные данные в понимании применимого законодательства (далее — «Персональная информация»), которую ООО «Гросс маркет» и/или его аффилированные лица, в том числе входящие в одну группу с ООО «Гросс маркет» (далее — «Гросс маркет»), могут получить о Вас в процессе использования Вами любых сайтов, программ, продуктов и/или сервисов Гросс маркет (далее вместе  «Сервисы»), информацию о которых Гросс маркет может также получать Персональную информацию от своих партнеров (далее — «Партнеры»), сайты, программы, продукты или сервисы которых Вы используете (например, от рекламодателей Гросс маркет или службами такси). В таких случаях передача Персональной информации возможна только в случаях, установленных применимым законодательством, и осуществляется на основании специальных договоров между Гросс маркет и каждым из Партнеров.</p>
            <p className={styles['norm-paragraph']}>Пожалуйста, обратите внимание, что использование любого из Сайтов и/или Сервисов может регулироваться дополнительными условиями, которые могут вносить в настоящую Политику изменения и/или дополнения, и/или иметь специальные условия в отношении персональной информации, размещенные в соответствующих разделах документов для таких Сайтов /или Сервисов.</p>
          </div>
          <div className={styles['paragraph-blocks']}>
            <p className={styles['bold-paragraph']}>2. Кто обрабатывает информацию</p>
            <p className={styles['norm-paragraph']}>Для обеспечения использования Вами Сайтов и Сервисов Ваша Персональная информация собирается и используется Яндексом, в том числе включая общество с ограниченной ответственностью «Гросс маркет», юридическое лицо, созданное по законодательству Российской Федерации и зарегистрированное по адресу: 123351, Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его аффилированным лицом, предоставляющим соответствующий Сервис в иных юрисдикциях. С информацией о том, какое лицо предоставляет тот или иной Сервис, Вы можете ознакомиться в условиях использования соответствующего Сервиса.</p>
          </div>
          <div className={styles['paragraph-blocks']}>
            <p className={styles['bold-paragraph']}>3. Какова цель данной Политики</p>
            <p className={styles['norm-paragraph']}>Защита Вашей Персональной информации и Вашей конфиденциальности чрезвычайно важны для Гросс маркета. Поэтому при использовании Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу Персональную информацию в строгом соответствии с применимым законодательством.</p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
