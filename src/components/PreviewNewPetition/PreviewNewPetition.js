import classes from './PreviewNewPetition.module.css';
import React, {useState, useCallback} from "react";
import Button from "../Button/Button";
import {Field, Form, Submit} from "../Form/Form";
import {translateToPoem} from "../../util/functions";

const validators = {
  name: {
    required: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 2;
    },
  },
  to: {
    required: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 2;
    },
  },
  description: {
    required: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 2;
    },
  },
};

const getErrorMessage = (typeOfError, value = '') => {
  let errorMessage;
  switch (typeOfError) {
    case 'required':
      errorMessage = 'Вы пропустили это поле.';
      break;
    case 'minLength':
      errorMessage = `Минимальное количество символов: 2. Длина текста сейчас: ${value.length} символ.`;
      break;
    default:
      errorMessage = '';
  }
  return errorMessage;
};

const PreviewNewPetition = ({poemsText, onBack}) => {

  //Стейт всех значений формы
  const [formValues, setFormValues] = useState({});
  const [showTranslate, setShowTranslate] = useState(false);

  const onChangeInput = useCallback((name, value) => {
    //Обновляем стейт всех значений формы
    setFormValues((prevValues) => ({...prevValues, [name]: value}));
  }, []);

  const handleOnSubmit = (values) => {
    if(!showTranslate) {
      setShowTranslate(true);
    } else {
      console.log(values);
    }
  }

  const handleClickOnBack = () => {
    if(showTranslate) {
      setShowTranslate(false);
    } else {
      onBack();
    }
  }

  return (
    <div className={classes.page}>
      <Form
        name="container"
        className={classes.form}
        validators={validators}
        onSubmit={handleOnSubmit}
        onChangeInput={onChangeInput}
        formValues={formValues}
        defaultValues={{
          name: "",
          to: "",
          description: ""
        }}
      >
        <fieldset className={classes.fieldset}>
          <Field name="name">
            {({onChange, value, errors, ...inputProps}) => {
              const typeOfError =
                (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || '';
              const errorMessage = getErrorMessage(typeOfError, value);
              return (
                <div className={`${classes.field} ${showTranslate && classes.field_hidden}`}>
                  <input
                    placeholder="Введите название"
                    onChange={(evt) => onChange(evt.target.value)}
                    value={value}
                    {...inputProps}
                  />
                  <span>
                  {errorMessage}
                </span>
                </div>
              );
            }}
          </Field>
          <Field name="to">
            {({onChange, value, errors, ...inputProps}) => {
              const typeOfError =
                (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || '';
              const errorMessage = getErrorMessage(typeOfError, value);
              return (
                <div className={`${classes.field} ${showTranslate && classes.field_hidden}`}>
                  <input
                    placeholder="Введите получателя"
                    onChange={(evt) => onChange(evt.target.value)}
                    value={value}
                    {...inputProps}
                  />
                  <span>
                  {errorMessage}
                </span>
                </div>
              );
            }}
          </Field>
          <Field name="description">
            {({onChange, value, errors, ...inputProps}) => {
              const typeOfError =
                (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || '';
              const errorMessage = getErrorMessage(typeOfError, value);
              return (
                <div className={`${classes.field} ${showTranslate && classes.field_hidden}`}>
                <textarea
                  placeholder="Опишите петицию"
                  onChange={(evt) => onChange(evt.target.value)}
                  value={value}
                  {...inputProps}
                />
                  <span>
                  {errorMessage}
                </span>
                </div>
              );
            }}
          </Field>
          {showTranslate && <div className={classes.preview}>
            <h2 className={classes.preview__name}>{translateToPoem(formValues.name, poemsText)}</h2>
            <p className={classes.preview__to}>{formValues.to}</p>
            <p className={classes.preview__description}>{translateToPoem(formValues.description, poemsText)}</p>
          </div>}
        </fieldset>


        <div className={classes.buttons}>
          <Button handleClickOnButton={handleClickOnBack}>
            Вернуться назад
          </Button>
          <Submit>
            {({disabled}) => (
              <button
                className={classes.submit}
                type="submit"
                disabled={disabled}
              >
                {showTranslate ? 'Подать петицию' : 'Предпросмотр'}
              </button>
            )}
          </Submit>
        </div>
      </Form>
    </div>
  );
}

export default PreviewNewPetition;
