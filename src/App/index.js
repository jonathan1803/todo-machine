import React, { useEffect, useState } from "react";
import { AppUi } from "../components/AppUi";
import { TodoProvider } from "../TodoContex";

//metodos de arrays vistos filter, map, findIndex

export function App() {
  // useEffect(() => {}, [totalTodos]);

  return (
    <>
      <TodoProvider>
        <AppUi />
      </TodoProvider>
    </>
  );
}
