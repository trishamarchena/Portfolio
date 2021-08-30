import React from 'react';
import "./projects.css"

const Projects = () => {
  return (
    <div id="projectContainer">
      <div className="projectInfo">
      <h2 className="projectHeader">My Projects</h2>
      <div className="projectDetails">
      <img
            alt="feed me app"
            id="feedMeProject"
            src={require("./feedme.png").default}
          ></img>
          <p className="projectDescription">The Feed me App, </p>
          <img
            alt="mending minds app"
            id="mendingMindsProject"
            src={require("./mendingmind.png").default}
          ></img>
          <p className="projectDescription">Mending Mind App </p>
      </div>
      </div>
    </div>
  );
};

export default Projects;