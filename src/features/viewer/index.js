import { useAuth } from "../../shared/auth";
import { useUser } from "../users";

export const useViewer = () => {
  const { viewer } = useAuth();
  const user = useUser(viewer?.uid);

  return { auth: viewer, user };
};
