import React, { useState } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import "./Post.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import Projects from "../../Projects/Projects";
import { motion, useMotionValue, useTransform } from "framer-motion";

const cardVariants = {
  hover: {
    sacle: 30,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 1,
    },
  },
};

function Post({ displayName, username, src, text, color, avatar, title }) {
  const [xAxis, setXAxis] = useState(null);
  console.log("🚀 ~ file: Post.jsx ~ line 25 ~ Post ~ xAxis", xAxis);
  const [yAxis, setYAxis] = useState(null);
  console.log("🚀 ~ file: Post.jsx ~ line 27 ~ Post ~ yAxis", yAxis);

  const mouseover = (e) => {
    setXAxis((window.innerWidth / 2 - e.pageX) / 25);
    setYAxis((window.innerWidth / 2 - e.pageY) / 25);
  };

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
          <div
            onMouseMove={mouseover}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              transform: "rotateY(${xAxis}deg) rotateX(${yAxis}deg)",
            }}
          />
        </div>
        <motion.div
          className="cardWrapper"
          variants={cardVariants}
          initial={{ y: -50 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
          whileHover="hover"
          whileSpring="spring"
          style={{
            x,
            y,
            rotateX,
            rotateY,
            z: 200,
          }}
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
