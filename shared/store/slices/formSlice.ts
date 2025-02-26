import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  fileName?: string;
  consent: boolean;
}

interface FormState {
  data: FormData | null;
  status: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: FormState = {
  data: null,
  status: 'idle',
};

export const submitForm = createAsyncThunk(
  'form/submitForm',
  async (formData: FormData) => {
    // эмуляция задержки отправки (200 мс)
    await new Promise(res => setTimeout(res, 200));
    return formData;
  }
);

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitForm.fulfilled, (state, action: PayloadAction<FormData>) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(submitForm.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default formSlice.reducer;
