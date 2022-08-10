import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: {
    past: [],
    present: [],
    future: [],
  },
};

export const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addNewBoard: (state, action) => {
      state.boards.present = [...state.boards.present, action.payload];
    },
    updateBoard: (state, action) => {
      state.boards.past = [...state.boards.past, state.boards.present];
      state.boards.present = state.boards.present.map((board) => {
        if (board.id === action.payload.id) {
          return {
            ...board,
            matrix: action.payload.matrix,
            winner: action.payload.winner,
          };
        }
        return board;
      });
    },
    undo: (state) => {
      state.boards.future.push(state.boards.present);
      state.boards.present = state.boards.past.pop();
    },
    redo: (state) => {
      state.boards.past.push(state.boards.present);
      state.boards.present = state.boards.future.pop();
    },
  },
});

export const { addNewBoard, updateBoard, undo, redo } = boardsSlice.actions;

export default boardsSlice.reducer;
