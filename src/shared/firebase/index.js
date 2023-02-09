import { signIn } from "./auth";
import { saveImage } from "./images";
import { getUserById } from "./users";

export const firebase = {
  signIn,
  getUserById,
  saveImage,
};
