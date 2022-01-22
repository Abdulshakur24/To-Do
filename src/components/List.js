import React from "react";
import { ListWrapper } from "../styles/List";
import { AiFillDelete } from "react-icons/ai";
import moment from "moment";
import { useEffect, useState } from "react/cjs/react.development";

function List({ id, date, title, description, fullfilled, removeToDo }) {
  const [time, setTime] = useState(moment.unix(date).fromNow());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment.unix(date).fromNow());
    }, 1000 * 60);
    return () => clearInterval(intervalId);
  }, [date]);

  return (
    <ListWrapper>
      <div className="container">
        <div className="upper">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <AiFillDelete
          size={24}
          className="deleteIcon"
          onClick={() => removeToDo(id)}
        />
      </div>
      <p>{time}</p>
    </ListWrapper>
  );
}

export default List;
