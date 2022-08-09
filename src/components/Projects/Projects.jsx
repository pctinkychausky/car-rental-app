import React from "react";
import "./Projects.css";
import data from "../data/projectImg.json";
console.log("🚀 ~ file: Projects.jsx ~ line 4 ~ data", data);
import { filterProps } from "framer-motion";
import image from "../../assets/img/3d.jpg";
console.log("🚀 ~ file: Projects.jsx ~ line 6 ~ image", image);
import macbook from "../../assets/img/macbook.png";

function Projects() {
  const title = [];

  data.forEach((element) =>
    title.push(<div className="project-title">{element.title}</div>)
  );

  console.log("🚀 ~ file: Projects.jsx ~ line 12 ~ Projects ~ title", title);
  return (
    <div className="masterContainer">
      <div className="card">
        <div>{title}</div>
        {/* {data.filter((entry) => (
          entry===
        ))} */}
        {/* {data.map((entry) => (
          <img className="projects" src={entry.src} alt="" />
        ))} */}
        <div className="macbook">
          <img src={macbook} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
