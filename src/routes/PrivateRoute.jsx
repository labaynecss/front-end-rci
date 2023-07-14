import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useLoginCredZustand from '../store/useLoginCredZustand';

const PrivateRoute = () => {
  const { isAuthenticated } = useLoginCredZustand();

  console.log('Private route :' + isAuthenticated);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate exact to="/admin-login" />;
  }
};

export default PrivateRoute;
