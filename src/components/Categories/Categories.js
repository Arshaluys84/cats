import { useState, useEffect } from "react";
import { fetchCategory } from "../../helpers/config";
import { NavLink } from "react-router-dom";
import s from "./Categories.module.css";

export const Categories = ({ addCategory }) => {
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(5);

  useEffect(() => {
    fetchCategory(setCategory);
  }, []);

  return (
    <div>
      <div className={s.info}>
        <p>
          THERE ARE SOME CATEGORIES OF IMAGES,

          PLEASE , CHOOSE ONE OF THEM.
        </p>
      </div>

      <div>
        {category.map((item, id) => (
          <NavLink
            to="/"
            key={id}
            className={s.ul}
            onClick={(e) => {
              setCurrentCategory(+e.target.innerHTML);
              addCategory(currentCategory);
            }}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

