import './styles/InfoProfile.css';
import DefaultIcon from '../icons/profile/DefaultIcon';
import { useHistory } from "react-router-dom";



const InfoProfile = ({userData, url, handleLogIn}) => {

  const history = useHistory();

  // функция отоброджения аватарки, если null значит дефолтная иконка, если есть дата или url, грузил по ним
  const profileIcon = function(avatar) {
    if (avatar == null) {
      return <DefaultIcon className="info-profile__avatar"/>
    } else {
      return <img src={avatar} alt="Аватар пользователя" className="info-profile__avatar"/>
    };
  }

  // если пользователь нажал выйти, уходим на страницу логина
  const logOut = () => {
    localStorage.removeItem('jwt');
    history.push(`${url}/login`);
    handleLogIn(false);
  }
  return (
    <div className="info-profile">
      {
        profileIcon(userData.avatar)
      }
      <h2 className="info-profile__name">{`${userData.firstName} ${userData.secondName} ${userData.middleName}`}</h2>
      <p className='info-profile__text'>Ваш рейтинг: 0</p>
      <p className='info-profile__text'>Создано петиций: 0</p>
      <button type='button' className='info-profile__log-out' onClick={logOut}>Выйти</button>
    </div>
  )
}

export default InfoProfile;
