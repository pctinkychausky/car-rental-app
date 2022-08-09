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
        displayName="FC Barcelona
        "
        username="FC Barcelona
        "
        verified={true}
        text="More than a Striker"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />{" "}
      <Post
        bg="linear-gradient(to right top, rgba(96, 76, 124,0.8) 0%, rgba(37, 121, 131,0.8) 50%, rgba(32, 130, 90,0.8) 100%)"
        displayName="FC Barcelona
        "
        username="FC Barcelona
        "
        verified={true}
        text="More than a Striker"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />{" "}
      <Post
        bg="linear-gradient(225deg, rgba(22, 35, 166,0.8) 0%, rgba(51, 67, 212,0.8) 25%, rgba(23, 94, 172,0.8) 73%, rgba(23, 102, 130,0.8) 100%)"
        displayName="FC Barcelona
    "
        username="FC Barcelona
    "
        verified={true}
        text="More than a Striker"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />
      <Post
        bg="linear-gradient(215deg, rgba(197, 45, 71,0.85) 0%, rgba(165, 50, 92,0.7) 50%, rgba(139, 54, 109,0.65) 100%)"
        displayName="FC Barcelona
        "
        username="FC Barcelona
        "
        verified={true}
        text="More than a Striker"
        image="https://pbs.twimg.com/media/FZZU2kUWAAwR1Ih?format=jpg&name=small"
        avatar={reactLogo}
      />
    </div>
  );
}

export default Feeds;
