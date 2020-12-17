import './main-page.css';
import './__text/main-page__text.css';
import './__title/main-page__title.css';
import './__subtitle/main-page__subtitle.css';

import imageMain from '../../img/mainPage__image.jpg';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__text">
        <h2 className="main-page__title">
          И ты с беспечального детства <br/>
          Ищи сочетания слов...
        </h2>
        <p className="main-page__subtitle">
          Ты должен быть гордым, как знамя; <br/>
          Ты должен быть острым, как меч; <br/>
          Как Данте, подземное пламя <br/>
          Должно тебе щеки обжечь! <br/>
        </p>
        <p className="main-page__subtitle">
          Ты должен быть гордым, как знамя; <br/>
          Ты должен быть острым, как меч; <br/>
          Как Данте, подземное пламя <br/>
          Должно тебе щеки обжечь! <br/>
        </p>
        <p className="main-page__subtitle">
          Ты должен быть гордым, как знамя; <br/>
          Ты должен быть острым, как меч; <br/>
          Как Данте, подземное пламя <br/>
          Должно тебе щеки обжечь! <br/>
        </p>
        <p className="main-page__subtitle">
          Ты должен быть гордым, как знамя; <br/>
          Ты должен быть острым, как меч; <br/>
          Как Данте, подземное пламя <br/>
          Должно тебе щеки обжечь! <br/>
        </p>
      </div>
        <img src={imageMain} alt={'imageMain'} className="main-page__image"/>
    </div>
  );
}

export default MainPage;
