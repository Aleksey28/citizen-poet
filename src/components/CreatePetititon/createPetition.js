import React from "react";
import "./styles/create-petition.css";
import { Link } from "react-router-dom";

function CreatePetition() {
  return (
    <div className="create-petition">
      <p className="create-petition__title">
        Не нашли подходящей петиции? Создайте свою!
      </p>
      <Link to="/new-petition">
        <button className="create-petition__button">
          Создать новую петицию
        </button>
      </Link>
    </div>
  );

}

export default CreatePetition;
