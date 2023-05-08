import React from "react";
import { TodoContext } from "../TodoContex";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { Modal } from "../modal";
import { useContext } from "react";
import { TodoForm } from "./TodoForm";

export const AppUi = ({}) => {
  const {
    error,
    loading,
    totalTodos,
    completedTodo,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <CreateTodoButton />

      {/* USANDO CONTEX */}

      <TodoList>
        {error && <p>Deseperate hubo un error</p>}
        {loading && <p>estamos cargando, no te desesperes</p>}
        {!loading && !searchTodos.length && <p>Crea tu primer nota</p>}
        {searchTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completedTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          );
        })}
      </TodoList>

      {/* //  <TodoSearch /> */}
      {/* //  <TodoSearch /> */}

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
};
