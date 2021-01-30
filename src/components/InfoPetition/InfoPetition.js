import "./styles/InfoPetition.css";
import React from "react";

class InfoPetition extends React.Component {

  render() {

    const clickButton = () => {
      this.props.onBackCLick();
    };

    return (
      <div className="info-petition">
        <div className="info-petition__header">
          <button type="button" className="info-petition__back-button" onClick={clickButton}> Back</button>
          <h2 className="info-petition__title"> {this.props.currentPetition.title} </h2>
        </div>
      </div>
    );
  }
}

export default InfoPetition;
