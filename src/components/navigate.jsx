import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/auth", ...rest }) => {
  const token = localStorage.getItem("accessToken");
  console.log("WORK IS PROTECTED ROUTE");
  if (!token || token === "null") {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
