import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import MainHeader from "./MainHeader";
import NavigationLinks from "./NavigationLinks";
import "./MainNavigation.css";
import React from "react";


const MainNavigation = (props) => {
  return (
    <React.Fragment>
    <SideDrawer>
      <nav className="main-navigation__drawer-nav">
        <NavigationLinks />
      </nav>
    </SideDrawer>
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
    </React.Fragment>
  );
};

export default MainNavigation;
