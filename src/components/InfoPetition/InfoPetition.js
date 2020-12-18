import './InfoPetition.css';

const InfoPetition = ({currentPetition}) => {

  const {author} = currentPetition;
  return (
    <div className="info-petition">
      <h2>{author}</h2>
    </div>
  )
}

export default InfoPetition;
