import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

export const characterPageSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setDataCharaPage: (state, action) => {
      state.data = action.payload;
    },
    setLoadingCharaPage: (state, action) => {
      state.loading = action.payload;
    },
    setErrorCharaPage: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setDataCharaPage, setLoadingCharaPage, setErrorCharaPage } =
  characterPageSlice.actions;

export default characterPageSlice.reducer;
