import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { undo } from "./redux/features/boardsReducerSlice";
import { redo } from "./redux/features/boardsReducerSlice";

let UndoRedo = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button className="undo" onClick={() => dispatch(undo())}>
        Undo
      </button>
      <button className="redo" onClick={() => dispatch(redo())}>
        Redo
      </button>
    </>
  );
};

export default UndoRedo;
