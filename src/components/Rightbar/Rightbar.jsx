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
        <h2 className="about">About Me</h2>
        <h3>Hello! My name is Jason Chau and I am a Junior Web Developer.</h3>
        <h5>
          I am motivated in solving real-world challenges by analytical thinking
          and my social studies mindset .
        </h5>
        <h5>
          After 8 years working as a consultant roles of financial and testing
          industry, I decided to take a career change to pursue a goal of
          becoming a software engineer.
        </h5>
        <h2 className="contact">Contact</h2>
        <h4>Email</h4>
        <h5>pctinkychausky@gmail.com</h5>
        <h4>
          GitHub (<a href="https://github.com/pctinkychausky/">click me</a>)
        </h4>
        <h5>https://github.com/pctinkychausky/</h5>
        <h4>
          CV ({" "}
          <a href="https://drive.google.com/file/d/1Tyrz76QUCLx6nCpTj5o380_mIt70apKj/view?usp=sharing">
            PDF verison
          </a>
          )
        </h4>

        <h4>
          Linkedin (
          <a href="https://www.linkedin.com/in/jason-chau-95b6588a">click me</a>
          )
        </h4>
        <h5> https://www.linkedin.com/in/jason-chau-95b6588a</h5>
        <h4>Moblie</h4>
        <h5>+44(0)7878925194</h5>
      </div>
    </div>
  );
}

export default Rightbar;
