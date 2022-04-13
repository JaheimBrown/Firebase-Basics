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
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
