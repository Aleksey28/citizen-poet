import './ListPetition.css';
import React from "react";
import {useState} from "react";
import ItemPetition from '../ItemPetition/ItemPetition';
import ActionsListPetition from '../ActionsListPetition/ActionsListPetition';

const ListPetition = ({listPetition, onPetitionClick}) => {

  const [backBlock, setBackBlock] = useState(false);

  const onBackBlock = () => {
    setBackBlock(true);
  }
  return (
      <div className="list-petition">
        {(backBlock && <ActionsListPetition/>)}
      {
        listPetition.map(item => {
          return <ItemPetition item={item} onPetitionClick={onPetitionClick} onBackBlock={onBackBlock} />
        })
      }
    </div>
  );
}

export default ListPetition;
