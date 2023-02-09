import { useMutation } from "react-query";
import { imagesApi } from "../../shared/api/images";

export const useUploadImage = () => {
  const mutation = useMutation(({ name, file }) =>
    imagesApi.saveImage({ name, file })
  );

  return mutation;
};
