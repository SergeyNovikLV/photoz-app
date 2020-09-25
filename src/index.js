import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

// import * as serviceWorker from './serviceWorker'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/*
Some hints for creating PrivateRoute component:


	
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
