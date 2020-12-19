import './styles/register.css'
import userData from '../../data/user__prof';
const Register = ({showPage, statusLogIn}) => {

  // валидация и отображение что не введно при регестрации
  const validateRegister = () => {
    const name = document.getElementById('name');
    const lastName = document.getElementById('lastName');
    const soname = document.getElementById('soname');
    const email = document.getElementById('email');
    const age = document.getElementById('age');
    const logIn = document.getElementById('log-in');
    const password = document.getElementById('password');
    const passwordReply = document.getElementById('password-reply');
    const allInput = document.querySelectorAll('.user-logIn-form__input');
    
    const inputValue = () => {
      let clearInput = true;
      allInput.forEach(element => {
        if (!element.value) {
          element.style.border = '1px red solid';
          element.style.color = 'red';
          clearInput = false;
        } else {
          element.style.border = '1px black solid';
          element.style.color = 'black';
        }
      })
      return clearInput;
    };

    if (inputValue && (password.value === passwordReply.value)) {
      userData.name = name.value;
      userData.lastName = lastName.value;
      userData.soname = soname.value;
      userData.email = email.value;
      userData.age = age.value;
      userData.logIn = logIn.value;
      userData.password = password.value;
      userData.petitonCount = '0';
      userData.reiting = '0';
      userData.logo = null;
      statusLogIn(true);
    } else {
      password.value ='';
      passwordReply.value ='';
    }
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
      <input type='password' className='user-logIn-form__input' id='password' placeholder='Придумайте Пароль'/>
      <input type='password' className='user-logIn-form__input' id='password-reply' placeholder='Повторите Пароль'/>
      <div className='register__action'>
        <button type='button' onClick={showPage}>Назад</button>
        <button type='button' onClick={validateRegister}>Регистрация</button>
      </div>
    </form>
  )
}

export default Register;