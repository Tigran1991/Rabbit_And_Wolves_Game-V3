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
      state.boards.present.map((board) => {
        if (board.id === action.payload.id) {
          state.boards.past.push(board);
        }
      });
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
    undo: (state, action) => {
      if (state.boards.past.some((board) => board.id === action.payload)) {
        const board = state.boards.past
          .filter((pastBoard) => pastBoard.id === action.payload)
          .pop();
        state.boards.past.splice(state.boards.past.indexOf(board), 1);
        state.boards.present.map((presentBoard) => {
          if (presentBoard.id === action.payload) {
            state.boards.future.push(presentBoard);
            state.boards.present.splice(
              state.boards.present.indexOf(presentBoard),
              1,
              board
            );
          }
        });
      }
    },
    redo: (state, action) => {
      if (state.boards.future.some((board) => board.id === action.payload)) {
        const board = state.boards.future
          .filter((futureBoard) => futureBoard.id === action.payload)
          .pop();
        state.boards.future.splice(state.boards.future.indexOf(board), 1);
        state.boards.present.map((presentBoard) => {
          if (presentBoard.id === action.payload) {
            state.boards.past.push(presentBoard);
            state.boards.present.splice(
              state.boards.present.indexOf(presentBoard),
              1,
              board
            );
          }
        });
      }
    },
  },
});

export const { addNewBoard, updateBoard, undo, redo } = boardsSlice.actions;

export default boardsSlice.reducer;
