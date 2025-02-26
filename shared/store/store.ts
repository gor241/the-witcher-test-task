import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '@/features/ui/uiSlice';
import submitForm from './slices/formSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    form: submitForm
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
