import React from "react";
import "./Feeds.css";
import Tweet from "./TweetInput/Tweet";
import Post from "./Post/Post";
import data from "../data/projectImg.json";

function Feeds() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweet />

      {data.map((entry) => (
        <Post
          title={entry.title}
          displayName={entry.displayName}
          username={entry.username}
          src={entry.src}
          color={entry.color}
          avatar={entry.avatar}
          text={
            (entry.text,
            entry.text1,
            entry.text2,
            entry.text3,
            entry.text4,
            entry.text5,
            entry.text6)
          }
          url={entry.url}
        />
      ))}
    </div>
  );
}

export default Feeds;
