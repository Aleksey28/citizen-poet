import react from 'react'
import './styles/search-petition.css';
import CardViewMode from '../icons/CadViewMode';
import LineViewMode from '../icons/LineViewMode';
import {useState} from 'react';

const SearchPetition = ({ setMode }) => {

  const [visualBTN, setVisualBTN] = useState(true);

  const activeBtnOne = () => {
    setVisualBTN(!visualBTN);
    setVisualMode();
  }

  const setVisualMode = () => {
    const listPetition = document.querySelector('.list-petition');
    const itemPetition = document.querySelectorAll('.item-petition');
    if (visualBTN) {
      listPetition.style.gridTemplateColumns = 'repeat(auto-fit, 100%)';
      document.querySelector('.legends-petition').style.flex = '2 1 auto'
      itemPetition.forEach(el => {
        el.style.height = '88px';
        el.querySelector('.item-petition__logo').style.display = 'none';
        el.querySelector('.item-petition__author').style.display = 'none';
        el.querySelector('.info-petition__action').style.display = 'none'
        el.querySelector('.item-petition__text').style.width = '100%';
        el.querySelector('.item-petition__text').style.height = '32px';
      })
    } else {
      listPetition.style.gridTemplateColumns = 'repeat(auto-fit, 264px)';
      document.querySelector('.legends-petition').style.flex = '1 1 auto'
      itemPetition.forEach(el => {
        el.style.height = '316px';
        el.querySelector('.item-petition__logo').style.display = 'block';
        el.querySelector('.item-petition__author').style.display = 'block';
        el.querySelector('.info-petition__action').style.display = 'block';
        el.querySelector('.item-petition__text').style.width = '240px';
        el.querySelector('.item-petition__text').style.height = '68px';
      })
    }
  }

  return (
    <div className='search-petition'>
      <input placeholder='Поиск...' type='text' name='search__input-petition' className='search__input-petition '/>
      <button className='search__link' onClick={activeBtnOne}>
        {
          visualBTN ? <CardViewMode className='search__icon'/> : <LineViewMode className='search__icon'/>
        }

      </button>
    </div>
  );
}

export default SearchPetition;