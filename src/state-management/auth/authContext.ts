import { Dispatch } from "react";
import React from "react";
import { AuthAction } from "./AuthProvider";

interface AuthContextType {
  userName: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
