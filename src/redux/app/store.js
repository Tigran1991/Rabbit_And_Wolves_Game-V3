import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../features/boardsReducerSlice";
import boardSizeReducer from "../features/boardSizeReducerSlice";
import gameStateReducer from "../features/gameStateReducerSlice";

const store = configureStore({
  reducer: {
    game: gameStateReducer,
    boardSize: boardSizeReducer,
    boards: boardReducer,
  },
});

export default store;
