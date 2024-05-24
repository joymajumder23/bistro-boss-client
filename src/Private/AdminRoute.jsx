import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <>
            <progress className="progress progress-success w-56" value={0} max="100"></progress>
            <progress className="progress progress-success w-56" value="10" max="100"></progress>
            <progress className="progress progress-success w-56" value="40" max="100"></progress>
            <progress className="progress progress-success w-56" value="70" max="100"></progress>
            <progress className="progress progress-success w-56" value="100" max="100"></progress></>;
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;