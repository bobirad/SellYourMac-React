import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthProvider);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;