import './show-petition.css';

const ShowPetitionAll = ({items}, {info}) => {
  function showPet(event) {
    console.log(event.target.textContent);
  }
  return (
    <div className='show-petition' onClick={showPet}>
      <h2 className='show-petition__title'>{items.title}</h2>
      <p className="show-petition__text">{items.text}</p>
      <div className="show-petition__info">
        <p className="show-petition__author">{items.author}</p>
        <p className="show-petition__like">{items.like}</p>
        <p className="show-petition__comments">{items.comments.length}</p>
      </div>
    </div>
  )
}

export default ShowPetitionAll;