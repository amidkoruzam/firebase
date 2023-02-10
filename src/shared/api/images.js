import { firebase } from "../firebase";

const saveImage = ({ name, file }) => firebase.saveImage({ name, file });

const getMany = () => firebase.getImages();

export const imagesApi = {
  saveImage,
  getMany,
};
