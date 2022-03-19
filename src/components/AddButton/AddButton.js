import React from "react";
import s from "./AddButton.module.css";

export const AddButton = ({ addMore }) => {
  return (
    <div className={s.addMore}>
      <button onClick={addMore}>More Cats</button>
    </div>
  );
};

