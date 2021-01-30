import { useState } from "react";
import "./styles/search-petition.css";
import CardViewMode from "../icons/CadViewMode";
import LineViewMode from "../icons/LineViewMode";

const SearchPetition = ({ setMode }) => {

  const [visualBTN, setVisualBTN] = useState(true);

  const activeBtnOne = () => {
    setVisualBTN(!visualBTN);
    setVisualMode();
  };

  const setVisualMode = () => {
    const listPetition = document.querySelector(".list-petition");
    const itemPetition = document.querySelectorAll(".item-petition");
    listPetition.style.gridTemplateColumns = visualBTN ? "repeat(auto-fit, 100%)" : "repeat(auto-fit, 264px)";
    document.querySelector(".legends-petition").style.flex = visualBTN ? "2 1 auto" : "1 1 auto";
    itemPetition.forEach(el => {
      el.style.height = visualBTN ? "88px" : "316px";
      el.querySelector(".item-petition__logo").style.display = visualBTN ? "none" : "block";
      el.querySelector(".item-petition__author").style.display = visualBTN ? "none" : "block";
      el.querySelector(".info-petition__action").style.display = visualBTN ? "none" : "block";
      el.querySelector(".item-petition__text").style.width = visualBTN ? "100%" : "240px";
      el.querySelector(".item-petition__text").style.height = visualBTN ? "32px" : "68px";
    });
  };

  return (
    <div className="search-petition">
      <input placeholder="Поиск..." type="text" name="search__input-petition" className="search__input-petition "/>
      <button className="search__link" onClick={activeBtnOne}>
        {
          visualBTN ? <CardViewMode className="search__icon"/> : <LineViewMode className="search__icon"/>
        }

      </button>
    </div>
  );
};

export default SearchPetition;
