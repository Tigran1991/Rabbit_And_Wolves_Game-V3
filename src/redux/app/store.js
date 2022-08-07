import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boardsReducerSlice";
import boardSizeReducer from "../features/boardSizeReducerSlice";
import gameStateReducer from "../features/gameStateReducerSlice";

const store = configureStore({
  reducer: {
    game: gameStateReducer,
    boardSize: boardSizeReducer,
    boards: boardsReducer,
  },
});

export default store;
