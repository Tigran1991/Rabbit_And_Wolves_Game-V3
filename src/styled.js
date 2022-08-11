import styled from "styled-components";
import arrowRight from "./images/arrows/arrow-right.png";
import arrowBottom from "./images/arrows/arrow-bottom.png";
import arrowLeft from "./images/arrows/arrow-left.png";
import arrowTop from "./images/arrows/arrow-top.png";

export const NewGameBtn = styled.button`
  width: 160px;
  height: 40px;
  border: 2px solid rgb(224, 167, 9);
  outline: none;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(76, 92, 143);
  color: rgb(224, 167, 9);
  cursor: pointer;
  margin-top: 200px;
  transition: 0.3s linear;
  font-family: "Sigmar One", cursive;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  :hover {
    background-color: rgb(5, 23, 92);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const BoardField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  background-color: #333;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  background-color: rgb(172, 183, 204);
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const ButtonsField = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 96px;
  height: 63px;
  background-color: rgb(103, 137, 199);
  border-radius: 10px;
  bottom: 0px;
`;

export const MoveRight = styled.button`
  position: absolute;
  left: 63px;
  top: 33px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background: url(${arrowRight});
  background-size: contain;
`;

export const MoveBottom = styled.button`
  position: absolute;
  left: 33px;
  bottom: 0px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background: url(${arrowBottom});
  background-size: contain;
`;

export const MoveLeft = styled.button`
  position: absolute;
  left: 3px;
  top: 33px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background: url(${arrowLeft});
  background-size: contain;
`;

export const MoveTop = styled.button`
  position: absolute;
  left: 33px;
  top: 0px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background: url(${arrowTop});
  background-size: contain;
`;

export const GameOptions = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 70%;
`;

export const Select = styled.select`
  width: 160px;
  height: 40px;
  border: 2px solid rgb(224, 167, 9);
  outline: none;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(76, 92, 143);
  color: rgb(224, 167, 9);
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s linear;
  font-family: "Sigmar One", cursive;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  :hover {
    background-color: rgb(5, 23, 92);
  }
`;

export const Option = styled.option`
  width: 100%;
`;

export const Input = styled.input`
  width: 160px;
  height: 40px;
  border: 2px solid rgb(224, 167, 9);
  outline: none;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(76, 92, 143);
  color: rgb(224, 167, 9);
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.3s linear;
  font-family: "Sigmar One", cursive;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const ReloadBtn = styled.button`
  width: 160px;
  height: 40px;
  border: 2px solid rgb(224, 167, 9);
  outline: none;
  border-radius: 20px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(76, 92, 143);
  color: rgb(224, 167, 9);
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s linear;
  font-family: "Sigmar One", cursive;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  :hover {
    background-color: rgb(5, 23, 92);
  }
`;

export const Playfield = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  box-sizing: border-box;
  margin-top: 20px;
`;

export const UndoBtn = styled.button`
  display: flex;
  background-color: rgb(130, 194, 88);
  color: #333;
  font-size: 18px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  cursor: pointer;
  border: none;
`;

export const RedoBtn = styled.button`
  display: flex;
  background-color: rgb(130, 194, 88);
  color: #333;
  font-size: 18px;
  position: absolute;
  right: 30px;
  bottom: 10px;
  cursor: pointer;
  border: none;
`;

export const Winner = styled.h1`
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;
  color: green;
  background-color: rgb(138, 182, 138);
  z-index: 2;
  margin-top: 30%;
  padding: 60px;
  border-radius: 3px;
`;
