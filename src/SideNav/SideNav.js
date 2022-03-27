import React from "react";
import SideNavOption from "./SideNavOption";
import { Subscriptions, Home, Whatshot, LibraryAdd } from "@material-ui/icons";
import "./sidenav.css";


export default function SideNav() {   
  const options = [
    { id: 'home', text: "Home", icon: Home, link: "/" },
    { id: 'trending', text: "Trending", icon: Whatshot, link: "/trending" },
    { id: 'subscriptions', text: "Subscriptions", icon: Subscriptions, link: "/subscriptions" },
    { id: 'library', text: "Library", icon: LibraryAdd, link: "/library" },
  ];

  console.log("SideNav RENDERED");
  return (
    <div className="sidenav" >
      {
        options.map(option => {
          return <SideNavOption Icon={option.icon} link={option.link} text={option.text} id={option.id} key={option.id} />
        })
      }
    </div>
  );
}