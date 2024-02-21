import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const indexToRemove = state.findIndex(movie => movie === action.payload);
          state.splice(indexToRemove, 1);
  }
  }})
  // console.log(moviesSlice)

  const songSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
      addSong(state , action){
        state.push(action.payload);
      },
      removeSong(state, action) {
        const indexToRemove = state.findIndex(song => song === action.payload);
            state.splice(indexToRemove, 1);
    }
    }
  })


  export const { addMovie, removeMovie } = moviesSlice.actions;
  export const moviesReducer = moviesSlice.reducer;

  export const songReducer = songSlice.reducer;
  export const {addSong , removeSong} = songSlice.actions;
