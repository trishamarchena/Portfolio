import React from 'react';
// import Skills from '../../assets/skills';
import "./About.css";

const About = () => {
  return (
    <div className="aboutSection">
    <div id= "aboutContainer">
      <h2>About me </h2>
      <h3 className="aboutParagraph">
      I'm a full stack developer with a penchant for creating applications. I've created and went on to complete multiple projects using React, Javascript, Ruby, Ruby on Rails, mongoDB and NodeJS. My 8 years of customer service experience makes me well versed in handling client needs as well as performing efficiently in a collaborative work environment. 
      </h3>
    </div>
      <div className="imagesContainer">
          <div className="topSkills">
        <div className="icons">
        <img
            alt="ruby"
            id="ruby-image"
            src={require("./ruby.png").default}
          ></img>
          <p>Rails</p>
      <img
            alt="rails"
            id="rails-image"
            src={require("./rails.png").default}
          ></img>
          <p>Rails</p>
          <img
            alt="css"
            id="css-image"
            src={require("./css.png").default}
          ></img>
          <p>CSS</p>
          <img
            alt="html"
            id="html-image"
            src={require("./html.png").default}
          ></img>
          <p>HTML</p>
          <img
            alt="js"
            id="js-image"
            src={require("./js.png").default}
          ></img>
          <p>Javascript</p>
          <img
            alt="react"
            id="react-image"
            src={require("./react.png").default}
          ></img>
          <p>React</p>
          {/* <img
            alt="node image"
            id="node-image"
            src={require("./nodejs.png").default}
          ></img>
          <p>Node.js</p> */}
      </div>
          </div>
      </div>
      </div>
  );
};

export default About;