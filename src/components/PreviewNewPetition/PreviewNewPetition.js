import classes from './PreviewNewPetition.module.css';
import React, {useState, useCallback} from "react";
import Button from "../Button/Button";
import {Field, Form, Submit} from "../Form/Form";
import {translateToPoem} from "../../util/functions";


const PreviewNewPetition = ({poemsText, data, onBack, onContinue}) => {

  const handleClickOnBack = () => {
    onBack();
  }

  return (
    <div className={classes.page}>
      <div className={classes.preview}>
            <h2 className={classes.preview__name}>{translateToPoem(data.name, poemsText)}</h2>
            <p className={classes.preview__to}>{data.to}</p>
            <p className={classes.preview__description}>{translateToPoem(data.description, poemsText)}</p>
          </div>


        <div className={classes.buttons}>
          <Button handleClickOnButton={handleClickOnBack}>
            Вернуться назад
          </Button>
        </div>
    </div>
  );
}

export default PreviewNewPetition;
