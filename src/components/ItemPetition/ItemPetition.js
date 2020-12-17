import './styles/ItemPetition.css';

const ItemPetition = ({items}, {info}) => {
  function showPet(event) {
    console.log(event.target.textContent);
  }

  return (
    <div className='item-petition' onClick={showPet}>
      <h2 className='item-petition__title'>{items.title}</h2>
      <p className="item-petition__text">{items.text}</p>
      <div className="item-petition__info">
        <p className="show-petition__author">{items.author}</p>
        <p className="show-petition__like">{items.like}</p>
        <p className="show-petition__comments">{items.comments.length}</p>
      </div>
    </div>
  )
}

export default ItemPetition;
