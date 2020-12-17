import './PageProfile.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoProfile from "../InfoProfile/InfoProfile";

const PageProfile = ({listPetition}) => {

  const handleClickOnPetition = (data) => {
    console.log(data);
  }

  return (
    <div className="page-profile">
      <InfoProfile/>
      <ListPetition listPetition={listPetition} onPetitionClick={handleClickOnPetition}/>
    </div>
  );
}

export default PageProfile;
