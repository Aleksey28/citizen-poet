import './styles/page-petition.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoPetition from '../InfoPetition/InfoPetition';
import {useState} from "react";
import SearchPetition from '../SearchPetition/SearchPetition';
import Legends from '../legend-petition/legends';
import CreatePetition from '../CreatePetititon/createPetition';

const PagePetition = ({ listPetition }) => {

  // следим за изменением активной петиции
  const [currentPetition, setCurrentPetition] = useState({});
  // скрываем легенду при переходе на петицию
  const [showLegends, setShowLegends] = useState(true);
  // передаем в компоненту петиций data - петиции

  const handleClickOnPetition = ( data ) => {
    setCurrentPetition(data);
    setShowLegends(false);
  };

  const handleClickBack = () => {
    setShowLegends(true);
  }

  return (
    <div className="page-petition">
      { showLegends && <SearchPetition/> }

      <div className="page-petition__info">
        { showLegends && <ListPetition listPetition={ listPetition } onPetitionClick={ handleClickOnPetition }/> }

        { !showLegends && <InfoPetition currentPetition={ currentPetition }  onBackCLick={ handleClickBack }/> }
        { showLegends && <Legends/> }
      </div>

      <CreatePetition />
    </div>
  );
}

export default PagePetition;
