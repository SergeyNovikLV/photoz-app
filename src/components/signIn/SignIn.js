import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { AuthContext } from 'components/Auth'
// import FormContainer from 'components/FormContainer'
// import Text from 'components/Text'
import { Logo } from 'components/Icons'
// import 'SignIn/sign-in.css'

let signInField = {
  EMAIL: 'signInEmail',
  PASSWORD: 'signInPassword',
}

const SignIn = () => {
  const history = useHistory()
  const { setAuthStatus } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { elements } = e.target
    const data = {
      email: elements[signInField.email].value,
      password: elements[signInField.password].value,
    }
    console.log(data)
    setAuthStatus(true)
    history.push('/')
  }

  return (
    <div className="FormContainer">
      <div className="CardContainer">
        <Logo />
        <h1 as="h1">PhotoZ</h1>
        <Card body className="p-4 mb-2">
          <h4 as="h4" className="mb-4">
            Sing in
          </h4>
          <Form id="signInForm" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for={signInField.email}>Email</Label>
              <Input
                required
                type="email"
                name={signInField.email}
                id={signInField.email}
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for={signInField.password}>Password</Label>
              <Input
                required
                minLength="6"
                type="password"
                name={signInField.password}
                id={signInField.password}
              />
            </FormGroup>
            <Button color="link" className="px-0">
              Forgot password
            </Button>
            <Button type="submit" color="primary" className="float-right">
              Sign in
            </Button>
          </Form>
        </Card>
        <Link to="/sign-up" className="mt-2">
          Sing up
        </Link>
      </div>
    </div>
  )
}

export default SignIn
