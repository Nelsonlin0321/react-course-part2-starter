import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [userName, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ userName, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export interface AuthAction {
  type: "Login" | "Logout";
}

const authReducer = (userName: string, authAction: AuthAction): string => {
  switch (authAction.type) {
    case "Login": {
      return "mosh.hamedani";
    }
    case "Logout": {
      return "";
    }
    default: {
      return userName;
    }
  }
};

export default AuthProvider;
