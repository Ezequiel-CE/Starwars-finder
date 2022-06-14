import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: true,
  error: null,
  currentFilm: null,
  currentFilmLoading: false,
  currentFilmError: false,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setDataFilm: (state, action) => {
      state.data = action.payload;
    },
    setLoadingFilm: (state, action) => {
      state.loading = action.payload;
    },
    setErrorFilm: (state, action) => {
      state.error = action.payload;
    },
    setCurrentFilm: (state, action) => {
      state.currentFilm = action.payload;
    },
    setCurrentFilmLoding: (state, action) => {
      state.currentFilmLoading = action.payload;
    },
    setCurrentFilmError: (state, action) => {
      state.currentFilmError = action.payload;
    },
  },
});

export const {
  setDataFilm,
  setLoadingFilm,
  setErrorFilm,
  setCurrentFilm,
  setCurrentFilmLoding,
  setCurrentFilmError,
} = filmsSlice.actions;

export default filmsSlice.reducer;
