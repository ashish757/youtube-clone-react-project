import React, {useContext, useEffect} from "react";
import { globalData } from "../dataLayer/globalData";
import "./trending.css"


export default function Trending() {
  const { dispatch } = useContext(globalData);

    useEffect(() => {
      dispatch({ type: "SIDENAV_OPTION_ACTIVE", payload: { id: "trending" } });
    }, [dispatch]);
  
    console.log("Trending RENDERED");
    return (
        <div className="trending">
            Trending
        </div>
    )
}