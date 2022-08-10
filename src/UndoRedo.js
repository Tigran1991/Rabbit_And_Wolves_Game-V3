import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { undo } from "./redux/features/boardsReducerSlice";
import { redo } from "./redux/features/boardsReducerSlice";

let UndoRedo = (props) => {
  const dispatch = useDispatch();

  const past = useSelector((state) => state.boards.boards.past);
  const future = useSelector((state) => state.boards.boards.future);

  const undoHandler = () => {
    if (past.length !== 0) {
      dispatch(undo(props.id));
    }
  };

  const redoHandler = () => {
    if (future.length !== 0) {
      dispatch(redo(props.id));
    }
  };

  return (
    <>
      <button className="undo" onClick={undoHandler}>
        Undo
      </button>
      <button className="redo" onClick={redoHandler}>
        Redo
      </button>
    </>
  );
};

export default UndoRedo;
