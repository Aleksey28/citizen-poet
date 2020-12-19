import './styles/ItemPetition.css';

const ItemPetition = ({item, onPetitionClick, onBackBlock}) => {

  const handleClickPetition = () => {
    onPetitionClick(item);
    onBackBlock();
  }

  return (
    <div className='item-petition' onClick={handleClickPetition}>
      <h2 className='item-petition__title'>{item.title}</h2>
      <p className="item-petition__text">{item.text}</p>
      <div className="item-petition__info">
        <p className="show-petition__author">{item.author}</p>
        <p className="show-petition__like">{item.like}</p>
        <p className="show-petition__comments">{item.comments.length}</p>
      </div>
    </div>
  )
}

export default ItemPetition;
