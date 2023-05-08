import React, { useContext, useState } from "react";
import { TodoContext } from "../../TodoContex";
import "./todoForm.css";
export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState();

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onAdd = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue("");
  };
  return (
    <form onSubmit={onAdd}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="cortar cebolla "
        value={newTodoValue}
        onChange={onChange}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
};
