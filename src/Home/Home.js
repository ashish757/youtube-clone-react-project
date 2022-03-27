import React, {useEffect, useContext} from "react";
import Video from "../Video/Video";
import "./home.css";
import {globalData} from "../dataLayer/globalData"
 
const Home = () => {
  const { state: {videos}, dispatch } = useContext(globalData);

   useEffect(() => {
     dispatch({ type: "SIDENAV_OPTION_ACTIVE", payload: { id: "home" } });
   }, [dispatch]);
  
  const logHandler = (id) => {
    const data = videos.find((video) => {
      console.count("Iterated");
      return video.id === id;
    });
    console.log(data);
  };

  
  console.log("Home RENDERED");
  return (

    <div className="home">
      <h2>RECOMMENDED</h2>
      <div className="home__videos">
        {videos.map((video) => {
          return (
            <Video
              video={video}
              logHandler={logHandler}
              id={video.id}
              key={video.id}
              verified={video.isVerified}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Home