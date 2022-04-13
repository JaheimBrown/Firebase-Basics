import { app } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { GlobalStyles } from "./Global";
import { SignUp } from "./components";

function App() {
  return (
    <>
      <GlobalStyles />
      <SignUp />
    </>
  );
}

export default App;
