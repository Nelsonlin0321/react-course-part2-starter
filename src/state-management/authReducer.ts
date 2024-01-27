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

export default authReducer;
