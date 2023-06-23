import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink, useNavigate } from "react-router-dom";
import { Login } from "../signup-page/Login";
import { render } from "@testing-library/react";
import { loggedIns } from "../signup-page/Login";

export function Navbar(props) {
  let navigate = useNavigate();
  const { loggedIn } = props;
  const [click, setClick] = useState(false);
  const [book, setBookto] = useState(" ");
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let togglebtn = loggedIns;

  const handleBooking = () => {
    if(loggedIns === true){
      setBookto("/adduser");
    }
    else{
      setBookto("/login");
    }
  }
  
  const handleSignUp = () => {
    navigate("/login")
  }
  
  const handleLogout = () => {
    navigate("/")
  }


  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/* <GiRocketThruster className="navbar-icon" /> */}
              Safar
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/package"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Package
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink
                  to={book}
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={handleBooking}
                >
                  Book
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Gallery
                </NavLink>
              </li>
                  {console.log("Hello")}

                {/* {toggleButton} */}
              {togglebtn ==true ? (<button type="button" className="btn"
              onClick={handleLogout}
              >Logout</button>) : (<button type="button" className="btn" onClick={handleSignUp}>Sign Up</button>)}

              {/* <a target="_blank" href="Assets\Sign-up\sign-up.html" className="btn" style={{ color: 'white' }}>SignUp</a> */}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

