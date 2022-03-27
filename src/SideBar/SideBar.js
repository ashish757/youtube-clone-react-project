import React, { useContext } from "react";
import SideBarOption from "./SideBarOption";
import YouTubeLogo from "../YouTubeLogo";
import {
  Menu,
  Whatshot,
  LibraryAdd,
  Home,
  YouTube,
  Subscriptions,
  History,
  WatchLater,
  ThumbUp,
  Movie,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

import "./sidebar.css";
import { globalData } from "../dataLayer/globalData";

function Divider({ name }) {
  return <div className={"divider " + name}></div>;
}

export default function Sidebar() {
  const { state, dispatch } = useContext(globalData);

  const sidebarHandler = () => {
    dispatch({ type: "SIDEBAR" });
  };
  console.log("Sidebar RENDERED");
  return (
    <div
      className={state.isSideBarActive ? "sidebar sidebar--active" : "sidebar"}
    >
      <div className="sidebar__header">
        <Menu onClick={sidebarHandler} className="menu__logo" />
        <YouTubeLogo x="80px" y="25px" />
      </div>
      <SideBarOption Icon={Home} text="Home" active />
      <SideBarOption Icon={Whatshot} text="Trending" link="/trending" />
      <SideBarOption Icon={Subscriptions} text="Subscriptions" link="/subscriptions" />
      <Divider />
      <SideBarOption Icon={LibraryAdd} text="Library" link="library" />
      <SideBarOption Icon={History} text="History" />
      <SideBarOption Icon={WatchLater} text="Watch Later" />
      <SideBarOption Icon={ThumbUp} text="Liked Videos" />
      <Divider />
      <div className="sidebar__section__title">SUBSCRIPTIONS</div>
      <SideBarOption Icon={Avatar} text="TED-ED" channel />
      <SideBarOption Icon={Avatar} text="DEV ED" channel />
      <SideBarOption Icon={Avatar} text="Tech With Tim " channel />
      <SideBarOption Icon={Avatar} text="Love Babbar" channel />
      <Divider />
      <div className="sidebar__section__title">MORE FROM YOUTUBE</div>
      <SideBarOption Icon={YouTube} text="YouTube Premium" />
      <SideBarOption Icon={Movie} text="Movies" />
    </div>
  );
}
