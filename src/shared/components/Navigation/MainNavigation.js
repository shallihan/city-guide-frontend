import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavigationLinks from "./NavigationLinks";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">Your Places</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavigationLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
