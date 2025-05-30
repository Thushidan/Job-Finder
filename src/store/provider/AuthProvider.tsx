import { useState } from "react";
import AuthContext from "../context/AuthContext";
import useLocalStorage from "../../hooks/usLocalStorage";
import type { AuthProviderProps } from "../../types/context.types";

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { getLocalStorageItem } = useLocalStorage();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return getLocalStorageItem('isLoggedIn');
    });

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}   

export default AuthProvider;