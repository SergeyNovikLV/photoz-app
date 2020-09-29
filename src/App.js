import React, { View } from "react";
// import Navbar from './components/Navbar';

import SignUp from "./components/signUp/SignUp";
import SignIn from "./components/signIn/SignIn";
import FlatLayout from "./components/FlatLayout/FlatLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/app.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <FlatLayout />

        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
        </Switch>
        <Switch>
          <Route path="/sign-up" exact>
            <SignUp />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;

/*
Some hints for creating PrivateRoute component:


/*	
component should accept these props: ({path, component: Component, layout, ...rest})
	component should check is user authenticated or not
	component should return:
	
	<Route
	      {...rest}
	      path={path}
	      render={props => isAuthenticated
	        ? <Layout><Component {...props} />/Layout>
	        : <Redirect to={{ pathname: "/sign-in" }} />}
	/>
*/
