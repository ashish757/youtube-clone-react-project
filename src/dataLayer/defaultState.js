import videos from "./data/videosData";
import tags from "./data/tags"



const defaultState = {
  isSideBarActive: window.innerWidth >= 1367 ? true : false,
  activeSidenavId: "home",
  activeTagId: 1,
  videos,
  tags,
};

export default defaultState;