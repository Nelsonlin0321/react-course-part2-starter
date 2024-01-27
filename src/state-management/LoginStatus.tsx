import { useContext } from "react";
import AuthContext from "./contexts/authContext";

const LoginStatus = () => {
  const { userName, dispatch } = useContext(AuthContext);

  if (userName)
    return (
      <>
        <div>
          <span className="mx-2">{userName}</span>
          <a onClick={() => dispatch({ type: "Logout" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "Login" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
