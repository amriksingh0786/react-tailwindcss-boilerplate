import React from 'react';

import { useAuthListener } from './hooks/useAuthListener';
import { Redirect } from 'react-router-dom';
const ProtectedRoute = ({ component: Component,redirectTo }) => {
  // a custom hook to keep track of user's auth status
  const { loggedIn, checkingStatus } = useAuthListener();
  console.log("log",loggedIn)

  return (
    <>
      {
        // display a spinner while auth status being checked
        checkingStatus
          ? <div>Suspense</div>
          : loggedIn
            // if user is logged in, grant the access to the route
            // note: in this example component is Bar
            ? <Component />
            // else render an unauthorised component
            // stating the reason why it cannot access the route
            : <Redirect to={redirectTo||"/"}/>
      }
    </>
  );
};

export default ProtectedRoute;