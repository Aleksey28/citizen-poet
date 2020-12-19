import './PageProfile.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoProfile from "../InfoProfile/InfoProfile";
import user from '../../data/user__prof';
import userPetition from '../../data/user__pet';
const PageProfile = () => {

  const handleClickOnPetition = (data) => {
    console.log(data);
  }

  return (
    <div className="page-profile">
      <InfoProfile user={user}/>
      <ListPetition listPetition={userPetition} onPetitionClick={handleClickOnPetition}/>
    </div>
  );
}

export default PageProfile;
