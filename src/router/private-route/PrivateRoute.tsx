import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import type { PrivateRouteProps } from "../../types/component.types";
import useLocalStorage from "../../hooks/usLocalStorage";

const PrivateRoute = (props: PrivateRouteProps) => {

    const { isLoggedIn } = useAuth();
    const { getLocalStorageItem } = useLocalStorage();

    if (!isLoggedIn || getLocalStorageItem('role') !== 'Recruiter') {
        return <Navigate to="/unauthorized" replace />;
    }

    return props.page;
}

export default PrivateRoute;