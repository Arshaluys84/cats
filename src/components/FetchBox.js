import { fetchHandler } from "../helpers/config";
import { useState, useEffect } from "react";
import { CatsList } from "./CatsList";

export const FetchBox = ({ limit, catValue }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchHandler(limit, catValue, setImages);
  }, [limit, catValue, setImages]);
  return (
    <>
      {images.map((image, id) => (
        <CatsList image={image} key={id} />
      ))}
    </>
  );
};
