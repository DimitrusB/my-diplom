import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/", ...rest }) => {
    if (!localStorage.getItem('accessToken')) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return <Outlet />;
};