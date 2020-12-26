import React, { useCallback, useState } from "react";
import { Field, Form, Submit } from "../Form/Form";
import classes from "./FormSignIn.module.css";
import Button from "../Button/Button";

const validators = {
  email: {
    required: (value) => {
      return value === "";
    },
    isEmail: (value) => {
      return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
    },
  },
  password: {
    required: (value) => {
      return value === "";
    },
    minLength: (value) => {
      return value.length < 8;
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
      errorMessage = `Минимальное количество символов: 8. Длина текста сейчас: ${value.length} символ.`;
      break;
    case "isEmail":
      errorMessage = `Неправильно введен E-mail.`;
      break;
    default:
      errorMessage = "";
  }
  return errorMessage;
};

const FormSignIn = ({ statusLogIn }) => {
  //
  //  const [seeMode, setSeeMode] = useState(true);
  //
  // const inputKeyEnter = (e) => {
  //  if(e.key == 'Enter'){
  //    alert('enter press here! ')
  //  }
  // }

  // при нажатии на кнопку регистрация будет показана форма регистрации и если назад в регестрации то форма логина
  // const showPage = () => {
  //   setSeeMode(!seeMode);
  // }

  // настраиваем что паказываем
  //  const showMode = () => {
  // if (seeMode) {
  //   return (
  //   <form name='userLogIn' className='from-signin'>
  //     <h2 className='from-signin__title'>Вход</h2>
  //     <input type='text' className='from-signin__input' id='log-in' placeholder='Email' onKeyPress={inputKeyEnter}/>
  //     <input type='password' className='from-signin__input' id='password' placeholder='Пароль'
  // onKeyPress={inputKeyEnter} /> <div className='from-signin__action'> <p className='from-signin__text'>Еще не
  // зарегистрированы?</p> <button type='button' className='from-signin__link'
  // onClick={showPage}>Зарегистрироваться</button> </div> </form>) } else { return ( <Register showPage={showPage}
  // statusLogIn={statusLogIn}/> ) } }

  //Стейт всех значений формы
  const [formValues, setFormValues] = useState({});

  const onChangeInput = useCallback((name, value) => {
    //Обновляем стейт всех значений формы
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form name="formSignIn"
          className={classes.from}
          validators={validators}
          onSubmit={onChangeInput}
          onChangeInput={onChangeInput}
          formValues={formValues}>
      <h2 className={classes.title}>Вход</h2>
      <fieldset className={classes.fieldset}>
        <Field name="email">
          {({ onChange, value, errors, showError, ...inputProps }) => {
            const typeOfError =
              (!!errors && Object.keys(errors).find((key) => errors[key] === true)) || "";
            const errorMessage = getErrorMessage(typeOfError, value);
            return (
              <div className={classes.field}>
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
              <div className={classes.field}>
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
          >
            Войти
          </Button>
        )}
      </Submit>
      <div className={classes.registration}>
        <p className={classes.text}>Еще не зарегистрированы?</p>
        <button type="button" className={classes.link}>Зарегистрироваться</button>
      </div>
    </Form>
  );
};

export default FormSignIn;
