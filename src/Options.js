import { React, memo } from "react";
import * as Styled from "./styled";
import { useDispatch } from "react-redux";
import { selectSize } from "./redux/features/boardSizeReducerSlice";

const Options = memo(({ createNewGame }) => {
  const dispatch = useDispatch();

  const newGameHandler = (event) => {
    event.preventDefault();
    createNewGame();
  };

  const selectSizeHandler = (event) => {
    dispatch(selectSize(parseInt(event.target.value)));
  };

  const reloadGameHandler = () => window.location.reload();

  return (
    <>
      <Styled.GameOptions>
        <Styled.Form onSubmit={newGameHandler}>
          <Styled.Select onChange={selectSizeHandler}>
            <Styled.Option value="7">7 X 7</Styled.Option>
            <Styled.Option value="8">8 X 8</Styled.Option>
            <Styled.Option value="9">9 X 9</Styled.Option>
          </Styled.Select>
          <Styled.Input type="submit" value="NEW BOARD" />
        </Styled.Form>
        <Styled.ReloadBtn onClick={reloadGameHandler}>Reload</Styled.ReloadBtn>
      </Styled.GameOptions>
    </>
  );
});

export default Options;
