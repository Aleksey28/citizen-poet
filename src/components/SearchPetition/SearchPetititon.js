import react from 'react'
import './styles/search-petition.css';
import CardViewMode from '../icons/CadViewMode';
import LineViewMode from '../icons/LineViewMode';



class SearchPetition extends react.Component {
  constructor(props) {
    super(props);
    this.state = { isToogle: true }

    this.activeBtnOne = this.activeBtnOne.bind(this);

  }
  
  activeBtnOne() {
    this.setState(state => (
      {
        isToogle: !state.isToogle
      }
    ));
  }
  render() {
      return (
        <div className='search-petition'>
          <input placeholder='Поиск...' type='text' name='search__input-petition' className='search__input-petition '/>
          <button className='search__link' onClick={this.activeBtnOne}>
            {this.state.isToogle ? <CardViewMode className='search__icon'/> : <LineViewMode className='search__icon'/>}
          </button>
        </div>
      );
  }
}

export default SearchPetition;