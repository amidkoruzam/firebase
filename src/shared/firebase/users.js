import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "./db";

export const getUserById = async (id) => {
  const q = query(collection(db, "users"), where("uid", "==", id), limit(1));
  const users = await getDocs(q);

  return users.docs.map((u) => u.data())[0];
};
