import react from 'react';
import './styles/legends.css';
import OrangeCircle from '../icons/legends/OrangeCircle';
import YellowCircle from '../icons/legends/YellowCircle';
import DarkBlueCircle from '../icons/legends/DarkBlueCircle';
import LightGreyCircle from '../icons/legends/LightGreyCircle';
import MIddleGreenCircle from '../icons/legends/MIddleGreenCircle';

class Legend extends react.Component {
  
  render()
  {
    return (
      <div className='legends-petition'>
        <ul className='legends__list'>
          <li className='legends__element'> 
            <OrangeCircle className='legends__icon' />
            <p className='legends__text'>ЖКХ</p>
          </li>
          <li className='legends__element'> 
            <YellowCircle className='legends__icon'/>
            <p className='legends__text'>Теплосеть</p>
          </li>
          <li className='legends__element'> 
            <DarkBlueCircle className='legends__icon'/>
            <p className='legends__text'>Мерия</p>
          </li>
          <li className='legends__element'> 
            <LightGreyCircle className='legends__icon' />
            <p className='legends__text'>Президент</p>
          </li>
          <li className='legends__element'> 
            <MIddleGreenCircle className='legends__icon'/>
            <p className='legends__text'>Соседи</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Legend;