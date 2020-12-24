import './__info/page-petition__info.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoPetition from '../InfoPetition/InfoPetition';
import {useState} from "react";
import SearchPetition from '../SearchPetition/SearchPetititon';
import Legends from '../legend-petition/legends';
import CreatePetititon from '../CreatePetititon/createPetititon';
const PagePetition = ({listPetition}) => {

  const [currentPetition, setCurrentPetition] = useState({});
  const [search, setShowSearch] = useState(true);
  const [legends, setShowLegends] = useState(true);
  const [creatPetition, setShowCreatPetition] = useState(true);
  const [st, setSt] = useState({
    display: 'flex',
    boxSizing: 'border-box',
    width: '100%',
    margin: '20px 20px 150px 20px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'relative'
  })
  const handleClickOnPetition = (data) => {
    setCurrentPetition(data);
    setShowSearch(false);
    setShowLegends(false);
    setShowCreatPetition(false);
    setSt({
      display: 'flex',
      boxSizing: 'border-box',
      width: '100%',
      margin: '20px 20px 20px 20px',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      position: 'relative'
    });
  }



  return (
    <div className="page-petition" style={st}>
      {
          (search && <SearchPetition />)
        }
        <div className='page-petition__info'>
        <ListPetition listPetition={listPetition} onPetitionClick={handleClickOnPetition}/>
        {legends && <Legends />}

        {Object.keys(currentPetition).length > 0 && <InfoPetition currentPetition={currentPetition}/>}
        </div>
        {creatPetition && <CreatePetititon />}
      </div>
  );
}

export default PagePetition;
