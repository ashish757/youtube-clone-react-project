import React, { useState, useContext } from "react";
import "./nav.css";
import { ArrowBack, Search, Menu } from "@material-ui/icons";
import NavTags from "./NavTag/NavTags";
import { globalData } from "../dataLayer/globalData";
import YouTube from "./../YouTubeLogo";
import { Link } from "react-router-dom";
export default function Nav() {
  const { dispatch } = useContext(globalData);

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState();

  const searchHandler = (action) => {
    setIsSearchActive(action);
  };

  const sidebarHandler = () => {
    dispatch({ type: "SIDEBAR" });
  };

  console.log("Nav RENDERED");
  return (
    <nav>
      <div className="nav">
        <div className="nav__start">
          <Menu className="nav__toggler" onClick={sidebarHandler} />
          <YouTube x="80px" y="25px" />
          {/* <span className="nav__logo__name">YouTube</span> */}
        </div>

        <div
          className={
            isSearchActive ? "nav__center mob__search--active" : "nav__center"
          }
        >
          {isSearchActive ? (
            <div
              onClick={() => searchHandler(false)}
              className="nav__back--icon"
            >
              <ArrowBack />
            </div>
          ) : (
            ""
          )}

          <div className="nav__search">
            <input
              type="text"
              placeholder="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link
              to={`/search/${searchInput}`}
              onClick={(e) => {
                if (!searchInput) e.preventDefault();
              }}
            >
              <button>
                <Search />
              </button>
            </Link>
          </div>
          <div
            onClick={() => searchHandler(true)}
            className="nav__search--icon"
          >
            <Search />
          </div>
        </div>

        <div className="nav__end">
          <div className="nav__sign-in">
            <button>Sign in</button>
          </div>
        </div>
      </div>
      {/* <Router>
        <Switch>
          <Route path="/trending" component={Trending} />
        </Switch>
      </Router> */}
      <NavTags />
    </nav>
  );
}
