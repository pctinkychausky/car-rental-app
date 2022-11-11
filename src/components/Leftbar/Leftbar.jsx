import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import BarBtn from "./BarBtn/BarBtn";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsInputSvideoOutlinedIcon from "@mui/icons-material/SettingsInputSvideoOutlined";
import Button from "@mui/material/Button";
import "./Leftbar.css";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="table">
        {" "}
        <TwitterIcon className="leftbar__twitterIcon" />
        <BarBtn Icon={HomeIcon} text="Home" className="leftbar__btn" />
        <BarBtn Icon={TagIcon} text="Explore" className="leftbar__btn" />
        <BarBtn
          Icon={NotificationsNoneIcon}
          text="Notifications"
          className="leftbar__btn"
        />
        <BarBtn
          Icon={MailOutlineIcon}
          text="Messages"
          className="leftbar__btn"
        />
        <BarBtn
          Icon={BookmarkBorderIcon}
          text="Bookmarks"
          className="leftbar__btn"
        />
        <BarBtn
          Icon={LibraryBooksOutlinedIcon}
          text="Lists"
          className="leftbar__btn"
        />
        <BarBtn
          Icon={PermIdentityOutlinedIcon}
          text="Profile"
          className="leftbar__btn"
        />
        <BarBtn
          Icon={SettingsInputSvideoOutlinedIcon}
          text="More"
          className="leftbar__btn"
        />
        <Button variant="outlined" className="leftbar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    </div>
  );
}

export default Leftbar;
