import classes from "./Category.module.css";
import cn from "classnames";
import React from "react";

const Category = ({ data, selectedCategory, onClick }) => {

  const handleClick = () => {
    onClick(data);
  };

  return <li className={classes.item} key={data.id}>
    <div className={cn(classes.itemCircle, { [classes.itemCircle_active]: selectedCategory.id === data.id })}
         style={{ backgroundColor: data.color }}
         onClick={handleClick}/>
    <p className={classes.itemName}>{data.name}</p>
  </li>;

};

export default Category;
