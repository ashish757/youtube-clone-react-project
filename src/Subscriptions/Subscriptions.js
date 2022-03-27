import React, {useContext, useEffect} from "react";
import { globalData } from "../dataLayer/globalData";
import "./subscriptions.css"


export default function Subscriptions() {
  const { dispatch } = useContext(globalData);

  useEffect(() => {
    dispatch({ type: "SIDENAV_OPTION_ACTIVE", payload: { id: "subscriptions" } });
  }, [dispatch]);

  console.log("Subscriptions RENDERED");
  return (
    <div className="subscriptions">
      Subscriptions
    </div>
  );
}