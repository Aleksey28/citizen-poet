import "./styles/ItemPetition.css";
import defaultLogo from '../../img/card__logo.png';
import OrangeCircle from '../icons/legends/OrangeCircle';
import YellowCircle from '../icons/legends/YellowCircle';
import DarkBlueCircle from '../icons/legends/DarkBlueCircle';
import LightGreyCircle from '../icons/legends/LightGreyCircle';
import MIddleGreenCircle from '../icons/legends/MIddleGreenCircle';
import SharePetition from '../icons/card__pet/Share';
import LikePetition from '../icons/card__pet/Like';

const ItemPetition = ({ item, onPetitionClick, onBackBlock }) => {
  const handleClickPetition = () => {
    onPetitionClick(item);
    onBackBlock();
  };

  return (
    <div className="item-petition" onClick={handleClickPetition}>
      <img src={defaultLogo} className="item-petition__logo" />
      <div className="item-petition__info">
        <h2 className="item-petition__title">{item.title}</h2>
          <div className="item-petition__types">
            <OrangeCircle className="item-petition__circle"/>
            <YellowCircle  className="item-petition__circle"/>
            <DarkBlueCircle  className="item-petition__circle"/>
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
