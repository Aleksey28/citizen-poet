import './ListPetition.css';
import React from "react";
import ItemPetition from '../ItemPetition/ItemPetition';


const ListPetition = ({listPetition, onPetitionClick}) => {
  return (
      <div className="list-petition">
      {
        listPetition.map(item => {
          return <ItemPetition item={item} onPetitionClick={onPetitionClick}/>
        })
      }
    </div>
  );
}

export default ListPetition;
