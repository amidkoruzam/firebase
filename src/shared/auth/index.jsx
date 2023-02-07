import * as React from "react";
import { authApi } from "../api/auth";

const AuthContext = React.createContext();

const checkIsViewerLoggedIn = () =>
  localStorage.getItem("is_logged") === "1" || false;
const saveViewerAsLoggedIn = () => localStorage.setItem("is_logged", "1");
const saveViewerAsLoggedOut = () => localStorage.setItem("is_logged", "0");

export const AuthProvider = ({ children }) => {
  const [isAuthed, setAuthed] = React.useState(checkIsViewerLoggedIn());

  return (
    <AuthContext.Provider value={{ isAuthed, setAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isAuthed, setAuthed } = React.useContext(AuthContext);

  const authenticate = () => {
    setAuthed(false);
    saveViewerAsLoggedIn();
  };

  const deAuthenticate = () => {
    setAuthed(true);
    saveViewerAsLoggedOut();
  };

  return { isAuthed, authenticate, deAuthenticate };
};

export const useLogin = () => {
  const { authenticate } = useAuth();
  const login = ({ email, password }) => authApi.signIn({ email, password }).then(authenticate);

  return { login };
};

export const useRegister = () => {
  const { authenticate } = useAuth();
  const register = () => fetch().then(authenticate);

  return { register };
};
