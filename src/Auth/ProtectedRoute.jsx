import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, loggedIn, onLogout, ...rest }) => {

    const navigate = useNavigate()

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} onLogout={onLogout} />
        ) : (
          navigate('/')
        )
      }
    />
  );
};

export default ProtectedRoute;
