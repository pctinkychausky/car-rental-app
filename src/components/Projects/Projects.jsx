import React from "react";
import "./Projects.css";
import data from "../data/projectImg.json";
import { filterProps } from "framer-motion";
import image from "../../assets/img/3d.jpg";
import macbook from "../../assets/img/macbook.png";

function Projects({ src }) {
  return (
    <div className="masterContainer">
      <div className="card">
        <div className="macbookContainer">
          <img className="macbook" src={macbook} alt="" />
          <img className="projects" src={src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
