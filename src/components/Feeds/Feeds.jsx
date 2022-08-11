import React from "react";
import "./Feeds.css";
import Tweet from "./TweetInput/Tweet";
import Post from "./Post/Post";
import data from "../data/projectImg.json";

import reactLogo from "../../assets/logo/react.svg";

function Feeds() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweet />

      {data.map((entry) => (
        <Post
          displayName={entry.displayName}
          username={entry.username}
          src={entry.src}
        />
      ))}
    </div>
  );
}

export default Feeds;
