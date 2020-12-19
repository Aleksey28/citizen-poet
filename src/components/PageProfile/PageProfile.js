import './PageProfile.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoProfile from "../InfoProfile/InfoProfile";
import user from '../../data/user__prof';
import userPetition from '../../data/user__pet';
import UserLogIn from '../UserLogIn/UserLogIn';
import {useState} from 'react'

const PageProfile = () => {
  // use state если false показываем старницу регестрации, если true страницу профиля
  const [statusLogIn, setUserLogIn] = useState(user.statusLogIn);

  function showMode() {
    if (statusLogIn) {
      return (
      <div className="page-profile">
        <InfoProfile user={user}/>
        <ListPetition listPetition={userPetition} onPetitionClick={handleClickOnPetition}/>
    </div>)
    } else {
      return (<UserLogIn  statusLogIn={logIn}/>)
    }
  }

  function logIn(statusLogIn) {
    setUserLogIn(statusLogIn);
  }

  const handleClickOnPetition = (data) => {
    console.log(data);
  }
  return (
    showMode()
  );
}

export default PageProfile;
