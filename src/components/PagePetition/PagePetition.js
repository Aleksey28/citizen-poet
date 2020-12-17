import './PagePetition.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoPetition from '../InfoPetition/InfoPetition';
import {useState} from "react";

const PagePetition = ({listPetition}) => {

  const [currentPetition, setCurrentPetition] = useState({});

  const handleClickOnPetition = (data) => {
    setCurrentPetition(data);
  }

  return (
    <div className="page-petition">
      <ListPetition listPetition={listPetition} onPetitionClick={handleClickOnPetition}/>
      <InfoPetition currentPetition={currentPetition}/>
    </div>
  );
}

export default PagePetition;
