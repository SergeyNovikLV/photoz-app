import React from "react";
import "../../css/bootstrap.min.css";
import "./sign-up.css";
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

function SignUp() {
  return (
    <main className="cardWrapper">
      <Card className="card-container">
        <CardHeader tag="h3">Sign up</CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="Username">Username</Label>
              <Input type="username" name="username" id="Username" />
            </FormGroup>
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
          <Button color="primary">Sign up</Button>
        </CardFooter>
      </Card>
      <div className="cardWrapper-link">
        <a href="/sign-up">Sign up</a>
      </div>
    </main>
  );
}

export default SignUp;
