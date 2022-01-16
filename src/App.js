import React, { useState } from "react";
import { AppWrapper } from "./styles/App";
import Home from "./components/Home";
import "./utils/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

const provider = new GoogleAuthProvider();

function App() {
  const [toggle, setToggle] = useState(false);
  const auth = getAuth();
  const signInWithGooge = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // GoogleAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        console.log(error);
        // GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <ThemeProvider theme={{ ...theme, mode: toggle ? "dark" : "light" }}>
      <AppWrapper>
        <Home
          signInWithGoogle={signInWithGooge}
          toggle={toggle}
          setToggle={setToggle}
        />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
