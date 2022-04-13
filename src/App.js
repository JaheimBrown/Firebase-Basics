import { app } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./Global";
import { SignUp, SignIn } from "./components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
