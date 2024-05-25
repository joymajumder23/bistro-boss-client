import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="grid grid-cols-3 gap-6 justify-center items-center text-center mx-auto mt-24">
            <progress className="progress progress-success w-56 max-h-screen h-8"></progress>
            <progress className="progress progress-success w-56 max-h-screen h-8"></progress>
            <progress className="progress progress-success w-56 max-h-screen h-8"></progress>
            <progress className="progress progress-success w-56 max-h-screen h-8"></progress>
            <progress className="progress progress-success w-56 max-h-screen h-8"></progress></div>;
    }
    
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;