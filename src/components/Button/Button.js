import classes from './Button.module.css';
import React from "react";

const Button = ({handleClickOnButton, isMainButton, type, children, extensionClass = "", ...props}) => {

  const onButtonClick = (e) => {
    e.preventDefault();
    handleClickOnButton();
  }

  return (
    <button className={`${classes.button} ${isMainButton && classes.button_main} ${extensionClass}`}
            onClick={onButtonClick} type={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
