import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContex";
import "./TodoSearch.css";
export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      onChange={onSearchValueChange}
      value={searchValue}
    />
  );
};
