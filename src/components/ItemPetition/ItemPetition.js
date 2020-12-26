import "./styles/ItemPetition.css";
import defaultLogo from '../../img/card__logo.png';
import Animals from '../icons/legends/Animals';
import Children from '../icons/legends/Children';
import CityHall from '../icons/legends/CityHall';
import HeatingSystem from '../icons/legends/HeatingSystem';
import JKH from '../icons/legends/JKH';
import Neighbors from '../icons/legends/Neighbors';
import Park from '../icons/legends/Park';
import Parking from '../icons/legends/Parking';
import President from '../icons/legends/President';
import SharePetition from '../icons/card__pet/Share';
import LikePetition from '../icons/card__pet/Like';

const ItemPetition = ({ item, onPetitionClick }) => {
  const handleClickPetition = () => {
    onPetitionClick(item);
  };

  return (
    <div className="item-petition" onClick={handleClickPetition}>
      <img src={defaultLogo} className="item-petition__logo" />
      <div className="item-petition__info">
        <h2 className="item-petition__title">{item.title}</h2>
          <div className="item-petition__types">
            <Parking className="item-petition__circle"/>
          </div>
      </div>
      <p className="item-petition__text">{item.text}</p>
      <div className="item-petition__info">
        <p className="item-petition__autor">{item.author}</p>
          <div className="info-petition__action">
            <button type='button' className='info-petition__button'>
              <SharePetition className='info-petition__icon'/>
            </button>
            <button type='button' className='info-petition__button'>
              <LikePetition  className='info-petition__icon'/>
            </button>
          </div>
      </div>
    </div>
  );
};

export default ItemPetition;
