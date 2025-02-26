'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/shared/store/store';
import { toggleDarkMode } from '@/features/ui/uiSlice';

import { Button } from '@/shared/components/Button/Button';
import { Input } from '@/shared/components/Input/Input';
import { Select } from '@/shared/components/Select/Select';
import { Textarea } from '@/shared/components/Textarea/Textarea';
import { Checkbox } from '@/shared/components/Checkbox/Checkbox';
import { ArrowButton } from '@/components//ArrowButton/ArrowButton';
import { PolicyLink } from '@/components//PolicyLink/PolicyLink';
import { SocialIcon } from '@/components//SocialIcon/SocialIcon';

const cityOptions = [
  { value: 'moscow', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'kazan', label: 'Казань' },
  { value: 'krasnodar', label: 'Краснодар' },
  { value: 'rostov', label: 'Ростов-на-Дону' },
];

export default function Home() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [comment, setComment] = useState('');
  const [agree, setAgree] = useState(false);

  const [nameError, setNameError] = useState('');
  const [cityError, setCityError] = useState('');

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) setNameError('Введите имя');
    else setNameError('');

    if (!city) setCityError('Выберите город');
    else setCityError('');
  };

  return (
    <main style={{ padding: '20px 0' }}>
      <div className="container">
        <h1>UI Components Testing</h1>
        <p>Dark Mode is {darkMode ? 'ON' : 'OFF'}</p>
        <Button variant="primary" onClick={handleDarkModeToggle}>
          Toggle Dark Mode
        </Button>

        <hr style={{ margin: '20px 0' }} />

        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="primary" size="small">
            Primary Small
          </Button>
          <Button variant="primary" size="medium">
            Primary Medium
          </Button>
          <Button variant="primary" size="large">
            Primary Large
          </Button>
          <Button variant="secondary" size="medium">
            Secondary Medium
          </Button>
        </div>

        <hr style={{ margin: '20px 0' }} />

        <h2>Form Elements</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
          {/* Пример inline полей (email + phone) */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <Input
              label="Email"
              type="email"
              value={email}
              placeholder="Введите email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Телефон"
              type="tel"
              value={phone}
              placeholder="+7 (___) ___-__-__"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <Input
            label="Имя"
            value={name}
            placeholder="Введите имя"
            error={nameError}
            onChange={(e) => {
              setName(e.target.value);
              if (nameError) setNameError('');
            }}
          />

          <Select
            options={cityOptions}
            value={city}
            placeholder="Выберите город"
            error={cityError}
            onChange={(val) => {
              setCity(val);
              if (cityError) setCityError('');
            }}
          />

          <Textarea
            label="Комментарий"
            value={comment}
            placeholder="Введите комментарий"
            onChange={(e) => setComment(e.target.value)}
          />

          <Checkbox
            label="Даю согласие на обработку моих персональных данных"
            checked={agree}
            onChange={(checked) => setAgree(checked)}
          />

          <ArrowButton direction="left" onClick={() => {}} />

          <div>
            <PolicyLink />
          </div>

          <h2>Social Icons</h2>
          <SocialIcon type="instagram" />
          <SocialIcon type="facebook" />
          <SocialIcon type="vk" />

          <div style={{ marginTop: '16px' }}>
            <Button variant="primary" size="medium">
              Отправить заявку
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
