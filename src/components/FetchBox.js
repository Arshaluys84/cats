import { fetchHandler } from "../helpers/config";
import { useState, useEffect } from "react";
import { CatsList } from "./CatsList";
import s from './FetchBox.module.css'

export const FetchBox = ({ limit, catValue }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchHandler(limit, catValue, setImages);
  }, [limit, catValue]);

  return (
    <div className={s.catsList}>
      {images.map((image, id) => (
        <CatsList image={image} key={id} />
      ))}
    </div>
  );
};
