// PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const isAuthenticated = Boolean(localStorage.getItem('access_token'));

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;

