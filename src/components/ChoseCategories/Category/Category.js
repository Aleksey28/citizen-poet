import classes from "./Category.module.css";
import React from "react";

const Category = ({data, selectedCategory, onClick}) => {

  const handleClick = () => {
    onClick(data);
  }

  return <li className={classes.item} key={data.id}>
    <div className={`${classes.itemCircle} ${selectedCategory.id === data.id && classes.itemCircle_active}`} style={{backgroundColor: data.color}} onClick={handleClick}/>
    <p className={classes.itemName}>{data.name}</p>
  </li>

}

export default Category
