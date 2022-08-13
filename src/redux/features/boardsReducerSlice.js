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
      state.boards.past.reverse().map((board) => {
        if (board.id === action.payload) {
          state.boards.past.splice(state.boards.past.indexOf(board), 1);
          state.boards.present.map((item) => {
            if (item.id === action.payload) {
              state.boards.future.push(item);
              state.boards.present.splice(
                state.boards.present.indexOf(item),
                1,
                board
              );
            }
          });
        }
      });
    },
    redo: (state, action) => {
      state.boards.future.reverse().map((board) => {
        if (board.id === action.payload) {
          state.boards.future.splice(state.boards.future.indexOf(board), 1);
          state.boards.present.map((item) => {
            if (item.id === action.payload) {
              state.boards.past.push(item);
              state.boards.present.splice(
                state.boards.present.indexOf(item),
                1,
                board
              );
            }
          });
        }
      });
    },
  },
});

export const { addNewBoard, updateBoard, undo, redo } = boardsSlice.actions;

export default boardsSlice.reducer;
