import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="http://localhost:3000/#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="http://localhost:3000/#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="http://localhost:3000/#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="http://localhost:3000/#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="http://localhost:3000/#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/signup" target="_blank" className="p__opensans">
          LOGIN/SIGNUP
        </Link>

        <div />
        
        <Link to="/bookTable" target="_blank" className="p__opensans">
          BOOK TABLE
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
