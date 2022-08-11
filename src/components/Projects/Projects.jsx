import React from "react";
import "./Projects.css";
import macbook from "../../assets/img/macbook.png";
import { motion } from "framer-motion";

function Projects({ src, title, style, drag, dragElastic, whileTap }) {
  return (
    <div className="masterContainer">
      <div className="card">
        <motion.h1
          style={style}
          drag={drag}
          dragElastic={dragElastic}
          whileTap={{ whileTap }}
        >
          {title}
        </motion.h1>
        <motion.div
          style={style}
          drag={drag}
          dragElastic={dragElastic}
          whileTap={{ whileTap }}
          className="macbookContainer"
        >
          <img className="macbook" src={macbook} alt="" />
          <img className="projects" src={src} alt="" />
        </motion.div>
        <motion.div
          style={style}
          drag={drag}
          dragElastic={dragElastic}
          whileTap={{ whileTap }}
          class="click"
        >
          <button>Click Me</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
