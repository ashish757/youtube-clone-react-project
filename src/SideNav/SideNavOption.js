import React, { useContext } from "react";
import "./sidenavoption.css";
import { globalData } from "../dataLayer/globalData";
import { Link } from "react-router-dom";

export default function SideNavOption({ text, Icon, link, id }) {
  const { state: { activeSidenavId } } = useContext(globalData);

  console.log("SideNavOption RENDERED");
  return (
    <div className={activeSidenavId === id ? "sidenav__option sidenav__option--active" : "sidenav__option"}>
      <Link to={link} className="sidenav__option__link">
        <div className="option__icon">{<Icon />}</div>
        <div className="option__text">{text}</div>
      </Link>
    </div>
  );
}
