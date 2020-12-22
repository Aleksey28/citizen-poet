import './styles/user-logIn.css';
import user from '../../data/user__prof';
import {useState} from 'react';
import Register from '../Register/Register';

const UserLogIn = ({statusLogIn}) => {
  
  const [seeMode, setSeeMode] = useState(true);

 const inputKeyEnter = (e) => {
  if(e.key == 'Enter'){
    alert('enter press here! ')
  }
 }

  // при нажатии на кнопку регистрация будет показана форма регистрации и если назад в регестрации то форма логина
  const showPage = () => {
    setSeeMode(!seeMode);
  }

 // настраиваем что паказываем
  const showMode = () => {
    if (seeMode) { 
      return (
      <form name='userLogIn' className='user-logIn-form'>
        <h2 className='user-logIn-form__title'>Вход</h2>
        <input type='text' className='user-logIn-form__input' id='log-in' placeholder='Email' onKeyPress={inputKeyEnter}/>
        <input type='password' className='user-logIn-form__input' id='password' placeholder='Пароль' onKeyPress={inputKeyEnter} />
        <div className='user-logIn-form__action'>
          <p className='user-logIn-form__text'>Еще не зарегистрированы?</p> 
          <button type='button' className='user-logIn-form__link' onClick={showPage}>Зарегистрироваться</button>
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