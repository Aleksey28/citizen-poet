import React from 'react';
import './styles/create-petititon.css';
import {Link} from "react-router-dom";

function CreatePetititon() {
  return (
    <div className='create-petititon'>
      <p className='create-petititon__title'>
        Не нашли подходящей петиции? Создайте свою!
      </p>
      <Link to={'/new-petition'}>
        <button className="create-petititon__button">
          Создать новую петицию
        </button>
      </Link>
    </div>
  )

}

export default CreatePetititon;
