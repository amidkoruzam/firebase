import { firebase } from "../firebase";

const signIn = ({ email, password }) => firebase.signIn({ email, password });

const getViewer = () => fetch();

export const authApi = {
  signIn,
};
