import './App.css';
import dataPet from '../../data/all_pet';
import NavBar from "../NavBar/NavBar";
import Main from "../Main/Main";
import PagePetition from "../PagePetition/PagePetition";
import {Route, Switch} from 'react-router-dom'
import React from "react";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route exact path={'/'}>
          <Main/>
        </Route>
        <Route path={'/petition'}>
          <PagePetition items={dataPet}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
