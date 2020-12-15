import './petition-page__legend.css';
import './__list/petition-page__list.css';
import './__text/petition-page__text.css';
import './__title/petition-page__title.css';
import './__circle/petition-page__circle.css';
import yellowCircle from '../../../../img/circle/yellow.png';
import orangeCircle from '../../../../img/circle/orange.png';
import greyCircle from '../../../../img/circle/grey.png';
import  cyanCircle from '../../../../img/circle/cyan.png';
import darkBlueCircle from '../../../../img/circle/dark-blue.png';

const Legend = () => {
  return (
    <div className="petition-page__legend">
      <ul className="petition-page__list">
        <li className="petition-page__text">
          <img src={yellowCircle} alt="Желтый круг" className="petition-page__circle"/>
          <p className="petition-page__title">ЖКХ</p>
        </li>
        <li className="petition-page__text">
          <img src={orangeCircle} alt="Оранжевый круг" className="petition-page__circle"/>
          <p className="petition-page__title">Тепло-Сеть</p>
        </li>
        <li className="petition-page__text">
          <img src={greyCircle} alt="Коричневый круг" className="petition-page__circle"/>
          <p className="petition-page__title">Мерия</p>
        </li>
        <li className="petition-page__text">
          <img src={cyanCircle} alt="Светло зеленый круг" className="petition-page__circle"/>
          <p className="petition-page__title">Президент</p>
        </li>
        <li className="petition-page__text">
          <img src={darkBlueCircle} alt="Иемно-синий круг" className="petition-page__circle"/>
          <p className="petition-page__title">Соседи</p>
        </li>
      </ul>
    </div>
  );
}

export default Legend;