import './NavBar.css';
import './__button/navBar_button.css';
import './__button/_active/navBar__button_main-active.css';
import './__button/_no-active/navBar__button_all-petition-no-active.css';
import './__button/_no-active/navBar__button_him-petition-no-active.css';
import './__button/_no-active/navBar__button_profile-no-active.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div>
        <button className="navBar__button navBar__button_main-active"></button>
        <button className="navBar__button navBar__button_all-petition-no-active"></button>
        <button className="navBar__button navBar__button_him-petition-no-active"></button>
      </div>
      <div>
        <button className="navBar__button navBar__button_profile-no-active"></button>
      </div>
    </div>
  )
}

export default NavBar;