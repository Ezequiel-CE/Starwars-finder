import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  enteredSearch: "",
  data: null,
  loading: true,
};

export const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setErrorInput: (state, action) => {
      state.error = action.payload;
    },
    setEnteredSearch: (state, action) => {
      state.enteredSearch = action.payload;
    },
    setDataSearch: (state, action) => {
      state.data = action.payload;
    },
    setLoadingSearch: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setErrorInput,
  setEnteredSearch,
  setDataSearch,
  setLoadingSearch,
} = nameSlice.actions;

export default nameSlice.reducer;
