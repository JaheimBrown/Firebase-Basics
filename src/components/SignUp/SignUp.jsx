import React from "react";

import { Wrapper } from "./styles";

const SignUp = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Sign Up</h1>
        <form>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            required{" "}
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default SignUp;
