import React from 'react';
import '../styles/About.css';
import html from '../img/html.png';
import css from '../img/css.png';
import js from '../img/js.png';
import react from '../img/react.png';
import sass from '../img/sass.png';
import git from '../img/git.png';
import node from '../img/node.jpg';
import redux from '../img/redux.png';
import firebase from '../img/firebase.png';
import typescript from '../img/typescript.png';

const About: React.FC = () => {
  return (
    <div className="paper">
      <div className="wrapper">
        <div className="about-me">
          <p>About me</p>
        </div>
        <div className="description">
          <p>
            My name is <span>Marcin Lasecki</span>, and I am a{' '}
            <span>junior front-end developer</span> at <span>Pearson IOKI</span>{' '}
            in Poznań.
          </p>
        </div>
      </div>
      <p className="tech">Technologies used in my projects</p>
      <div className="tech-box">
        <span className="up-left"></span>
        <span className="left-up"></span>
        <span className="up-right"></span>
        <span className="right-up"></span>
        <span className="down-left"></span>
        <span className="left-down"></span>
        <span className="down-right"></span>
        <span className="right-down"></span>
        <div className="react">
          <img src={react} alt="" />
          <p>React</p>
        </div>
        <div className="js">
          <img src={js} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="typescript">
          <img src={typescript} alt="" />
          <p>Typescript</p>
        </div>
        <div className="sass">
          <img src={sass} alt="" />
          <p>Sass</p>
        </div>
        <div className="git">
          <img src={git} alt="" />
          <p>Git</p>
        </div>
        <div className="redux">
          <img src={redux} alt="" />
          <p>Redux</p>
        </div>
        <div className="firebase">
          <img src={firebase} alt="" />
          <p>Firebase</p>
        </div>
        <div className="html">
          <img src={html} alt="" />
          <p>Html</p>
        </div>
        <div className="css">
          <img src={css} alt="" />
          <p>Css</p>
        </div>
      </div>
      <p className="tech">Technologies that I am currently learning</p>
      <div className="now-learning">
        <span className="up-left"></span>
        <span className="left-up"></span>
        <span className="up-right"></span>
        <span className="right-up"></span>
        <span className="down-left"></span>
        <span className="left-down"></span>
        <span className="down-right"></span>
        <span className="right-down"></span>
        <div className="php">
          <img src={node} alt="" />
          <p>Node.js</p>
        </div>
      </div>
      <div className="empty"></div>
    </div>
  );
};

export default About;
