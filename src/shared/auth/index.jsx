import * as React from "react";
import { authApi } from "../api/auth";

const AuthContext = React.createContext();

const checkIsViewerLoggedIn = () =>
  localStorage.getItem("is_logged") === "1" || false;
const saveViewerAsLoggedIn = () => localStorage.setItem("is_logged", "1");
const saveViewerAsLoggedOut = () => localStorage.setItem("is_logged", "0");

export const AuthProvider = ({ children }) => {
  const [isAuthed, setAuthed] = React.useState(checkIsViewerLoggedIn());
  const [viewer, setViewer] = React.useState(null);

  return (
    <AuthContext.Provider value={{ isAuthed, setAuthed, viewer, setViewer }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isAuthed, setAuthed, setViewer, viewer } =
    React.useContext(AuthContext);

  const authenticate = ({ email, uid }) => {
    setViewer({ email, uid });
    setAuthed(true);
    saveViewerAsLoggedIn();
  };

  const deAuthenticate = () => {
    setAuthed(false);
    saveViewerAsLoggedOut();
  };

  return { isAuthed, authenticate, deAuthenticate, viewer };
};

export const useLogin = () => {
  const { authenticate } = useAuth();
  const login = ({ email, password }) =>
    authApi
      .signIn({ email, password })
      .then(({ email, uid }) => authenticate({ email, uid }));

  return { login };
};

export const useRegister = () => {
  const { authenticate } = useAuth();
  const register = () => fetch().then(authenticate);

  return { register };
};
