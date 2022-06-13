import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./character-slice";

export const store = configureStore({
  reducer: { characters: charactersReducer },
});
