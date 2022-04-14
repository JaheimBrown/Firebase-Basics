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

  const [userData, setUserData] = useState(null);

  const handleSignUp = (email, password) => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const data = userCredential.user;
        setUserData(data);
        data && navigate("/home");
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignIn = (email, password) => {
    if (!email.length || !password.length) return;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const data = userCredential.user;
        setUserData(data);
        data && navigate("/home");
      })
      .catch(err => console.log(err));
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
            />
          }
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
