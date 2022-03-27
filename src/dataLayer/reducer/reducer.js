export default function reducer(state, action) {
    if (action.type === "SIDEBAR") {
      return { ...state, isSideBarActive: !state.isSideBarActive };
    } 
    else if (action.type === "TAG") {
      return { ...state, activeTagId: action.payload.id };
    }
    else if (action.type === "SIDENAV_OPTION_ACTIVE") {
      return { ...state, activeSidenavId: action.payload.id };
    }
      return { ...state, };
}



