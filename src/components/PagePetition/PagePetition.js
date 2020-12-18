import './PagePetition.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoPetition from '../InfoPetition/InfoPetition';
import {useState} from "react";
import SearchPetition from '../SearchPetition/SearchPetititon';
import Legends from '../legend-petition/legends';
const PagePetition = ({listPetition}) => {

  const [currentPetition, setCurrentPetition] = useState({});
  const [search, setShowSearch] = useState(true);
  const [legends, setShowLegends] = useState(true);

  const handleClickOnPetition = (data) => {
    setCurrentPetition(data);
    setShowSearch(false);
    setShowLegends(false);
  }



  return (
    <div className="page-petition">
      {
          (search && <SearchPetition />)
        }
        <div className='page-petition__info'>
        <ListPetition listPetition={listPetition} onPetitionClick={handleClickOnPetition}/>
        {legends && <Legends />}

        {Object.keys(currentPetition).length > 0 && <InfoPetition currentPetition={currentPetition}/>}
        </div>
      </div>

  );
}

export default PagePetition;
