import './styles/InfoProfile.css';
import DefaultIcon from '../icons/profile/DefaultIcon';

const InfoProfile = ({user}) => {

  // функция отоброджения аватарки, если null значит дефолтная иконка, если есть дата или url, грузил по ним
  const profileIcon = function(logo) {
    if (logo == null) {
      return <DefaultIcon className="info-profile__avatar"/> 
    } else {
      return <img src="http://i1.ytimg.com/vi/XKFSikgM0yY/maxresdefault.jpg" alt="Аватар пользователя" className="info-profile__avatar"/>
    };
  }

  return (
    <div className="info-profile">
      {
        profileIcon(user.logo)
      }
      <h2 className="info-profile__name">{user.fullName()}</h2>
      <p className='info-profile__text'>Ваш рейтинг: {user.reiting}</p>
      <p className='info-profile__text'>Создано петиций: {user.petitonCount}</p>
      <button type='button' className='info-profile__log-out'>Выйти</button>
    </div>
  )
}

export default InfoProfile;
