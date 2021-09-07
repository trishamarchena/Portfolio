import React from 'react';
// import Skills from '../../assets/skills';
import "./About.css";

const About = () => {
  return (
    <div className="aboutSection">
    <div id= "aboutContainer">
      <h2 className="aboutTitle">About me </h2>
      <h4 className="aboutParagraph">
      I'm a full stack developer with a penchant for creating applications. I've created and went on to complete multiple projects using Reacj t, Javascript, Ruby, Ruby on Rails, mongoDB and NodeJS. My 8 years of customer service experience makes me well versed in handling client needs as well as performing efficiently in a collaborative work environment. 
      </h4>
    </div>
      <div className="iconsContainer">
          <div className="topSkills">
          <div className="iconDetail">
        <img
            alt="ruby"
            id="ruby-image"
            src={require("./ruby.png").default}
            />
            <p className= "skillsTitle"> Ruby</p>
            </div>
            <div className="iconDetail">
      <img
            alt="rails"
            id="rails-image"
            src={require("./rails.png").default}
            />
            <p className= "skillsTitle">Rails</p>
            </div>
            <div className="iconDetail">
          <img
            alt="css"
            id="css-image"
            src={require("./css.png").default}
            />
            <p className= "skillsTitle">CSS</p>
            </div>
            <div className="iconDetail">
          <img
            alt="html"
            id="html-image"
            src={require("./html.png").default}
            />
            <p className= "skillsTitle">HTML</p>
            </div>
            <div className="iconDetail">
          <img
            alt="js"
            id="js-image"
            src={require("./js.png").default}
            />
            <p className= "skillsTitle">Javascript</p>
            </div>
            <div className="iconDetail">
          <img
            alt="react"
            id="react-image"
            src={require("./react.png").default}
            />
          <p className= "skillsTitle">React</p>
          </div>
            </div>
      <div className="bottomSkills">
          <div className="iconDetail">
          <img
            alt="node"
            id="node-image"
            src={require("./nodejs.png").default}
            ></img>
          <p className= "skillsTitle">Node.js</p>
          </div>
            </div>
      </div>
      </div>
  );
};

export default About;