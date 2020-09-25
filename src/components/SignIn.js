import React from "react";
import logoImg from "./logo.png";
import "./signIn.css";

function SignIn() {
  return (
    <div className="welcomeContainer">
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="appName">PhotoZ</div>
      <div className="welcomeContainer--content">
        <div className="welcomeContainer--form">
          <div className="form-group">
            <h4>Sign in</h4>
            <label htmlFor="email">Email</label>
            <input type="text" />
            <label htmlFor="email">Password</label>
            <input type="text" />
          </div>
        </div>
        <div className="welcomeContainer--footer">
          <a href="/some/valid/uri">Forgot password</a>
          <button className="btn">Sign in</button>
        </div>
      </div>
      <a href="/some/valid/uri">Sign up</a>
    </div>
  );
}

export default SignIn;
