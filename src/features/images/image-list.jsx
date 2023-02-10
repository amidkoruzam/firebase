import { useImages } from "./model";

export const ImageList = () => {
  const images = useImages();

  return (
    <div>
      {images.data?.map((image, index) => (
        <div key={index}>
          <img height="100" width="100" alt={image.name} src={image.url} />
        </div>
      ))}
    </div>
  );
};
