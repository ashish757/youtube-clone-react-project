import React, { useContext } from "react";
import NavTag from "./NavTag";
import "./NavTags.css";
import { globalData } from "../../dataLayer/globalData";

export default function NavTags() {
  const { state, dispatch } = useContext(globalData);
  
  const handler = (id) => {
    dispatch({type: "TAG", payload: {id: id} })
  }

  console.log("NavTagContainer RENDERED");
  return (
    <div className={state.isSideBarActive ? "nav-tag --sidebar-active" : "nav-tag"}>
      <div className="nav-tag__tags">
        {state.tags.map((tag) => {
          return (
            <NavTag
              name={tag.tag}
              handler={handler}
              activeId={state.activeTagId}
              key={tag.id}
              id={tag.id}
            />
          );
        })}
        <div className="tag__feedback">SEND FEEDBACK</div>
      </div>
    </div>
  );
}
