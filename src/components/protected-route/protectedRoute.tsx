import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router';
import { Spinner } from 'react-bootstrap';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading, isError } = useAuth();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5 vh-100">
        <Spinner animation="grow">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isError || !user) return <Navigate to="/signin" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
