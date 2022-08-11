import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import * as Styled from "./styled";
import Options from "./Options";
import GameBoard from "./GameBoard";
import { createCurrentMatrix, generateId } from "./RabbitWolfGameClass";
import { gameCurrentState } from "./redux/features/gameStateReducerSlice";
import { addNewBoard } from "./redux/features/boardsReducerSlice";

const App = () => {
  const dispatch = useDispatch();

  const gameState = useSelector((state) => state.game);
  const currentSize = useSelector((state) => state.boardSize.size);
  const boards = useSelector((state) => state.boards.boards.present);

  const gameStateHandler = () => {
    dispatch(gameCurrentState());
  };

  const makeNewBoard = () => {
    dispatch(
      addNewBoard({
        id: generateId(),
        size: currentSize,
        matrix: createCurrentMatrix(currentSize),
      })
    );
  };

  return (
    <div className="App">
      {!gameState.isOpen && (
        <Styled.NewGameBtn onClick={gameStateHandler}>
          New Game
        </Styled.NewGameBtn>
      )}

      <Styled.Container>
        {gameState.isOpen && <Options createNewGame={makeNewBoard} />}

        <Styled.BoardField>
          {boards.map((board) => {
            return <GameBoard boardData={board} key={board.id} />;
          })}
        </Styled.BoardField>
      </Styled.Container>
    </div>
  );
};

export default App;
