import './PageProfile.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoProfile from "../InfoProfile/InfoProfile";
import user from '../../data/user__prof';
import userPetition from '../../data/user__pet';
import Register from '../RegisterForm/RegisterForm';
import {useState} from 'react'

const PageProfile = () => {
  // use state если false показываем старницу регестрации, если true страницу профиля
  const [userLogIn, setUserLogIn] = useState(user.logIn !== null ? true : false);

  function showMode() {
    if (userLogIn) {
      return (
      <div className="page-profile">
        <InfoProfile user={user}/>
        <ListPetition listPetition={userPetition} onPetitionClick={handleClickOnPetition}/>
    </div>)
    } else {
      return (<Register  status={logIn}/>)
    }
  }

  function logIn(status) {
    setUserLogIn(status);
  }

  const handleClickOnPetition = (data) => {
    console.log(data);
  }
  return (
    showMode()
  );
}

export default PageProfile;
