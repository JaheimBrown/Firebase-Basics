import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./styles";
import Lottie from "lottie-react";
import workingHome from "../../assets/animations/man-working-under-lamp-light.json";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";

const SignIn = ({ handleSignIn, googleLogin, githubLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <Wrapper>
      <div className="image-container">
        <Lottie animationData={workingHome} style={styles} loop={true} />
      </div>

      <div className="content">
        <h1 className="logo">Firebasics</h1>
        <div className="heading">
          <h2>Welcome Back 👋</h2>
          <p>
            Don't already have an account? <Link to="/signUp">Sign up</Link>
          </p>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            handleSignIn(email, password);
          }}
        >
          <div className="field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="cta">Sign In</button>
        </form>

        <div className="divider">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>

        <div className="other-method">
          <button className="google" onClick={() => googleLogin()}>
            <img src={google} alt="google-icon" /> Sign In with Google
          </button>
          <button className="github" onClick={() => githubLogin()}>
            <img src={github} alt="github-icon" /> Sign In with GitHub
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;
