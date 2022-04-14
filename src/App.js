import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { app } from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { GlobalStyles } from "./Global";
import { SignUp, SignIn, Home } from "./components";

function App() {
  const auth = getAuth();
  const navigate = useNavigate();

  // STATES
  const [userData, setUserData] = useState(null);
  const [error, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = (email, password) => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const data = userCredential.user;
        setUserData(data);
        data && navigate("/home");
      })
      .catch(err => createErrorMessage(err.code));
  };

  const handleSignIn = (email, password) => {
    if (!email.length || !password.length) return;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const data = userCredential.user;
        setUserData(data);
        data && navigate("/home");
      })
      .catch(err => {
        console.log(err.code);
        createErrorMessage(err.code);
      });
  };

  const googleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(result => {
        const data = result.user;
        setUserData(data);
        data && navigate("/home");
      })
      .catch(err => console.log(err));
  };

  const githubLogin = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then(result => {
        const data = result.user;
        setUserData(data);
        data && navigate("/home");
      })
      .catch(err => console.log(err));
  };

  // Error Handling
  const createErrorMessage = code => {
    if (code === "auth/user-not-found") {
      setErrorMsg("No such user exist *");
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }

    if (code === "auth/wrong-password") {
      setErrorMsg("Incorrect email or password *");
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }

    if (code === "auth/email-already-in-use") {
      setErrorMsg("Email already in use *");
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SignIn
              handleSignIn={handleSignIn}
              googleLogin={googleLogin}
              githubLogin={githubLogin}
              error={error}
              errorMsg={errorMsg}
            />
          }
        />
        <Route
          exact
          path="/signUp"
          element={
            <SignUp
              handleSignUp={handleSignUp}
              googleLogin={googleLogin}
              githubLogin={githubLogin}
              error={error}
              errorMsg={errorMsg}
            />
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
