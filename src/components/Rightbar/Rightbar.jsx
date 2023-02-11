import React from "react";
import "./Rightbar.css";

import SearchIcon from "@mui/icons-material/Search";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar__input">
        <SearchIcon className="rightbar__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="rightbar__Container">
        <h2 className="about">About Me</h2>
        <h3>
          Hello! My name is Jason Chau and I am looking for a Junior Web
          Developer Job.
        </h3>
        <div>
          <h2 className="Stacks">Stacks</h2>
          <h5>
            HTML5 | CSS3 | Responsive design | Flexbox/CSS Grid | SASS | CSS
            frameworks Bootstrap | TailwindCSS | OAuth | SSO
          </h5>
          <h5>JavaScript: ES6+ | AJAX & API | REST | GraphQL | OOP</h5>
          <h5>
            React | Next.js | Vue2 |Nuxt,js| TailwindCSS | hooks, context,
            Material UI
          </h5>
          <h5>Node.js: Vanilla & Express.js</h5>
          <h5>
            Databases SQL - Postgres | NoSQL - MongoDB with Mongoose.js, Redis,
            | Firebase |
          </h5>
          <h5>
            DevOps | Deployment | Docker & Kubernetes | Heroku (inc. pipelines)|
            serverless | Netlify
          </h5>
          <h5>Testing: TypeScript, Cypress, Vitest, Vite</h5>
        </div>
        <h2 className="contact">Contact</h2>
        <h4>Email</h4>
        <h5>pctinkychausky@gmail.com</h5>
        <h4>
          GitHub (<a href="https://github.com/pctinkychausky/">click me</a>)
        </h4>
        <h5>https://github.com/pctinkychausky/</h5>
        <h4>
          CV ({" "}
          <a href="https://drive.google.com/file/d/17qNfZrBZYT4JcQ6TWOE9Ca12OyuipSZR/view?usp=sharing">
            PDF verison
          </a>
          )
        </h4>

        <h4>
          Linkedin (
          <a href="https://www.linkedin.com/in/jason-chau-95b6588a">click me</a>
          )
        </h4>
        <h5> https://www.linkedin.com/in/jason-chau-95b6588a</h5>
        <h4>Moblie</h4>
        <h5>+44(0)7878925194</h5>
      </div>
    </div>
  );
}

export default Rightbar;
