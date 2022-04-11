import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  modalOpen: false,
  selectedTab: 'All Tasks',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
    changeSelectedTab(state, action) {
      state.selectedTab = action.payload;
    },
  },
});

export default uiSlice.reducer;
export const { openModal, closeModal, changeSelectedTab } = uiSlice.actions;
