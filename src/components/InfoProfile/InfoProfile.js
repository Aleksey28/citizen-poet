import './styles/InfoProfile.css';
import DefaultIcon from '../icons/profile/DefaultIcon';




const InfoProfile = ({user, statusLogIn}) => {

  // функция отоброджения аватарки, если null значит дефолтная иконка, если есть дата или url, грузил по ним
  const profileIcon = function(logo) {
    if (logo == null) {
      return <DefaultIcon className="info-profile__avatar"/> 
    } else {
      return <img src="http://i1.ytimg.com/vi/XKFSikgM0yY/maxresdefault.jpg" alt="Аватар пользователя" className="info-profile__avatar"/>
    };
  }

  // если пользователь нажал выйти, уходим на страницу логина
  const logOut = () => {
    const storage = window.localStorage;
    storage.setItem('log', 'false')
    console.log((!storage.getItem('log')))
    statusLogIn(false);
  }

  return (
    <div className="info-profile">
      {
        profileIcon(user.logo)
      }
      <h2 className="info-profile__name">{user.fullName()}</h2>
      <p className='info-profile__text'>Ваш рейтинг: {user.reiting}</p>
      <p className='info-profile__text'>Создано петиций: {user.petitonCount}</p>
      <button type='button' className='info-profile__log-out' onClick={logOut}>Выйти</button>
    </div>
  )
}

export default InfoProfile;
