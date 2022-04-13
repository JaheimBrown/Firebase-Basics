import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./styles";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
import Lottie from "lottie-react";
import popcorn from "../../assets/animations/watch-a-movie-with-popcorn.json";

const SignUp = () => {
  const styles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <Wrapper>
      <div className="image-container">
        <Lottie animationData={popcorn} style={styles} loop={true} />
      </div>

      <div className="content">
        <h1 className="logo">Firebasics</h1>
        <div className="heading">
          <h2>Create an Account</h2>
          <p>
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </div>

        <form>
          <div className="field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
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
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="cta">Sign Up</button>
        </form>

        <div className="divider">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>

        <div className="other-method">
          <button className="google">
            <img src={google} alt="google-icon" /> Sign Up with Google
          </button>
          <button className="github">
            <img src={github} alt="github-icon" /> Sign Up with GitHub
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;
