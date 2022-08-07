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
    selectedBoard: (state, action) => {
      state.boards.present = [...state.boards.present, action.payload];
    },
    updateBoard: (state, action) => {
      state.boards.present = state.boards.present.map((board) => {
        state.boards.past = state.boards.past.concat(board);
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
      state.boards.future.push(state.boards.present[0]);
      state.boards.present = [state.boards.past.pop()];
    },
    redo: (state) => {
      state.boards.past.push(state.boards.present[0]);
      state.boards.present = [state.boards.future.pop()];
    },
  },
});

export const { selectedBoard, updateBoard, undo, redo } = boardsSlice.actions;

export default boardsSlice.reducer;
