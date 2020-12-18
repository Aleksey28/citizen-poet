import './ListPetition.css';
import React from "react";
import {useState} from "react";
import ItemPetition from '../ItemPetition/ItemPetition';


const ListPetition = ({listPetition, onPetitionClick}) => {

  const [backBlock, setBackBlock] = useState(false);

  const onBackBlock = () => {
    setBackBlock(true);
  }
  return (
      <div className="list-petition">
        {(backBlock && <h2>back</h2>)}
      {
        listPetition.map(item => {
          return <ItemPetition item={item} onPetitionClick={onPetitionClick} onBackBlock={onBackBlock} />
        })
      }
    </div>
  );
}

export default ListPetition;
