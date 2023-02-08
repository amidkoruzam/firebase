import { useQuery } from "react-query";
import { usersApi } from "../../shared/api/users";

export const useUser = (id) => {
  const user = useQuery(["users", id], () => usersApi.getUserById(id), {
    enabled: !!id,
  });

  return user;
};
