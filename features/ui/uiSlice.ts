import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
}

const initialState: UIState = {
  darkMode: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
  },
});

export const {  } = uiSlice.actions;
export default uiSlice.reducer;
