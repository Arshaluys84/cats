import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {

  return (
    <div className={s.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </div>
  );
};


