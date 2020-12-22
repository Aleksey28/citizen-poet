import './styles/register.css'
import userData from '../../data/user__prof';
import userPet from '../../data/user__pet';
const Register = ({showPage, statusLogIn}) => {

    const name = document.getElementById('name'),
          lastName = document.getElementById('lastName'),
          soname = document.getElementById('soname'),
          email = document.getElementById('email'),
          age = document.getElementById('age'),
          logIn = document.getElementById('log-in'),
          password = document.getElementById('password'),
          passwordReply = document.getElementById('password-reply'),
          allInput = document.querySelectorAll('.user-logIn-form__input'),
          storage = window.localStorage;

    const validateRegister = () => {
      const validate = new Promise( (res, rej) => {
        let clearInpout = 0;

        allInput.forEach(el => {

          if (el.value) {
            el.style.border = '1px black solid'
            clearInpout++
          } else {
            el.style.border = '1px red solid'
            clearInpout--
          }
        })

        if (clearInpout === 8) {
          res();
        }
      })

      validate.then(() => {
        userData.name = name.value
        userData.soname = soname.value
        userData.lastName = lastName.value
        userData.email = email.value
        userData.age = age.value
        userData.logIn = logIn.value
        userData.password = password.value
        userData.reiting = '0'
        userData.petition = userPet.length

        statusLogIn(true)
      })
      storage.setItem('log', true)
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