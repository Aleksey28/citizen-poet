import './styles/page-petition.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoPetition from '../InfoPetition/InfoPetition';
import {useState} from "react";
import SearchPetition from '../SearchPetition/SearchPetititon';
import Legends from '../legend-petition/legends';
import CreatePetititon from '../CreatePetititon/createPetititon';
const PagePetition = ({listPetition}) => {

  const [currentPetition, setCurrentPetition] = useState({});
  const [legends, setShowLegends] = useState(true);
  const [creatPetition, setShowCreatPetition] = useState(true);

  const handleClickOnPetition = (data) => {
    setCurrentPetition(data);
    setShowLegends(false);
    setShowCreatPetition(false);
  }



  return (
    <div className="page-petition">
      <SearchPetition />

      <div className='page-petition__info'>
        <ListPetition listPetition={listPetition} onPetitionClick={handleClickOnPetition}/>
        {legends && <Legends />}

        {Object.keys(currentPetition).length > 0 && <InfoPetition currentPetition={currentPetition}/>}
        </div>
        {creatPetition && <CreatePetititon />}
      </div>
  );
}

export default PagePetition;
