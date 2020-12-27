import "./PageProfile.css";
import React, { useEffect, useState } from "react";
import ListPetition from "../ListPetition/ListPetition";
import InfoProfile from "../InfoProfile/InfoProfile";
import user from "../../data/user__prof";
import userPetition from "../../data/user__pet";
import FormSignIn from "../FormSignIn/FormSignIn";
import { apiObject } from "../../util/api";

const PageProfile = () => {

  // получение доступа к локальному хранилищу
  const storage = window.localStorage;
  const userStatus = storage.getItem("log");
  // use state если false показываем старницу регестрации, если true страницу профиля
  const [loggedIn, setLoggedIn] = useState(!userStatus);

  function handleLogIn(statusLogIn) {
    setLoggedIn(statusLogIn);
  }

  useEffect(() => {
    apiObject.getUserData().then(data => {
      if (data) {
        handleLogIn(true);
      }
    });
  }, []);

  const handleClickOnPetition = (data) => {
    console.log(data);
  };

  return (
    loggedIn ? <div className="page-profile">
      <InfoProfile user={user} statusLogIn={handleLogIn}/>
      <ListPetition listPetition={userPetition} onPetitionClick={handleClickOnPetition}/>
    </div> : <FormSignIn onLogIn={handleLogIn}/>);
};

export default PageProfile;
