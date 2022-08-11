import React from "react";
import * as Styled from "./styled";
import CharacterCell from "./CharacterCell";
import { FREE_CELL } from "./RabbitWolfGameClass";

const Playfield = ({ matrix }) => {
  return (
    <Styled.Playfield>
      {matrix.map((row, X) =>
        row.map((rowItem, Y) =>
          rowItem !== 0 ? (
            <CharacterCell item={rowItem} key={X + "" + Y} />
          ) : (
            <CharacterCell item={FREE_CELL} key={X + "" + Y} />
          )
        )
      )}
    </Styled.Playfield>
  );
};

export default Playfield;
