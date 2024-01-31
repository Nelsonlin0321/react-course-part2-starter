import useAuth from "./useAuth";

const LoginStatus = () => {
  const { userName, dispatch } = useAuth();

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
