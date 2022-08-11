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

function Post({ displayName, username, src, text, color, avatar, title }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [30, -30]);
  const rotateY = useTransform(x, [-40, 40], [-30, 30]);

  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} sx={{ width: 50, height: 50 }} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              <span>{displayName}</span>

              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" /> @{username}
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
            z: 200,
          }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <div className="cardsContainer" style={{ background: color }}>
            <div className="inner__cardsContainer">
              <Projects
                src={src}
                title={title}
                style={{
                  x,
                  y,
                  rotateX,
                  rotateY,
                  z: 100000,
                }}
              />
            </div>
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
