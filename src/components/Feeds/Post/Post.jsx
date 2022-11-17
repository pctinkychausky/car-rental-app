import React, { useState, useRef } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Avatar from "@mui/material/Avatar";
import "./Post.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import Projects from "../../Projects/Projects";
// import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSpring, animated } from "react-spring";

const cardVariants = {
  // hover: {
  //   sacle: 30,
  //   textShadow: "0px 0px 8px rgb(255,255,255)",
  //   boxShadow: "0px 0px 8px rgb(255,255,255)",
  //   transition: {
  //     duration: 1,
  //   },
  // },
};

function Post({ url, displayName, username, src, text, color, avatar, title }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });
  // const [xAxis, setXAxis] = useState(0);
  // const [yAxis, setYAxis] = useState(0);

  // const mouseleave = (e) => {
  //   setXAxis((window.innerWidth / 2 - e.pageX) / 25);
  //   setYAxis((window.innerWidth / 2 - e.pageY) / 25);
  // };

  // const mouseover = (e) => {
  //   setXAxis((window.innerWidth / 2 - e.pageX) / 25);
  //   setYAxis((window.innerWidth / 2 - e.pageY) / 25);
  // };

  // const x = useMotionValue(0);
  // const y = useMotionValue(0);
  // const rotateX = useTransform(y, [-40, 40], [30, -30]);
  // const rotateY = useTransform(x, [-40, 40], [-30, 30]);

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

        <animated.div
          className="cardsContainer"
          ref={ref}
          // onMouseEnter={() => setHovered(true)}
          // onMouseMove={({ clientX, clientY }) => {
          //   // Get mouse x position within card
          //   const x =
          //     clientX -
          //     (ref.current.offsetLeft -
          //       (window.scrollX ||
          //         window.pageXOffset ||
          //         document.body.scrollLeft));

          //   // Get mouse y position within card
          //   const y =
          //     clientY -
          //     (ref.current.offsetTop -
          //       (window.scrollY ||
          //         window.pageYOffset ||
          //         document.body.scrollTop));

          //   console.log("x,y", x, y);
          //   console.log("y");

          //   // Set animated values based on mouse position and card dimensions
          //   const dampen = 100; // Lower the number the less rotation
          //   const xys = [
          //     -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          //     (x - ref.current.clientWidth / 2) / dampen, // rotateY
          //     1.07, // Scale
          //   ];

          //   // Update values to animate to
          //   setAnimatedProps({ xys: xys });
          // }}
          // onMouseLeave={() => {
          //   setHovered(false);
          //   // Set xys back to original
          //   setAnimatedProps({ xys: [0, 0, 1] });
          // }}
          style={{
            // If hovered we want it to overlap other cards when it scales up
            // zIndex: isHovered ? 2 : 1,
            // // Interpolate function to handle css changes
            // transform: animatedProps.xys.interpolate(
            //   (x, y, s) =>
            //     `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
            // ),
            background: color,
          }}
        >
          <div className="inner__cardsContainer">
            <Projects
              src={src}
              title={title}
              url={url}
              // style={{
              //   x,
              //   y,
              //   rotateX,
              //   rotateY,
              //   z: 100000,
              // }}
            />
          </div>
        </animated.div>
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
