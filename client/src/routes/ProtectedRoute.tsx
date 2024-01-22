import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;