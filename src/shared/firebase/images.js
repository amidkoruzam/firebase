import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "./db";
import { storage } from "./storage";

export const saveImage = async ({ name, file }) => {
  const path = `images/${self.crypto.randomUUID()}.${file.name
    .split(".")
    .pop()}`;

  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  await addDoc(collection(db, "images"), {
    name,
    path,
    url,
  });

  return null;
};

export const getImages = async () => {
  const q = query(collection(db, "images"));
  const images = await getDocs(q);

  return images.docs.map((image) => image.data());
};
