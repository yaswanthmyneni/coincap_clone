import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  errorFetching: null,
  isLoading: false,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getDataFetch: (state) => {
      state.isLoading = true;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getDataFailure: (state, action) => {
      state.errorFetching = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getDataFetch, getDataSuccess, getDataFailure } =
  homeSlice.actions;

export default homeSlice.reducer;
