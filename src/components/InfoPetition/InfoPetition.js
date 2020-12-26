import react from 'react';
import './styles/InfoPetition.css';



class InfoPetition extends react.Component {

  render() {

    const clickButton = () => {
      this.props.onBackCLick();
    };

    return (
      <div className="info-petition">
        <div className="info-petition__header">
          <button type='button' className="header__back-button" onClick={clickButton} > Back </button>
          <h2 className='header__title'> { this.props.currentPetition.title } </h2>
        </div>
      </div>
    )
  }
}



export default InfoPetition;
