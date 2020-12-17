import './petition-page.css';
import React from "react";
import ShowPetitionAll from './show-petition/show-petition';
import InfoPetition from './info-petition/info-petition';

const PetitionPage = ({items}) => {
  return (
    <div className="petition-page">
      <div className="show-petiton">
        {
          items.map(el => {
            return <ShowPetitionAll items={el}/>
          })
        }
      </div>
      <InfoPetition />
    </div>
  );
}

export default PetitionPage;