import { firebase } from "../firebase";

const getUserById = (id) => firebase.getUserById(id);

export const usersApi = {
  getUserById,
};
