import react from 'react';
import './styles/create-petititon.css';

class CreatePetititon extends react.Component {
  render() {
    return (
      <div className='create-petititon'>
        <p className='create-petititon__title'>
          Не нашли подходящей петиции? Создайте свою! 
        </p>
        <button className="create-petititon__button">Создать новую петицию</button>
      </div>
    )
  }
}

export default CreatePetititon;