import { ref, uploadBytes } from "firebase/storage";
import { db } from "./db";
import { storage } from "./storage";

export const saveImage = async ({ name, file }) => {
  const path = `images/${self.crypto.randomUUID()}`;
  const storageRef = ref(storage, path);

  const pSaved = addDoc(collection(db, "images"), {
    name,
    path,
  });

  const pImage = uploadBytes(storageRef, file);

  await Promise.all([pSaved, pImage]);

  return null;
};
