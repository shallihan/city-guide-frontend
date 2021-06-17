import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication-context";
import "./NavigationLinks.css";

const NavigationLinks = (props) => {
  const authorisation = useContext(AuthenticationContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {authorisation.isLoggedIn && (
        <li>
          <NavLink to="/user1/places">MY PLACES</NavLink>
        </li>
      )}
      {authorisation.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!authorisation.isLoggedIn && (
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      )}
      {authorisation.isLoggedIn && (
        <li>
          <button onClick={authorisation.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavigationLinks;
