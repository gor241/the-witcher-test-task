"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/shared/store/store";
import styles from "./RequestPage.module.scss";
import { submitForm } from "@/shared/store/slices/formSlice";
import { Button } from "@/components//Button/Button";
import { Select } from "@/components//Select/Select";
import { Input } from "@/components//Input/Input";
import { Textarea } from "@/components//Textarea/Textarea";
import { Checkbox } from "@/components//Checkbox/Checkbox";
import Image from "next/image";
import { useIsMobile } from "@/shared/hooks/useIsMobile";

interface FormData {
  city: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  fileName?: string;
  consent: boolean;
}

const cityOptions = [
  { value: "", label: "Выберите город" },
  { value: "moscow", label: "Москва" },
  { value: "spb", label: "Санкт-Петербург" },
  { value: "kazan", label: "Казань" },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RequestPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const isMobile = useIsMobile()
  const { status } = useSelector((state: RootState) => state.form);

  // Флаг успешной отправки
  const isSuccess = status === "success";
  const isLoading = status === "loading";

  const {
    handleSubmit,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      city: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      fileName: "",
      consent: true, 
    },
  });

  const cityValue = watch("city");
  const nameValue = watch("name");
  const emailValue = watch("email");
  const phoneValue = watch("phone");
  const messageValue = watch("message");
  const fileNameValue = watch("fileName");
  const consentValue = watch("consent");
  const hasError = Object.keys(errors).length > 0;
  
  const onSubmit = () => {
    
    let hasError = false;
    clearErrors(); // Сбрасываем ошибки перед новой проверкой
  
    // Город
    if (!cityValue) {
      setError("city", { type: "manual", message: "Выберите город" });
      hasError = true;
    }
    // Имя
    if (!nameValue) {
      setError("name", { type: "manual", message: "Введите имя" });
      hasError = true;
    } else if (nameValue.length < 2) {
      setError("name", { type: "manual", message: "Имя слишком короткое" });
      hasError = true;
    }
    // Email
    if (!emailValue) {
      setError("email", { type: "manual", message: "Введите email" });
      hasError = true;
    } else if (!emailRegex.test(emailValue)) {
      setError("email", { type: "manual", message: "Некорректный email" });
      hasError = true;
    }
    // Телефон
    if (!phoneValue) {
      setError("phone", { type: "manual", message: "Введите телефон" });
      hasError = true;
    } else if (phoneValue.length < 7) {
      setError("phone", { type: "manual", message: "Некорректный телефон" });
      hasError = true;
    }
    // Сообщение
    if (!messageValue) {
      setError("message", { type: "manual", message: "Введите сообщение" });
      hasError = true;
    }
    // Согласие
    if (!consentValue) {
      setError("consent", { type: "manual", message: "Необходимо согласие" });
      hasError = true;
    }
  
    if (hasError) return;
  
    // Если нет ошибок, отправляем
    const formData: FormData = {
      city: cityValue,
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      message: messageValue,
      fileName: fileNameValue,
      consent: consentValue,
    };
    dispatch(submitForm(formData));
  };
  
  useEffect(() => {
    if (cityValue) clearErrors("city");
    if (nameValue && nameValue.length >= 2) clearErrors("name");
    if (emailValue && emailRegex.test(emailValue)) clearErrors("email");
    if (phoneValue && phoneValue.length >= 7) clearErrors("phone");
    if (messageValue) clearErrors("message");
    if (consentValue) clearErrors("consent");
  }, [
    cityValue,
    nameValue,
    emailValue,
    phoneValue,
    messageValue,
    consentValue,
    clearErrors,
  ]);

  const handleCityChange = (val: string) => {
    setValue("city", val, { shouldValidate: true });
  };

  const handleConsentChange = (checked: boolean) => {
    setValue("consent", checked, { shouldValidate: true });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setValue("fileName", e.target.files[0].name, { shouldValidate: true });
    }
  };

  if (isSuccess) {
    return (
      <section className={styles['success-section']}>
        <div className={`${styles['success-container']} container`}>
          <div className={styles['success-block']}>
            <h1 className={styles.h1}>Заявка отправлена!</h1>
            <h4 className={styles.h4}>Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</h4>
            <div className={styles['btn-box']}>
            <Button variant="primary" size="medium" onClick={() => router.push("/")}>
            Вернуться на главную
            </Button>
            </div>
          </div>
          <div className={styles['info-block']}>
            <div className={styles['text-block']}>
              <p className={styles.paragraph}>Наша горячая линия</p>
              <h2 className={styles.h2}>8 800 38 23 112</h2>
            </div>
            <div className={styles['text-block']}>
              <p className={styles.paragraph}>Главный офис</p>
              <h2  className={styles.h2}>г. Москва, Садовническая ул., 80</h2>
            </div>
            <div className={styles['text-block']}>
              <p className={styles.paragraph}>Часы работы</p>
              <h2 className={styles.h2}>Пн-Пт c 10:00 до 22:00</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles['request-section']}>
      <div className="container">
        <h1 className={styles.h1}>Оставьте заявку</h1>
        <div className={styles['form-wrapper']}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Select
              options={cityOptions}
              value={cityValue}
              placeholder="Выберите город"
              onChange={handleCityChange}
              error={errors.city?.message}
            />

            <Input
              label="Имя"
              placeholder="Введите имя"
              error={errors.name?.message}
              value={watch("name")}
              onChange={(e) => {
                setValue("name", e.target.value, { shouldValidate: true });
              }}
            />

<div className={styles["row-box"]}>

            <Input
              label="Email"
              placeholder="Введите email"
              error={errors.email?.message}
              value={watch("email")}
              onChange={(e) => setValue("email", e.target.value, { shouldValidate: true })}
            />

            <Input
              label="Телефон"
              placeholder="+7 (___) ___-__-__"
              error={errors.phone?.message}
              value={watch("phone")}
              onChange={(e) => setValue("phone", e.target.value, { shouldValidate: true })}
            />
</div>

            <Textarea
              placeholder="Сообщение"
              error={errors.message?.message}
              value={watch("message")}
              onChange={(e) => setValue("message", e.target.value, { shouldValidate: true })}
            />

                <div className={styles['file-field']}>
                <label className={`${styles['file-label']} ${hasError ? styles['file-error'] : ''}`}>
                <input type="file" onChange={handleFileChange} />
                <span className={styles['file-placeholder']}>
                  {watch("fileName") || "Прикрепите файл"}
                </span>
                <Image
                  src="/icons/paperclip.svg"
                  alt="clip-icon"
                  className={styles['file-icon']}
                  width={24}
                  height={24}
                />
              </label>
            </div>

            <Checkbox
              label="Даю согласие на обработку своих персональных данных"
              checked={consentValue}
              onChange={handleConsentChange}
              error={hasError}
            />

            <div className={styles['btn-box']}>
              <Button variant="primary" size="medium" disabled={isLoading} fullWidth={isMobile}>
                {isLoading ? "Отправка..." : "Отправить заявку"}
              </Button>
            </div>
          </form>

          <div className={styles['info-block']}>
            <div className={styles['text-block']}>
              <p className={styles.paragraph}>Наша горячая линия</p>
              <h2 className={styles.h2}>8 800 38 23 112</h2>
            </div>
            <div className={styles['text-block']}>
              <p className={styles.paragraph}>Главный офис</p>
              <h2  className={styles.h2}>г. Москва, Садовническая ул., 80</h2>
            </div>
            <div className={styles['text-block']}>
              <p className={styles.paragraph}>Часы работы</p>
              <h2 className={styles.h2}>Пн-Пт c 10:00 до 22:00</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
