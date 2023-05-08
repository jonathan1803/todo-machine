import React from "react";
import "./CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = (e) => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
      //si mi funcion lleva parametros seria asi ()=> onClick(mensaje)
    >
      +
    </button>
  );
};
