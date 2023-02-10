import { useMutation, useQuery } from "react-query";
import { imagesApi } from "../../shared/api/images";
import { queryClient } from "../../shared/query-client";

export const useUploadImage = () => {
  const mutation = useMutation(
    ({ name, file }) => imagesApi.saveImage({ name, file }),
    { onSuccess: () => queryClient.invalidateQueries({ queryKey: ["images"] }) }
  );

  return mutation;
};

export const useImages = () => {
  return useQuery(["images"], () => imagesApi.getMany());
};
