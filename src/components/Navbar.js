import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ setIsLoggedIn, isLoggedIn}) {
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <div>
      <NavLink
        to="/"
        /* add styling to Navlink */
        style={linkStyles}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={linkStyles}
      >
        About
      </NavLink>
      {
        isLoggedIn === false ? 
          <NavLink
          to="/login"
          style={linkStyles}
          >
            Login
          </NavLink> : null
      }
      {
        isLoggedIn === true ?
          <button onClick={handleLogout}>Logout</button> : null
      }
    </div>
  );
}

export default Navbar;
