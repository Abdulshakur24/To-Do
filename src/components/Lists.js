import React, { useContext } from "react";
import { ListsWrapper } from "../styles/Lists";
import { ToDoContext } from "./Home";
import List from "./List";

function Lists({ setToDo }) {
  const todoLists = useContext(ToDoContext);
  //   console.log(todoLists);

  return (
    <ListsWrapper>
      <button onClick={() => setToDo([])}>Clear</button>
      <List />
    </ListsWrapper>
  );
}

export default Lists;
