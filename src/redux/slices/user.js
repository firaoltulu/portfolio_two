import { createSlice } from '@reduxjs/toolkit';
// utils
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  myProfile: null,

};

const slice = createSlice({

  name: 'user',
  initialState,

  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

  }


});

// Reducer
export default slice.reducer;

// Actions
export const { } = slice.actions;
