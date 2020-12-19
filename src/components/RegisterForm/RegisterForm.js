import react from 'react';
import './styles/register-form.css';

class Register extends react.Component {
  render() {
    return (
      <form name='register' className='register-form'>
        <h2 className='register-form__title'>Введите свои данные</h2>
        <input type='text' className='register-form__input' name='log-in' placeholder='логин'/>
        <input type='password' className='register-form__input' name='password' placeholder='пароль'/>
        <div className='register-form__action'>
          <button type='button' className='register-form__button register-form__button_log-in'>Вход</button>
          <button type='button' className='register-form__button register-form__button_log-in'>Регистрация</button>
        </div>
      </form>
    )
  }
}

export default Register;