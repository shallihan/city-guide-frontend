import { NavLink } from "react-router-dom";
import "./NavigationLinks.css";

const NavigationLinks = (props) => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>All USER</NavLink>
        </li>
        <li>
            <NavLink to="/51795/places">MY PLACES</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
    
    </ul>
}

export default NavigationLinks;