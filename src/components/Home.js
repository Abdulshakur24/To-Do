import { getAuth } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { HomeWrapper } from "../styles/Home";
import Lists from "./Lists";

export const ToDoContext = createContext();

function Home({ toggle, setToggle, signInWithGoogle }) {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Dishes", description: "Do it by 4pm", fullfilled: false },
  ]);
  const auth = getAuth();

  const [modal, setModal] = useState(false);

  return (
    <HomeWrapper>
      <header>
        <h1>ToDo</h1>
        <div className="menu-bar hide-for-tablet">
          <ul
            onClick={() => setModal(!modal)}
            className={`${modal ? "opened" : "closed"}`}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? "Light" : "Dark"}
        </button>
        <div className="menu-list hide-for-mobile">
          {auth.currentUser ? (
            <button onClick={() => auth.signOut()}>Sign Out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign In With google</button>
          )}
        </div>
      </header>
      <ToDoContext.Provider value={toDo}>
        <Lists setToDo={setToDo} />
      </ToDoContext.Provider>
    </HomeWrapper>
  );
}

export default Home;
