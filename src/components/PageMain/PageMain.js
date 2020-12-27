import "./styles/PageMain.css";

import imageMain from "../../img/mainPage__image.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const PageMain = () => {
  return (
    <div className="main">
      <div className="main__text">
        <h1 className="main__title">
          Гражданин поэт – удобный сервис по поиску и созданию петиций
        </h1>
        <p className="main__subtitle">
          Данное приложение необходимо для граммотного составления петций с соблюдением всех правил цензуры.
        </p>
        <p className="main__subtitle">
          Интерфейс разделен на три раздела:
        </p>
        <p className="main__subtitle">
          Главная страница, на которой вы сейчас находитесь, служит для ознакомления с работой приложения.
        </p>
        <p className="main__subtitle">
          Раздел петиций, на котором можно увидеть список всех петиций, их рейтинг, а также повлияеть на этот рейтиг и оставить комментайри.
          Также вы сможете создать свою петицию.
        </p>
        <p className="main__subtitle">
          Последний раздел, это раздел вашего профиля, в которм вы можете видеть свои петиции.
        </p>
        <Link to={"/petition"} className="main__button">
          <Button isMainButton={true} style={{width: '328px'}}>Перейти к петициям</Button>
        </Link>
      </div>
      <img src={imageMain} alt={"imageMain"} className="main-page__image"/>
    </div>
  );
};

export default PageMain;
