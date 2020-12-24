import './ListPetition.css';
import React from "react";
import {useState} from "react";
import ItemPetition from '../ItemPetition/ItemPetition';
import ActionsListPetition from '../ActionsListPetition/ActionsListPetition';

const ListPetition = ({listPetition, onPetitionClick}) => {

  const [backBlock, setBackBlock] = useState(false);
  const setListPet = (listPetition !== null) ? true : false;

  const onBackBlock = () => {
    setBackBlock(true);
  };

  const seeMode = () => {
    if (setListPet) {
      return (

          listPetition.map(item => {
            return <ItemPetition item={item} onPetitionClick={onPetitionClick} onBackBlock={onBackBlock} />
          })

      );
    } else {
      return (<h2> Нет петиций </h2>)
    }
  }

  return (
      <div className="list-petition">
        {(backBlock && <ActionsListPetition/>)}
       { seeMode()}
    </div>
  );
}

export default ListPetition;
