import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
