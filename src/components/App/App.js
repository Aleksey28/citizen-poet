import './App.css';
import dataPet from '../../data/all_pet';
import NavBar from "../NavBar/NavBar";
import PageMain from "../PageMain/PageMain";
import PagePetition from "../PagePetition/PagePetition";
import {Route, Switch} from 'react-router-dom'
import React from "react";
import {useState, useEffect} from "react";
import PageProfile from "../PageProfile/PageProfile";

function App() {

  const [listPetition, setListPetition] = useState([]);

  useEffect(() => {
    setListPetition(dataPet);
  }, [])

  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route exact path={'/'}>
          <PageMain/>
        </Route>
        <Route path={'/petition'}>
          <PagePetition listPetition={listPetition}/>
        </Route>
        <Route path={'/profile'}>
          <PageProfile listPetition={listPetition}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
