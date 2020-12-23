import './styles/register.css'
import userData from '../../data/user__prof';
import userPet from '../../data/user__pet';
const Register = ({showPage, statusLogIn}) => {


     const showProfile = () => {
      statusLogIn(true)
     }
    
  return (
    <form className='register'>
      <h2 className='register__title'>Регистрация</h2>
      <input type='text' className='register-form__input' id='name' placeholder='Email'/>
      <input type='password' className='register-form__input' id='lastName' placeholder='Пароль'/>
      <input type='password' className='register-form__input' id='soname' placeholder='Подтверждение пароля'/>
      <button type='button' className='register__button' onClick={showProfile}>Регистрация</button>
    </form>
  )
}

export default Register;