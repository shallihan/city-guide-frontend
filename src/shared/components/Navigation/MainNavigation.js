import { useState } from "react";
import { Link } from "react-router-dom";

import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import MainHeader from "./MainHeader";
import NavigationLinks from "./NavigationLinks";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerOpen(false);
  }
  return (
    <>
      {drawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      {drawerOpen &&
        <SideDrawer show={drawerOpen} onClick={closeDrawerHandler}>
          <nav className="main-navigation__drawer-nav">
            <NavigationLinks />
          </nav>
        </SideDrawer>
      }
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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
    </>
  );
};

export default MainNavigation;
