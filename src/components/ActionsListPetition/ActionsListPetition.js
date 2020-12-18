import react from 'react';
import './styles/ActionsListPetition.css'

class ActionsListPetition extends react.Component {
  render() {
    return (
      <div className='action-list'>
        <button type='button' className='action-list__button-back'></button>
        <p className='action-list__text'></p>
        <input type='text' className='action-list__input-search' name='action-list__input-search' placeholder='Поиск' />
      </div>
    )
  }
}

export default ActionsListPetition;