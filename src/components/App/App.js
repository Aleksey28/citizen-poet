import "./App.css";
import dataPet from "../../data/all_pet";
import NavBar from "../NavBar/NavBar";
import PageMain from "../PageMain/PageMain";
import PagePetition from "../PagePetition/PagePetition";
import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PageProfile from "../PageProfile/PageProfile";
import PageNewPetition from "../PageNewPetition/PageNewPetition";
import poems from "../../data/all_django.json";

function App() {

  const [listPetition, setListPetition] = useState([]);
  const [poemsText, setPoemsText] = useState("");

  useEffect(() => {
    new Promise((resolve) => {
      resolve(poems.reduce((res, item) => res + item.fields.text.split(/[.!?]/).join("\n"), ""));
    }).then(text => {
      setPoemsText(text);
    });
  }, []);

  useEffect(() => {
    setListPetition(dataPet);
  }, []);

  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route exact path={"/"}>
          <PageMain/>
        </Route>
        <Route path={"/petition"}>
          <PagePetition listPetition={listPetition}/>
        </Route>
        <Route path={"/new-petition"}>
          <PageNewPetition poemsText={poemsText}/>
        </Route>
        <Route path={"/profile"}>
          <PageProfile listPetition={listPetition}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
