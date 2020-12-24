import classes from './FormNewPetition.module.css';
import React, {useCallback, useState} from "react";
import Button from "../Button/Button";
import {Field, Form, Submit} from "../Form/Form";

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

const PageNewPetition = ({poemsText, defaultValue, onBack, onContinue, onAddData}) => {

  //Стейт всех значений формы
  const [formValues, setFormValues] = useState({});

  const onChangeInput = useCallback((name, value) => {
    //Обновляем стейт всех значений формы
    setFormValues((prevValues) => ({...prevValues, [name]: value}));
  }, []);

  const handleOnPreview = (values) => {
    onAddData(values);
    onContinue();
  }

  const handleClickOnBack = () => {
    onBack();
  }

  return (
    <Form
      name="container"
      className={classes.form}
      validators={validators}
      onSubmit={handleOnPreview}
      onChangeInput={onChangeInput}
      formValues={formValues}
      defaultValues={{
        name: defaultValue.name,
        to: defaultValue.to,
        description: defaultValue.description
      }}
    >
      <fieldset className={classes.fieldset}>
        <Field name="name">
          {({onChange, value, errors, showError, ...inputProps}) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || '';
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
                <input
                  placeholder="Напишите название петиции..."
                  onChange={(evt) => onChange(evt.target.value)}
                  value={value}
                  {...inputProps}
                />
                {showError && <span>
                  {errorMessage}
                </span>}
              </div>
            );
          }}
        </Field>
        <Field name="to">
          {({onChange, value, errors, showError, ...inputProps}) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || '';
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
                <input
                  placeholder="Кому адресована петиция (например, мэр вашего города)..."
                  onChange={(evt) => onChange(evt.target.value)}
                  value={value}
                  {...inputProps}
                />
                {showError && <span>
                  {errorMessage}
                </span>}
              </div>
            );
          }}
        </Field>
        <Field name="description">
          {({onChange, value, errors, showError, ...inputProps}) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || '';
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
                <textarea
                  className={classes.description}
                  placeholder="Опишите ситуацию и расскажите о том, что вы хотите изменить..."
                  onChange={(evt) => onChange(evt.target.value)}
                  value={value}
                  {...inputProps}
                />
                {showError && <span>
                  {errorMessage}
                </span>}
              </div>
            );
          }}
        </Field>
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
              Предпросмотр
            </button>
          )}
        </Submit>
      </div>
    </Form>
  );
}

export default PageNewPetition;
