import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGuest } from '../../context/GuestProvider/GuestProvider';

export default function PrivateRoute({ children, ...rest }) {
  const { guest } = useGuest();
  // renders children
  // if there is a guest, render children otherwise redirect...
  // to auth site
  return (
    // render route
    // return route props
    <Route
      {...rest}
      // deconstruct location from route props (remember it has history, location, match)
      // you use location when you want to match a route location OTHER than current history
      // so, will render an update to location -> when the location matches, pass in the function
      render={
        ({ location }) =>
          // if there is a guest, render children component. Otherwise, redirect to login page
          guest ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
        // rendering according to current location, updating
      }
    />
  );
}
