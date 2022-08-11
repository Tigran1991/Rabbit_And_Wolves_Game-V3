import { memo, React } from "react";
import { useDispatch } from "react-redux";
import * as Styled from "./styled";
import Playfield from "./Playfield";
import ButtonElements from "./ButtonElements";
import { moveCharacters } from "./RabbitWolfGameClass";
import { updateBoard } from "./redux/features/boardsReducerSlice";
import UndoRedo from "./UndoRedo";

const GameBoard = memo(({ boardData }) => {
  const dispatch = useDispatch();

  const CELL_SIZE = 60;
  const WIDTH_INDEX = 44;
  const HEIGHT_INDEX = 83;

  const id = boardData.id;
  const size = boardData.size;
  const matrix = boardData.matrix;
  const winner = boardData.winner;

  const updateBoardHandler = (sideMove) => {
    const [updatedMatrix, winnerCharacter] = moveCharacters(
      sideMove,
      matrix,
      size
    );
    dispatch(
      updateBoard({
        id: id,
        size: size,
        matrix: updatedMatrix,
        winner: winnerCharacter,
      })
    );
  };

  const boardStyle = {
    width: CELL_SIZE * size + WIDTH_INDEX,
    height: CELL_SIZE * size + HEIGHT_INDEX,
  };

  return (
    <Styled.BoardContainer>
      <Styled.Board style={boardStyle}>
        {winner !== undefined ? (
          <Styled.Winner> {winner} WIN ! </Styled.Winner>
        ) : (
          <Playfield matrix={matrix} key={"playfield" + id} />
        )}
      </Styled.Board>

      {winner === undefined && (
        <ButtonElements
          updateMatrix={updateBoardHandler}
          key={"buttonsDiv" + id}
        />
      )}

      {<UndoRedo id={id} matrix={matrix} winner={winner} />}
    </Styled.BoardContainer>
  );
});

export default GameBoard;
