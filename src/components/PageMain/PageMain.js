import './styles/PageMain.css';

import imageMain from '../../img/mainPage__image.jpg';

const PageMain = () => {
  return (
    <div className="main">
      <div className="main__text">
        <h2 className="main__title">
          И ты с беспечального детства <br/>
          Ищи сочетания слов...
        </h2>
        <p className="main__subtitle">
          Ты должен быть гордым, как знамя; <br/>
          Ты должен быть острым, как меч; <br/>
          Как Данте, подземное пламя <br/>
          Должно тебе щеки обжечь! <br/>
        </p>
        <p className="main__subtitle">
          Ты должен быть гордым, как знамя; <br/>
          Ты должен быть острым, как меч; <br/>
          Как Данте, подземное пламя <br/>
          Должно тебе щеки обжечь! <br/>
        </p>
        <p className="main__subtitle">
          Ты должен быть гордым, как знамя; <br/>
          Ты должен быть острым, как меч; <br/>
          Как Данте, подземное пламя <br/>
          Должно тебе щеки обжечь! <br/>
        </p>
        <p className="main__subtitle">
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

export default PageMain;
