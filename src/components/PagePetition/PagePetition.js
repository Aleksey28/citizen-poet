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
  // скрываем лист петиций при переходе на петицию
  const [showListPet, setShowListPet] = useState(true);
  // передаем в компоненту петиций data - петиции
  const handleClickOnPetition = ( data ) => {
    setCurrentPetition(data);
    setShowListPet(false);
  };

  return (
    <div className="page-petition">
      <SearchPetition />

      <div className='page-petition__info'>
        {showListPet && <ListPetition listPetition={ listPetition } onPetitionClick={ handleClickOnPetition }/> }

        {!showListPet && <InfoPetition currentPetition={ currentPetition }/>}
      </div>
      <Legends />
      <CreatePetition />
    </div>
  );
}

export default PagePetition;
