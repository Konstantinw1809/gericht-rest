import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import gericht from "../../assets/gericht.png";

import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = React.useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  if (menu) {
    document.body.classList.add("active-menu");
  } else {
    document.body.classList.remove("active-menu");
  }

  return (
    <nav className="app__navbar section__padding">
      <div className="app__navbar-logo">
        <img src={gericht} alt="gericht" />
      </div>
      <ul className="app__navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="app__navbar-login">
        <li>
          <a href="#login">Log In / Registration</a>
        </li>
        <li>
          <a href="/">Book Table</a>
        </li>
      </ul>
      <div className="app__navbar-menu">
        <GiHamburgerMenu
          className="menu__open"
          color="#fff"
          fontSize={27}
          onClick={toggleMenu}
        />

        {menu && (
          <div className="app__navbar-menu_overlay slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={toggleMenu}
            />

            <ul className="app__navbar-menu_links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
