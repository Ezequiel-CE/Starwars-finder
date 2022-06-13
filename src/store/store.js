import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./character-slice";
import nameSlice from "./name-slice";

export const store = configureStore({
  reducer: { characters: charactersReducer, name: nameSlice },
});
