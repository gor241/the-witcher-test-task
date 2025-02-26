import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  isPolicyOpen: boolean;
}

const initialState: UIState = {
  isPolicyOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openPolicyModal: (state) => {
      state.isPolicyOpen = true;
    },
    closePolicyModal: (state) => {
      state.isPolicyOpen = false;
    },
  },
});

export const { openPolicyModal, closePolicyModal } = uiSlice.actions;
export default uiSlice.reducer;
