import './InfoPetition.css';

const InfoPetition = ({currentPetition}) => {

  const {title} = currentPetition;
  return (
    <div className="info-petition">
      <h2>{title}</h2>
    </div>
  )
}

export default InfoPetition;
