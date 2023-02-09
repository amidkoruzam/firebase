import { firebase } from "../firebase";

const saveImage = ({ name, file }) => firebase.saveImage({ name, file });

export const imagesApi = {
  saveImage,
};
