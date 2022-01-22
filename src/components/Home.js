import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { HomeWrapper } from "../styles/Home";
import Lists from "./Lists";
import { toast } from "react-toastify";
import { getDatabase, get, ref, child } from "firebase/database";
import { Button } from "@mui/material";

export const ToDoContext = createContext();

function Home({ toggle, setToggle, signInWithGoogle }) {
  const [user, setUser] = useState(null);
  const [toDo, setToDo] = useState([]);
  const [modal, setModal] = useState(false);
  const db = getDatabase();
  const auth = getAuth();
  const dbRef = ref(db);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        get(child(dbRef, `users/${currentUser.uid}`))
          .then((snapshot) => {
            const array = [];
            if (snapshot.exists()) {
              for (const [id, object] of Object.entries(snapshot.val())) {
                array.push(object);
              }
              setToDo(array);
              return;
            }
            setToDo([]);
          })
          .catch((error) => {
            console.error(error);
          });
        return setUser(currentUser);
      }
      setUser(null);
    });
  }, [auth, dbRef]);

  return (
    <HomeWrapper>
      <header>
        <h1 className="left" onClick={() => toast.info("hello")}>
          ToDo
        </h1>
        <div className="right">
          <div className="menu-bar hide-for-desktop">
            <ul
              onClick={() => setModal(!modal)}
              className={`${modal ? "opened" : "closed"}`}
            >
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Button
            onClick={() => setToggle(toggle === "dark" ? "light" : "dark")}
          >
            {toggle === "dark" ? "Light" : "Dark"}
          </Button>
          <div className="menu-list hide-for-mobile">
            {user ? (
              <Button onClick={() => auth.signOut()}>Sign Out</Button>
            ) : (
              <Button onClick={signInWithGoogle}>Sign In With google</Button>
            )}
          </div>
        </div>
      </header>
      <ToDoContext.Provider value={toDo}>
        <Lists user={user} modal={modal} setToDo={setToDo} />
      </ToDoContext.Provider>
    </HomeWrapper>
  );
}

export default Home;
