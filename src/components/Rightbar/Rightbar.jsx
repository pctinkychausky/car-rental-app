import React from "react";
import "./Rightbar.css";

import SearchIcon from "@mui/icons-material/Search";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__input">
        <SearchIcon className="rightbar__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="rightbar__Container">
        <h2>What's happening</h2>
      </div>
    </div>
  );
}

export default Rightbar;
