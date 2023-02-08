import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app);

export const signIn = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
