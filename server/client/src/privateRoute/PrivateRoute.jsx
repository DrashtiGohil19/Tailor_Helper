import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token");

    if (isAuthenticated) {
        return children
    }
    return <Navigate to="/" replace />
}