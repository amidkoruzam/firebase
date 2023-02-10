import { signIn } from "./auth";
import { getImages, saveImage } from "./images";
import { getUserById } from "./users";

export const firebase = {
  signIn,
  getUserById,
  saveImage,
  getImages,
};
