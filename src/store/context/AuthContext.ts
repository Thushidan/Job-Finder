import { createContext } from "react";
import type { AuthContextProps } from "../../types/context.types";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;


