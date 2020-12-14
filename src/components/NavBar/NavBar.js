import './NavBar.css';
import MainButton from "./MainButton/MainButton";
import PetitionButton from "./PetitionButton/PetitionButton";
import ProfileButton from "./ProfileButton/ProfileButton";
const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="firstButton">
        <MainButton />
        <PetitionButton />
      </div>
      <ProfileButton />
    </div>
  )
}

export default NavBar;