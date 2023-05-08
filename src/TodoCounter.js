import React, { useContext } from "react";
import { TodoContext } from "./TodoContex";
import "./TodoCounter.css";

export const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has Completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};
