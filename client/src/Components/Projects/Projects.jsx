import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div id="projectsContainer">
      <h2 className="projectHeader">My Projects</h2>
      <div className="projectDetails">
        <img
          alt="feed me app"
          id="feedMeProject"
          className="projectImages"
          src={require("./feedme.png").default}
        ></img>
        <div className="projectInfo">
          <h3 className="projectTitle">The feed me app </h3>
          <p className="descriptionOfProjects">
            The Feed me app was created using Javascript,{" "}
          </p>
          <div className="linksCont">
            <div className="githublinkContainer">
              <a
                target="_blank "
                href="https://github.com/trishamarchena/Feed-me-app/tree/main"
              >
                <h4 className="githubLink"> Take me to the code! </h4>
              </a>
            </div>
            <div className="weblinkContainer">
              <a target="_blank " href="https://feed-me-app.netlify.app/">
                <h4 className="webLink"> Take me to the website! </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectDetails">
        <img
          alt="mending minds app"
          id="mendingMindsProject"
          className="projectImages"
          src={require("./mendingmind.png").default}
        ></img>
        <div className="projectInfo">
          <h3 className="projectTitle">Mending minds app </h3>
          <p className="descriptionOfProjects">
            The mending minds app was created using Javascript,{" "}
          </p>
          <div className="linksCont">
            <div className="githublinkContainer">
              <a
                target="_blank "
                href="https://github.com/trishamarchena/mending-minds"
              >
                <h4 className="githubLink"> Take me to the code!</h4>
              </a>
            </div>
            <div className="weblinkContainer">
              <a a target="_blank " href=" https://mending-minds.netlify.app/">
                <h4 className="webLink"> Take me to the website!</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="projectDetails">
        <img
          alt="spf app"
          id="spfProject"
          className="projectImages"
          src={require("./spf.png").default}
        ></img>
        <div className="projectInfo">
          <h3 className="projectTitle">SPF app </h3>
          <p className="descriptionOfProjects">
            The SPF app was created using Javascript,{" "}
          </p>
          <div className="linksCont">
            <div className="githublinkContainer">
              <a target="_blank " href="https://github.com/trishamarchena/SPF">
                <h4 className="githubLink"> Take me to the code!</h4>
              </a>
            </div>
            <div className="weblinkContainer">
              <a a target="_blank " href="https://spf-sth.netlify.app/">
                <h4 className="webLink"> Take me to the website!</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
