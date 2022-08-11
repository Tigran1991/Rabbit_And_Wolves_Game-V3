import { memo, React } from "react";
import * as Styled from "./styled";

const ButtonElements = memo(({ updateMatrix }) => {
  return (
    <>
      <Styled.ButtonsField>
        <Styled.MoveRight
          onClick={() => updateMatrix("move-right")}
        ></Styled.MoveRight>
        <Styled.MoveBottom
          className="move-bottom"
          onClick={() => updateMatrix("move-bottom")}
        ></Styled.MoveBottom>
        <Styled.MoveLeft
          className="move-left"
          onClick={() => updateMatrix("move-left")}
        ></Styled.MoveLeft>
        <Styled.MoveTop
          className="move-top"
          onClick={() => updateMatrix("move-top")}
        ></Styled.MoveTop>
      </Styled.ButtonsField>
    </>
  );
});

export default ButtonElements;
