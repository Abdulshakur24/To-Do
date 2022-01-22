import React, { useContext } from "react";
import { ListsWrapper } from "../styles/Lists";
import { ToDoContext } from "./Home";
import List from "./List";
import shortUUID from "short-uuid";
import moment from "moment";
import { getDatabase, ref, set, remove } from "firebase/database";
import { useState } from "react/cjs/react.development";
import { toast } from "react-toastify";
import { Input, Button } from "@mui/material";

function Lists({ modal, setToDo, user }) {
  const db = getDatabase();
  const todoLists = useContext(ToDoContext);

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    description: "",
    fullfilled: false,
    date: "",
  });

  const addToDo = (e) => {
    e.preventDefault();
    if (!(todo.title && todo.description)) {
      return toast.info("Please fill out the title and description.");
    }
    const id = shortUUID.generate();
    const date = moment().unix();
    const updatedTodoLists = [...todoLists, { ...todo, id, date }];
    setToDo(updatedTodoLists);

    if (user) {
      set(ref(db, `users/${user.uid}/${id}`), { ...todo, id, date });
    }
  };

  const removeToDo = (id) => {
    const updatedTodoLists = todoLists.filter((object) => object.id !== id);
    setToDo(updatedTodoLists);

    if (user) {
      remove(ref(db, `users/${user.uid}/${id}`));
    }
  };

  const handleChange = (name) => (event) => {
    setTodo({ ...todo, [name]: event.target.value });
  };

  return (
    <ListsWrapper>
      <div className="inputs">
        <form onSubmit={addToDo}>
          <Input onChange={handleChange("title")} placeholder="Title" />
          <Input
            onChange={handleChange("description")}
            placeholder="Description"
          />
          <Button type="submit">ADD</Button>
        </form>
      </div>
      <div className="list-container">
        {todoLists.map(({ id, date, title, description, fullfilled }) => (
          <List
            key={id}
            id={id}
            date={date}
            title={title}
            description={description}
            fullfilled={fullfilled}
            removeToDo={removeToDo}
          />
        ))}
      </div>
    </ListsWrapper>
  );
}

export default Lists;
