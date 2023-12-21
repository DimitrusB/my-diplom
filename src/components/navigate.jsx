import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ userData }) => {
  if (!userData) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
