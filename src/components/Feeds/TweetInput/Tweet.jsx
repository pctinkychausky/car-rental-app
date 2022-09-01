import React from "react";
// import { Avatar, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import myicon from "../../../../public/assets/logo/jason-icon.png";
import "./Tweet.css";

function Tweet() {
  return (
    <div className="tweet">
      <form>
        <div className="tweet__avatar">
          <Avatar src={myicon} />
        </div>
        <div className="tweet__input">
          <input type="text" placeholder="What's happening?" />
          <div className="tweet__footer">
            <div className="tweet__footer__left">
              <ImageOutlinedIcon fontSize="small" />
              <GifBoxOutlinedIcon fontSize="small" />
              <PollOutlinedIcon fontSize="small" />
              <SentimentSatisfiedOutlinedIcon fontSize="small" />
              <PendingActionsOutlinedIcon fontSize="small" />
              <FmdGoodOutlinedIcon fontSize="small" />
            </div>
            <div className="tweet__footer__right">
              <Button className="tweet__tweetButton">Tweet</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Tweet;
