import './ListPetition.css';
import React from "react";
import ItemPetition from '../ItemPetition/ItemPetition';

const ListPetition = ({items}) => {
  return (
    <div className="list-petition">
      {
        items.map(el => {
          return <ItemPetition items={el}/>
        })
      }
    </div>
  );
}

export default ListPetition;
