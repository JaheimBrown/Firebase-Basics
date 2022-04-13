import React from "react";

import { Wrapper } from "./styles";
import signPost from "../../assets/sign-post.png";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";

const SignUp = () => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={signPost} alt="sign-up-image" />
      </div>

      <div className="content">
        <h1 className="logo">Firebasics</h1>
        <div className="heading">
          <h2>Create an Account</h2>
          <p>
            Already have an account? <a href="/">Sign in</a>
          </p>
        </div>

        <form>
          <div className="field">
            <input placeholder="Email" type="email" name="email" id="email" />
          </div>
          <div className="field">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
            />
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
