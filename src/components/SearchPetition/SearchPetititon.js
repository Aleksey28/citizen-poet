import react from 'react'
import './styles/search-petition.css';
import CardViewMode from '../icons/CadViewMode';
import LineViewMode from '../icons/LineViewMode';
import {useState} from 'react';
const SearchPetition = ({ setMode }) => {

  const [visualBTN, setVisualBTN] = useState(true);

  const activeBtnOne = () => {
    console.log(visualBTN);
    setVisualBTN(!visualBTN);
    setVisualMode();
  }

  const setVisualMode = () => {
    const listPetition = document.querySelector('.list-petition');
    if (visualBTN) {
      console.log(listPetition)
      listPetition.setAttribute('backgroundColor', 'red');
    } else {
      listPetition.setAttribute('flexFlow', 'row nowrap');
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