import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projectsContainer">
      <div className="projectInfo">
        <h2 className="projectHeader">My Projects</h2>
        <div className="projectDetails">
          <img
            alt="feed me app"
            id="feedMeProject"
            src={require("./feedme.png").default}
          ></img>
          <p className="projectTitle">The Feed me App </p>
          <div className="githublinkContainer">
            <a
              target="_blank "
              href="https://github.com/trishamarchena/Feed-me-app/tree/main"
              >
              <p className="githubLink"> Take me to the code! </p>
            </a>
          </div>
          <div className="weblinkContainer">
            <a target="_blank " href="https://feed-me-app.netlify.app/">
              <p className="webLink"> Take me to the website! </p>
            </a>
              </div>
          </div>
          <div className="projectDetails">
          <img
            alt="mending minds app"
            id="mendingMindsProject"
            src={require("./mendingmind.png").default}
          ></img>
          <p className="projectTitle">Mending Mind App </p>
          <div className="githublinkContainer">
            <a
              target="_blank "
              href="https://github.com/trishamarchena/mending-minds"
              >
              <p className="githubLink"> Take me to the code!</p>
            </a>
          </div>
          <div className="weblinkContainer">
            <a a target="_blank " href=" https://mending-minds.netlify.app/">
              <p className="webLink"> Take me to the website!</p>
            </a>
              </div>
          </div>
          <div className="projectDetails">
          <img
            alt="spf app"
            id="spfProject"
            className="projectImages"
            src={require("./spf.png").default}
          ></img>
          <p className="projectTitle">SPF App </p>
          <div className="githublinkContainer">
            <a target="_blank " href="https://github.com/trishamarchena/SPF">
              <p className="githubLink"> Take me to the code!</p>
            </a>
          </div>
          <div className="weblinkContainer">
            <a a target="_blank " href="https://spf-sth.netlify.app/">
              <p className="webLink"> Take me to the website!</p>
            </a>
          </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
