import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import "./Post.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import Projects from "../../Projects/Projects";
import { motion, useMotionValue, useTransform } from "framer-motion";
import data from "../../data/projectImg.json";

function Post({ displayName, username, verified, text, image, avatar, bg }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [60, -60]);
  const rotateY = useTransform(x, [-50, 50], [-60, 60]);

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              <span>{displayName}</span>

              <span className="post__headerSpecial">
                {verified && <VerifiedIcon className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <motion.div
          className="cardWrapper"
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 100,
          }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="cardsContainer" style={{ background: bg }}>
            {data.map((entry) => (
              <Projects src={entry.src} />
            ))}
          </div>
        </motion.div>

        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <IosShareIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
