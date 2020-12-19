import './styles/register-form.css';
import user from '../../data/user__prof';
import {useState} from 'react';
const Register = ({status}) => {
  const [logIn, setLogIn] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = () => {
    if (logIn === user.logIn && password === user.password) {
      status(true);
    } else {
      alert('Wrong data');
    }
  }

  const register = (item) => {
    status(true)
  }

  return (
    <form name='register' className='register-form'>
      <h2 className='register-form__title'>Введите свои данные</h2>
      <input type='text' className='register-form__input' name='log-in' placeholder='логин' onChange={setLogIn}/>
      <input type='password' className='register-form__input' name='password' placeholder='пароль'onChange={setPassword}/>
      <div className='register-form__action'>
        <button type='button' className='register-form__button register-form__button_log-in' onClick={validatePassword}>Вход</button>
        <button type='button' className='register-form__button register-form__button_log-in'>Регистрация</button>
      </div>
    </form>
  )
}

export default Register;