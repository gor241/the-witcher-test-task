'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/shared/store/store';
import { toggleDarkMode } from '@/features/ui/uiSlice';

export default function Home() {
  const darkMode = useSelector((state: RootState) => state.ui.darkMode);
  const dispatch = useDispatch();

  return (
    <main>
      <h1>Dark Mode is {darkMode ? 'ON' : 'OFF'}</h1>
      <button onClick={() => dispatch(toggleDarkMode())}>
        Toggle Dark Mode
      </button>
    </main>
  );
}
