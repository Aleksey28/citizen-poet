import './styles/register.css'
import userData from '../../data/user__prof';

const Register = ({showPage, statusLogIn}) => {

  // при успешной регистрации уходим на окно профиля?
  const showProfile = () => {
    statusLogIn(true);
  }

  return (
    <form className='register'>
      <h2 className='register__title'>Заполните все поля</h2>
      <input type='text' className='user-logIn-form__input' id='name' placeholder='Ваше Имя'/>
      <input type='text' className='user-logIn-form__input' id='lastName' placeholder='Ваше Отчество'/>
      <input type='text' className='user-logIn-form__input' id='soname' placeholder='Ваша Фамилия'/>
      <input type='text' className='user-logIn-form__input' id='email' placeholder='Ваша Почта'/>
      <input type='text' className='user-logIn-form__input' id='age' placeholder='Дата Рождения'/>

      <input type='text' className='user-logIn-form__input' id='log-in' placeholder='Придумайте Логин'/>
      <input type='text' className='user-logIn-form__input' id='password' placeholder='Придумайте Пароль'/>
      <input type='text' className='user-logIn-form__input' id='password-reply' placeholder='Повторите Пароль'/>
      <div className='register__action'>
        <button onClick={showPage}>Назад</button>
        <button onClick={showProfile}>Регестрация</button>
      </div>
    </form>
  )
}

export default Register;