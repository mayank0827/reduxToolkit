import { configureStore } from "@reduxjs/toolkit";
import { songReducer , moviesReducer } from "../Slices/PlaylistSlice";

export const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: moviesReducer
  }
})