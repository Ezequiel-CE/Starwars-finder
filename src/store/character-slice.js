import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  page: 1,
  loading: true,
  error: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setDataChara: (state, action) => {
      state.data = action.payload;
    },
    setPageChara: (state, action) => {
      state.page = action.payload;
    },
    setLoadingChara: (state, action) => {
      state.loading = action.payload;
    },
    setErrorChara: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setDataChara, setPageChara, setLoadingChara, setErrorChara } =
  charactersSlice.actions;

export default charactersSlice.reducer;
