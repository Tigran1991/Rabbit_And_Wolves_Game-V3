import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Options from "./Options";
import GameBoard from "./GameBoard";
import { createCurrentMatrix, generateId } from "./RabbitWolfGameClass";
import { gameCurrentState } from "./redux/features/gameStateReducerSlice";
import { selectedBoard } from "./redux/features/boardsReducerSlice";

const App = () => {
  const dispatch = useDispatch();

  const GAME_STATE = useSelector((state) => state.game);
  const CURRENT_SIZE = useSelector((state) => state.boardSize.size);
  const BOARDS = useSelector((state) => state.boards.boards.present);

  const makeNewBoard = () => {
    dispatch(
      selectedBoard({
        id: generateId(),
        size: CURRENT_SIZE,
        matrix: createCurrentMatrix(CURRENT_SIZE),
      })
    );
  };

  return (
    <div className="App">
      {!GAME_STATE.isOpen && (
        <button
          className="newGameBtn"
          onClick={() => dispatch(gameCurrentState())}
        >
          New Game
        </button>
      )}

      <div className="container">
        {GAME_STATE.isOpen && <Options createNewGame={makeNewBoard} />}

        <div className="boardField">
          {BOARDS.map((board) => {
            return <GameBoard boardData={board} key={board.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
