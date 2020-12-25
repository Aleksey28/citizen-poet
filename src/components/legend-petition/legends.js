import react from 'react';
import './styles/legends.css';
import Animals from '../icons/legends/Animals';
import Children from '../icons/legends/Children';
import CityHall from '../icons/legends/CityHall';
import HeatingSystem from '../icons/legends/HeatingSystem';
import JKH from '../icons/legends/JKH';
import Neighbors from '../icons/legends/Neighbors';
import Park from '../icons/legends/Park';
import Parking from '../icons/legends/Parking';
import President from '../icons/legends/President';


class Legend extends react.Component {
  
  render()
  {
    return (
      <div className='legends-petition'>
        <ul className='legends__list'>

          <li className='legends__element'> 
            <JKH className='legends__icon' />
            <p className='legends__text'>ЖКХ</p>
          </li>

          <li className='legends__element'> 
            <Parking className='legends__icon'/>
            <p className='legends__text'>Парковока</p>
          </li>

          <li className='legends__element'> 
            <Park className='legends__icon'/>
            <p className='legends__text'>Парки</p>
          </li>

          <li className='legends__element'> 
            <HeatingSystem className='legends__icon' />
            <p className='legends__text'>Теплосеть</p>
          </li>

          <li className='legends__element'> 
            <CityHall className='legends__icon'/>
            <p className='legends__text'>Мэрия</p>
          </li>

          <li className='legends__element'>
            <President className='legends__icon'/>
            <p className='legends__text'>Президент</p>
          </li>

          <li className='legends__element'>
            <Neighbors className='legends__icon'/>
            <p className='legends__text'>Соседи</p>
          </li>

          <li className='legends__element'>
            <Animals className='legends__icon'/>
            <p className='legends__text'>Животные</p>
          </li>

          <li className='legends__element'>
            <Children className='legends__icon'/>
            <p className='legends__text'>Дети</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Legend;