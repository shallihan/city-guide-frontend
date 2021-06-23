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
          Contributors
        </NavLink>
      </li>
      {authorisation.isLoggedIn && (
        <li>
          <NavLink to={`/${authorisation.userId}/places`}>Your Contributions</NavLink>
        </li>
      )}
      {authorisation.isLoggedIn && (
        <li>
          <NavLink to="/places/new">Add Entry</NavLink>
        </li>
      )}
      {!authorisation.isLoggedIn && (
        <li>
          <NavLink to="/login">Sign In</NavLink>
        </li>
      )}
      {authorisation.isLoggedIn && (
        <li>
          <button onClick={authorisation.logout}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default NavigationLinks;
