import classes from './Button.module.css';
import React from "react";

const Button = ({handleClickOnButton, isMainButton, type, children}) => {

  const onButtonClick = (e) => {
    e.preventDefault();
    handleClickOnButton();
  }

  return (
    <button className={`${classes.button} ${isMainButton && classes.button_main}`} onClick={onButtonClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
