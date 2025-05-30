import { useContext } from "react";
import AuthContext from "../store/context/AuthContext";

const useAuth = () => {
    
    const context = useContext(AuthContext);
    
    if(!context) {
        throw new Error('Context is not available');
    }

    const { isLoggedIn, setIsLoggedIn } = context;

    return {
        isLoggedIn,
        setIsLoggedIn
    };
}

export default useAuth;