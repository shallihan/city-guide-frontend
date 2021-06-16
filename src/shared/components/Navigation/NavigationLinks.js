import { NavLink } from "react-router-dom";
import "./NavigationLinks.css";

const NavigationLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/user1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/login">LOGIN</NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
