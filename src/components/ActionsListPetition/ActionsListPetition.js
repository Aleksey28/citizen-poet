import react from 'react';
import './styles/ActionsListPetition.css'
import BackButton from '../icons/ActiveList__back-btn'
class ActionsListPetition extends react.Component {
  render() {
    return (
      <div className='action-list'>
        <button type='button' className='action-list__button-back'>
          <BackButton className='action-list__icon'/>
        </button>
        <p className='action-list__text'>Петиции</p>
        <input type='text' className='action-list__input-search' name='action-list__input-search' placeholder='Поиск' />
      </div>
    )
  }
}

export default ActionsListPetition;