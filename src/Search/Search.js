import React from "react";
import "./search.css"


export default function Search({match}) {

  console.log("Subscriptions RENDERED");
  return (
    <div className="search">
     <i> no results found for - </i>"{match.params.searchText}"
      
    </div>
  );
}