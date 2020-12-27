import classes from "./PreviewNewPetition.module.css";
import React from "react";
import Button from "../Button/Button";
import { translateToPoem } from "../../util/functions";

const PreviewNewPetition = ({ poemsText, data, onBack, onContinue }) => {

  const handleClickOnBack = () => {
    onBack();
  };

  return (
    <div className={classes.page}>
      <div className={classes.preview}>
        <h2 className={classes.preview__name}>{translateToPoem(data.name, poemsText)}</h2>
        <p className={classes.preview__to}>{data.to}</p>
        <p className={classes.preview__description}>{translateToPoem(data.description, poemsText)}</p>
      </div>


      <div className={classes.buttons}>
        <Button handleClickOnButton={handleClickOnBack}>
          Назад
        </Button>
        <Button isMainButton={true}
                handleClickOnButton={() => {
                  alert("На данный момент отправка петиций не реализована, но мы обязательно исправим этот момент ;)");
                }}>
          Подать петицию
        </Button>
      </div>
    </div>
  );
};

export default PreviewNewPetition;
