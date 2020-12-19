import './styles/InfoProfile.css';

const InfoProfile = ({user}) => {

  return (
    <div className="info-profile">
      <img src="http://i1.ytimg.com/vi/XKFSikgM0yY/maxresdefault.jpg" alt="Аватар пользователя" className="info-profile__avatar"/>
      <h2 className="info-profile__name">Пушкин АСи</h2>
    </div>
  )
}

export default InfoProfile;
