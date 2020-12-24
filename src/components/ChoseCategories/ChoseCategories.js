import React, {useState} from "react";
import {categories} from "../../util/constants";
import classes from "./ChoseCategories.module.css";
import Category from "./Category/Category";
import Button from "../Button/Button";

const ChoseCategories = ({onContinue, onAddData}) => {

  const [selectedCategory, setSelectedCategory] = useState({});

  const handleClickCategory = (category) => {
    setSelectedCategory(category);
  }

  const handleShowContinue = () => {
    onAddData({category: selectedCategory.id})
    onContinue();
  }

  return (
    <div className={classes.block}>
      <section className={classes.main}>
        <h2 className={classes.title}>Выберете категорию вашей петиции</h2>
        <p className={classes.description}>Выбор темы важен для того, чтобы рекомендовать вашу петицию тем пользователям
          платформы, которые заинтересованы
          в схожих вопросах.</p>
        <ul className={classes.list}>
          {categories.map(item => {
            return <Category data={item} selectedCategory={selectedCategory} onClick={handleClickCategory}/>
          })}
        </ul>
      </section>
      <div className={classes.buttons}>
        <Button isMainButton={true} handleClickOnButton={handleShowContinue}
                disabled={!Object.keys(selectedCategory).length}>Продолжить</Button>
      </div>
    </div>
  )
}

export default ChoseCategories
