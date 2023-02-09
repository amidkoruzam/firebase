import * as React from "react";
import { useUploadImage } from "./model";

export const ImageUploader = () => {
  const mutation = useUploadImage();

  const onSubmit = (evt) => {
    evt.preventDefault();
    const {
      name: { value: name },
      file: {
        files: [file],
      },
    } = evt.target.elements;

    if (name && file) {
      mutation.mutate({ name, file });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          File:
          <input name="file" type="file" />
        </label>

        <label>
          Image name:
          <input name="name" />
        </label>

        <button>Save</button>
      </form>
    </div>
  );
};
