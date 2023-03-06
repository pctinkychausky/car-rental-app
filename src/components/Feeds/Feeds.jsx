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
          text={entry.text}
          text2={entry.text2}
          text3={entry.text3}
          loginDetails={entry.loginDetails}
          customerLogin={entry.customerLogin}
          jaLogin={entry.jaLogin}
          saLogin={entry.saLogin}
          github={entry.github}
          githubLink={entry.githubLink}
          remark={entry.remark}
          remarkDetails={entry.remarkDetails}
          url={entry.url}
        />
      ))}
    </div>
  );
}

export default Feeds;
