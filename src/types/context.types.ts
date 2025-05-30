import type { Dispatch, SetStateAction } from "react"

export type AuthContextProps = {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export type AuthProviderProps = {
    children: React.ReactNode
}

export type AuthProps = {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
    isLoggedIn: boolean
}