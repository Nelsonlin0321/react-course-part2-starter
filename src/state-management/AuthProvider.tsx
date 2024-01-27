import { ReactNode, useReducer } from "react";
import authReducer from "./authReducer";
import AuthContext from "./contexts/authContext";

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

export default AuthProvider;
