import React from "react";
import "./Feeds.css";
import Tweet from "./TweetInput/Tweet";
import Post from "./Post/Post";
import reactLogo from "../../assets/logo/react.svg";

function Feeds() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweet />
      <Post
        bg="linear-gradient(#e66465, #9198e5)"
        displayName="Car Rental App
        "
        username="React@Hook@context api
        "
        verified={true}
        text="A car booking app with location and date picker with the use of React context api and hook"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />{" "}
      <Post
        bg="linear-gradient(to right top, rgba(96, 76, 124,0.8) 0%, rgba(37, 121, 131,0.8) 50%, rgba(32, 130, 90,0.8) 100%)"
        displayName="3D Earth Animation
        "
        username="Babyloon.JS
        "
        verified={true}
        text="The future of 3D anitmation of javascript. Creation of meshes, texture and Scence"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />{" "}
      <Post
        bg="linear-gradient(225deg, rgba(22, 35, 166,0.8) 0%, rgba(51, 67, 212,0.8) 25%, rgba(23, 94, 172,0.8) 73%, rgba(23, 102, 130,0.8) 100%)"
        displayName="Weather Forecast and Supermarket App 
    "
        username="API call, vanilla JS
    "
        verified={true}
        text="We are capable of forecasting weather, why not move forward to notice the user to prepare extra grocery if bad weather comes in few days. Geolocation and weather APIs save our housewife!"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />
      <Post
        bg="linear-gradient(215deg, rgba(197, 45, 71,0.85) 0%, rgba(165, 50, 92,0.7) 50%, rgba(139, 54, 109,0.65) 100%)"
        displayName="Guess your Animal Game
        "
        username="DOM manipulation
        "
        verified={true}
        text="This app is to help children to learn vocabulary"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />
    </div>
  );
}

export default Feeds;
