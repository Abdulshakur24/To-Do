import React from "react";
import { AppWrapper } from "./styles/App";
import Home from "./components/Home";
import "./utils/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react/cjs/react.development";
const provider = new GoogleAuthProvider();

function App() {
  const defaults = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [toggle, setToggle] = useLocalStorage(
    "theme",
    defaults ? "dark" : "light"
  );

  const auth = getAuth();

  const signInWithGooge = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
      })
      .catch((error) => {
        console.log(error);
        GoogleAuthProvider.credentialFromError(error);
      });
  };

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", toggle);
  }, [toggle]);

  return (
    <ThemeProvider theme={theme}>
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
