import React from "react";
import AppLogo from "./components/AppLogo.js";
import "../css/bootstrap.min.css";
import "../css/card-container.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Axios from "axios";

function SignIn() {
  return (
    <div className="cardContainer">
      <div className="cardContainer--content">
        <div className="cardContainer--form">
          <h3>Sign In</h3>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="Password" />
            </FormGroup>
          </Form>
          <div className="cardContainer--footer">
            <a href="/some/valid/uri">Forgot password</a>
            <Button color="primary">Sign in</Button>
          </div>
        </div>
      </div>
      <div className="cardContainer--link">
        <a href="/some/valid/uri">Sign up</a>
      </div>
    </div>
  );
}

export default SignIn;
