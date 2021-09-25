import { useState, useEffect } from "react";
import { fetchCategory } from "../../helpers/config";
import { NavLink } from "react-router-dom";
import s from "./Categories.module.css";

const Categories = ({ addCategory }) => {
  const [category, setCategory] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(5);
  useEffect(() => {
    fetchCategory(setCategory);
  }, [setCategory]);
  return (
    <div>
      <div className={s.info}>
        THERE ARE SOME CATEGORIES OF IMAGES,
        <br />
        PLEASE , CHOOSE ONE OF THEM.
      </div>
      <div>
        {category.map((c, id) => (
          <NavLink
            to="/"
            key={id}
            className={s.ul}
            onClick={(e) => {
              setCurrentCategory(+e.target.innerHTML);
              addCategory(currentCategory);
            }}
          >
            {c}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
