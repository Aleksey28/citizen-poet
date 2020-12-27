import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Register.module.css";
import { Field, Form, Submit } from "../Form/Form";
import Button from "../Button/Button";
import { apiObject } from "../../util/api";

const validators = {
  email: {
    required: (value) => {
      return value === "";
    },
    isEmail: (value) => {
      return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(value);
    },
  },
  password: {
    required: (value) => {
      return value === "";
    },
    minLengthPassword: (value) => {
      return value.length < 8;
    },
  },
  firstName: {
    required: (value) => {
      return value === "";
    },
    minLength: (value) => {
      return value.length < 2;
    },
    maxLength: (value) => {
      return value.length > 30;
    },
  },
  secondName: {
    required: (value) => {
      return value === "";
    },
    minLength: (value) => {
      return value.length < 2;
    },
    maxLength: (value) => {
      return value.length > 30;
    },
  },
  middleName: {
    required: (value) => {
      return value === "";
    },
    minLength: (value) => {
      return value.length < 2;
    },
    maxLength: (value) => {
      return value.length > 30;
    },
  },
  birthDate: {
    required: (value) => {
      return value === "";
    },
    isData: (value) => {
      return !/\d{2,2}\.\d{2,2}\.\d{4,4}/.test(value);
    },
  },
};

const getErrorMessage = (typeOfError, value = "") => {
  let errorMessage;
  switch (typeOfError) {
    case "required":
      errorMessage = "Вы пропустили это поле.";
      break;
    case "minLength":
      errorMessage = `Минимальное количество символов: 2. Длина текста сейчас: ${value.length} символ.`;
      break;
    case "minLengthPassword":
      errorMessage = `Минимальное количество символов: 8. Длина текста сейчас: ${value.length} символ.`;
      break;
    case "maxLength":
      errorMessage = `Максимальное количество символов: 30. Длина текста сейчас: ${value.length} символ.`;
      break;
    case "isEmail":
      errorMessage = `Неправильно введен E-mail.`;
      break;
    case "isData":
      errorMessage = `Дата должна иметь формат dd.mm.yyyy.`;
      break;
    default:
      errorMessage = "";
  }
  return errorMessage;
};

const Register = ({ url }) => {

  const history = useHistory();

  //Стейт всех значений формы
  const [formValues, setFormValues] = useState({});

  const onChangeInput = useCallback((name, value) => {
    //Обновляем стейт всех значений формы
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const handleSubmit = (values) => {
    // здесь нужно будет добавить логин
    apiObject.signUp(values).then((res) => {
      if (res.statusCode !== 400) {
        alert("Вы зарегистрировались, войдите в систему с введенным e-mail и паролем.");
        history.push(`${url}/login`);
      }
    }).catch(console.log);
  };

  return (
    <Form name="formRegister"
          className={classes.form}
          validators={validators}
          onSubmit={handleSubmit}
          onChangeInput={onChangeInput}
          formValues={formValues}>
      <h2 className={classes.title}>Регистрация</h2>
      <fieldset className={classes.fieldset}>
        <Field name="firstName">
          {({ onChange, value, errors, showError, ...inputProps }) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || "";
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
                <input
                  placeholder="Введите имя"
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
        <Field name="secondName">
          {({ onChange, value, errors, showError, ...inputProps }) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || "";
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
                <input
                  placeholder="Введите фамилию"
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
        <Field name="middleName">
          {({ onChange, value, errors, showError, ...inputProps }) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || "";
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
                <input
                  placeholder="Введите отчество"
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
        <Field name="birthDate">
          {({ onChange, value, errors, showError, ...inputProps }) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || "";
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
                <input
                  placeholder="Введите дату рождения"
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
        <Field name="email">
          {({ onChange, value, errors, showError, ...inputProps }) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || "";
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={`${classes.field} ${classes.field_big}`}>
                <input
                  placeholder="Введите E-mail"
                  onChange={(evt) => onChange(evt.target.value)}
                  value={value}
                  type="email"
                  {...inputProps}
                />
                {showError && <span>
                  {errorMessage}
                </span>}
              </div>
            );
          }}
        </Field>
        <Field name="password">
          {({ onChange, value, errors, showError, ...inputProps }) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || "";
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={`${classes.field} ${classes.field_big}`}>
                <input
                  placeholder="Введите пароль"
                  onChange={(evt) => onChange(evt.target.value)}
                  value={value}
                  type="password"
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
      <Submit>
        {({ disabled }) => (
          <Button
            type="submit"
            disabled={disabled}
            style={{ width: "264px" }}
            isMainButton={true}
            handleClickOnButton={() => {}}
          >
            Зарегистрироваться
          </Button>
        )}
      </Submit>
    </Form>
  );
};

export default Register;
