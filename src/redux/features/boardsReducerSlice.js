import { createSlice } from "@reduxjs/toolkit";

export const boardsSlice = createSlice({
  name: "size",
  initialState: {
    boards: [],
  },
  reducers: {
    selectedBoard: (state, action) => {
      state.boards = [...state.boards, action.payload];
    },
    updateBoard: (state, action) => {
      state.boards = state.boards.map((board) => {
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
  },
});

export const { selectedBoard, updateBoard } = boardsSlice.actions;

export default boardsSlice.reducer;
