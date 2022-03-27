import React from "react"
import "./NavTag.css";


export default function NavTag({ name, activeId, handler, id }) {
    
    console.log("NavTag RENDERED");
    return (
        <div className={activeId === id ? "tags__tag active" : "tags__tag" } onClick={() => handler(id)} >
            <p className="tag__text" >{name}</p>
        </div>
    );
}