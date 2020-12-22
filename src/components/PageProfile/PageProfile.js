import './PageProfile.css';
import React from "react";
import ListPetition from '../ListPetition/ListPetition';
import InfoProfile from "../InfoProfile/InfoProfile";
import user from '../../data/user__prof';
import userPetition from '../../data/user__pet';
import UserLogIn from '../UserLogIn/UserLogIn';
import {useState} from 'react'

const PageProfile = () => {

  // получение доступа к локальному хранилищу
  const storage = window.localStorage;
  const userStatus = storage.getItem('log')
  // use state если false показываем старницу регестрации, если true страницу профиля
  const [statusLogIn, setUserLogIn] = useState(!userStatus);
  

 

  function showMode() {
    if (statusLogIn) {
      console.log(statusLogIn)
      return (
      <div className="page-profile">
        <InfoProfile user={user} statusLogIn={logIn}/>
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
