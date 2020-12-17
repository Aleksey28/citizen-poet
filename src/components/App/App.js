import './App.css';
import dataPet from '../../data/all_pet';
import NavBar from "../NavBar/NavBar";
import MainPage from "../Main/main-page/main-page";
import PetitionPage from "../Main/petition-page/petition-page";
import {Route, Switch} from 'react-router-dom'
import React from "react";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route exact path={'/'}>
          <MainPage/>
        </Route>
        <Route path={'/petition'}>
          <PetitionPage items={dataPet}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
