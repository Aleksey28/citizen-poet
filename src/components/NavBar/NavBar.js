import './styles/NavBar.css';
import {NavLink} from "react-router-dom";
import React from "react";
import AllPetitionIcon from "../icons/AllPetitionIcon";
import MainIcon from "../icons/MainIcon";
import ProfileIcon from "../icons/ProfileIcon";

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink exact to="/" activeClassName="nav__link_active" className="nav__link">
        <MainIcon  className="nav__icon"/>
      </NavLink>
      <NavLink to="/petition" activeClassName="nav__link_active" className="nav__link">
        <AllPetitionIcon className="nav__icon"/>
      </NavLink>
      <NavLink to="/profile" activeClassName="nav__link_active" className="nav__link">
        <ProfileIcon  className="nav__icon"/>
      </NavLink>
    </div>
  )
}

export default NavBar;
