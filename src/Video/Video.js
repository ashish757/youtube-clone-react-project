import React from "react"
import "./video.css";
import { VerifiedUser, Person } from "@material-ui/icons";

export default function Video({ video, logHandler, id, verified }) {
    console.log("video RENDERED");
    return (
      <div className="video" onClick={() => logHandler(id)}>
        <div className="video__img">
          <img src={video.img} alt="Title" />
          <p className="video__duration">{video.duration}</p>
        </div>
        <div className="video__info">
          <div className="video__top">
            <Person className="channel__image" />
            <p className="video__title">
              {video.title.slice(0, 60).length >= 60
                ? video.title.slice(0, 60) + "..."
                : video.title}
            </p>
          </div>
          <div className="video__middle">
            <div className="channel__name">{video.channel}</div>
            {
              verified ? (<VerifiedUser className="video__verified" />) : ""
            }
            
          </div>
          <div className="video__bottom">
            <div className="video__traffic">{video.traffic}</div>
            <span className="delimiter">&nbsp;∙&nbsp;</span>
            <div className="video__time"> {video.time}</div>
          </div>
        </div>
      </div>
    );
}