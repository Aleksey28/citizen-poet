import {useState, createContext, useContext, useEffect} from 'react';

//Создаем контекст для вложенных компонентов формы
const FormContext = createContext({});

//Компоненты формы
export function Form({children, className, onSubmit, validators, defaultValues = {}, onChangeInput, formValues}) {
  //Стейт всех ошибок формы
  const [formErrors, setFormErrors] = useState({});
  //Создаем общий стейт для формы для включения/отключения submit
  const [isInvalid, setIsInvalid] = useState(true);

  //Обработчик submit
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(formValues);
  };

  //Вызываем валидацию на каждый ввод в форму
  useEffect(() => {
    //Получаем все ключи
    const formKeys = Object.keys(formValues);

    //Проверяем валидацию всех значений формы
    const allErrors = formKeys
      .map((key) => {
        const valueByKey = formValues[key];
        if (!validators[key]) {
          return {};
        }
        const errors = Object.entries(validators[key])
          .map(([errorKey, validatorFn]) => {
            return {[errorKey]: validatorFn(valueByKey)};
          })
          .reduce((acc, item) => ({...acc, ...item}), {});
        return {[key]: errors};
      })
      .reduce((acc, item) => ({...acc, ...item}), {});

    //Устанавливаем стейт всех ошибок формы
    setFormErrors(allErrors);
  }, [formValues, setFormErrors, validators]);

  //Определение общей валидности формы
  useEffect(() => {
    for (const fielKey in formErrors) {
      const keyErrors = formErrors[fielKey];
      for (const errorKey in keyErrors) {
        if (keyErrors[errorKey] === true) {
          return setIsInvalid(true);
        }
      }
    }
    setIsInvalid(false);
  }, [formErrors, setIsInvalid]);

  //Заполняем контекст формы
  const formContextValue = {onChangeInput, isInvalid, formErrors, defaultValues};

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <FormContext.Provider value={formContextValue}>{children}</FormContext.Provider>
    </form>
  );
}

//Компонент поля формы
export function Field({children, name}) {
  //Получаем значения контекста формы
  const {onChangeInput, formErrors, defaultValues} = useContext(FormContext);

  const defaultValue = !!defaultValues[name] ? defaultValues[name] : '';

  //Определяем стейт значения поля
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);


  //Установка значения в значения формы
  useEffect(() => {
    onChangeInput(name, value);
  }, [name, value, onChangeInput]);

  return children({
    name,
    value,
    onChange: setValue,
    errors: formErrors[name],
  });
}

//Компонент кнопки формы
export function Submit({children}) {
  //Получаем значение валидности кнопки из формы
  const {isInvalid} = useContext(FormContext);
  return children({disabled: isInvalid});
}
