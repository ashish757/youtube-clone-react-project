import React, { useContext, useEffect} from "react";
import { globalData } from "../dataLayer/globalData";
import "./library.css"


export default function Library() {
  const { dispatch } = useContext(globalData);

  useEffect(() => {
    dispatch({ type: "SIDENAV_OPTION_ACTIVE", payload: { id: "library" } });
  }, [dispatch]);

  console.log("Library RENDERED");
  return (
    <div className="library">
      Library
    </div>
  );
}