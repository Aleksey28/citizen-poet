import "./PageProfile.css";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import ListPetition from "../ListPetition/ListPetition";
import InfoProfile from "../InfoProfile/InfoProfile";
import userPetition from "../../data/user__pet";
import FormSignIn from "../FormSignIn/FormSignIn";
import { apiObject } from "../../util/api";
import Register from "../Register/Register";

const PageProfile = () => {

  const { path, url } = useRouteMatch();

  const [loggedIn, setLoggedIn] = useState(true);
  const [userData, setUserData] = useState({});

  function handleLogIn(statusLogIn) {
    setLoggedIn(statusLogIn);
  }

  useEffect(() => {

    apiObject.getUserData().then(data => {
        if (data) {
          handleLogIn(true);
          setUserData(data);
        }
      })
      .catch(console.error);
  }, []);

  const handleClickOnPetition = (data) => {
    console.log(data);
  };

  return (
    <Switch>
      <Route path={`${path}/info`}>
        <div className="page-profile">
          <InfoProfile userData={userData} handleLogIn={handleLogIn} url={url}/>
          <ListPetition listPetition={userPetition} onPetitionClick={handleClickOnPetition}/>
        </div>
      </Route>
      <Route path={`${path}/register`}>
        <Register url={url}/>
      </Route>
      <Route path={`${path}/login`}>
        <FormSignIn onLogIn={handleLogIn} url={url}/>
      </Route>
      <Route exact path={`${path}`}>
        {loggedIn ? <Redirect to={`${url}/info`}/> : <Redirect to={`${url}/login`}/>}
      </Route>
    </Switch>

  );

};

export default PageProfile;
