import './PagePetition.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoPetition from '../InfoPetition/InfoPetition';

const PagePetition = ({items}) => {
  return (
    <div className="page-petition">
      <ListPetition items={items}/>
      <InfoPetition/>
    </div>
  );
}

export default PagePetition;
