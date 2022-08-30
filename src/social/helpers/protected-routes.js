import React from 'react';
import { Route, useNavigate, Navigate } from 'react-router-dom';
import RoutePaths from '../../constants/routes';

const ProtectedRoute = ({
    user,
    redirectPath = RoutePaths.SOCIAL_LOGIN,
    children,
  }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children
  };

  export default ProtectedRoute