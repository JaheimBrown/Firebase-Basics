import { app } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { SignUp } from "./components";

function App() {
  return (
    <>
      <SignUp />
    </>
  );
}

export default App;
