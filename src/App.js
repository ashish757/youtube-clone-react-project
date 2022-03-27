import React, { useReducer } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import SideNav from "./SideNav/SideNav";
import SideBar from "./SideBar/SideBar";
import Trending from "./Trending/Trending";
import Subscriptions from "./Subscriptions/Subscriptions";
import Library from "./Library/Library";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search/Search";

import Reducer from "./dataLayer/reducer/reducer";
import defaultState from "./dataLayer/defaultState";

import { globalData } from "./dataLayer/globalData";

function App() {
  // REDUCER
  const [state, dispatch] = useReducer(Reducer, defaultState);

  let name = "sideOff";
  if (state.isSideBarActive) name += " bar--active";
  console.log("App RENDERED");

  return (
    <globalData.Provider value={{ state, dispatch }}>
      <Router>
        <div className="App">
          <Nav />
          <SideNav />
          <SideBar />
          <div className="navOff"></div>

          <main id="App__main">
            <div className={name}></div>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/trending" component={Trending} />
              <Route path="/library" component={Library} />
              <Route path="/subscriptions" component={Subscriptions} />
              <Route path="/search/:searchText" component={Search} />
            </Switch>
          </main>
        </div>
      </Router>
    </globalData.Provider>
  );
}

export default App;
