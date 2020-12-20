import './styles/user-logIn.css';
import user from '../../data/user__prof';
import {useState} from 'react';
import Register from '../Register/Register';

const UserLogIn = ({statusLogIn}) => {
  
  const [seeMode, setSeeMode] = useState(true);

  const validatePassword = () => {
    const valueLogIn = document.getElementById('log-in').value;
    const valuePassword = document.getElementById('password').value;

    if (valueLogIn === user.logIn && valuePassword === user.password) {
      statusLogIn(true);
    } else {
      alert('Wrong data');
    }
  }

  // при нажатии на кнопку регистрация будет показана форма регистрации и если назад в регестрации то форма логина
  const showPage = () => {
    setSeeMode(!seeMode);
  }
 // настраиваем что паказываем
  const showMode = () => {
    if (seeMode) { 
      return (<form name='UserLogIn' className='user-logIn-form'>
        <h2 className='user-logIn-form__title'>Введите свои данные</h2>
        <input type='text' className='user-logIn-form__input' id='log-in' placeholder='логин'/>
        <input type='password' className='user-logIn-form_input' id='password' placeholder='пароль'/>
        <div className='user-logIn-form__action'>
          <button type='button' className='user-logIn-form_button user-logIn-form__button_log-in' onClick={validatePassword}>Вход</button>
          <button type='button' className='user-logIn-form__button user-logIn-form__button_register' onClick={showPage}>Регистрация</button>
        </div>
      </form>)
    } else {
       return ( <Register showPage={showPage} statusLogIn={statusLogIn}/> )
    }
  }
  return (
    showMode()
  )
}

export default UserLogIn;