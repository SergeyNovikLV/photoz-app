import React from "react";
import "../../css/bootstrap.min.css";
import "./sign-in.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// import Axios from "axios";

function SignIn() {
  return (
    <main className="cardWrapper">
      <Card className="card-container">
        <CardHeader tag="h3">Sign In</CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="Password" />
            </FormGroup>
          </Form>
        </CardBody>
        <CardFooter className="card-footer">
          <a href="/">Forgot password</a>
          <Button color="primary">Sign in</Button>
        </CardFooter>
      </Card>
      <div className="cardWrapper-link">
        <a href="/sign-up">Sign up</a>
      </div>
    </main>
  );
}

export default SignIn;
