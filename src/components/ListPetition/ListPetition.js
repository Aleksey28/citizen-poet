import "./ListPetition.css";
import React from "react";
import ItemPetition from "../ItemPetition/ItemPetition";

const ListPetition = ({ listPetition, onPetitionClick }) => {

  const setListPet = (listPetition !== null);

  const seeMode = () => {
    if (setListPet) {
      return (

        listPetition.map(item => {
          return <ItemPetition key={item.id} item={item} onPetitionClick={onPetitionClick}/>;
        })

      );
    } else {
      return (<h2> Нет петиций </h2>);
    }
  };

  return (
    <div className="list-petition">
      {seeMode()}
    </div>
  );
};

export default ListPetition;
