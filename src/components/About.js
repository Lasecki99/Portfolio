import React from 'react';
import "../styles/About.css"
import html from "../img/html.png"
import css from "../img/css.png"
import js from "../img/js.png"
import react from "../img/react.png"
import sass from '../img/sass.png'
import jquery from '../img/jquery.png'
import git from '../img/git.png'
import router from '../img/router.png'
import node from '../img/node.png'
import php from "../img/php.png"
import java from "../img/java.png"
import redux from "../img/redux.png"
import firebase from '../img/firebase.png'

const About = (props) => {
    const description = props.isEnglish ? <p>My name is <span>Marcin Lasecki</span>, and I am a <span>junior front-end developer.</span> I am looking for my first job in which I could <span>improve</span> my skills and <span>learn</span> new programming technologies. </p> : <p>Nazywam się <span>Marcin Lasecki </span>i jestem <span>junior front-end developerem.</span> Poszukuję swojej pierwszej pracy, w której mógłbym <span>rozwijać</span> swoje umiejętności i <span>uczyć się</span> nowych technologii programistycznych.</p>

    const description2 = props.isEnglish ? <p className="tech">Technologies used in my projects </p> : <p className="tech">Technologie, których używam w moich projektach </p>

    const description3 = props.isEnglish ? <p className="tech">Technologies that I am currently learning</p> : <p className="tech">Technologie, których obecnie się uczę</p>

    const description4 = props.isEnglish ? <p>About me</p> : <p>O mnie</p>
    return (
        <div className="paper">

            <div className="wrapper">
                <div className="about-me">
                    {description4}
                </div>

                <div className="description">
                    {description}
                </div>
            </div>


            {description2}
            <div className="tech-box">
                <span className="up-left"></span>
                <span className="left-up"></span>
                <span className="up-right"></span>
                <span className="right-up"></span>
                <span className="down-left"></span>
                <span className="left-down"></span>
                <span className="down-right"></span>
                <span className="right-down"></span>



                <div className="html">
                    <img src={html} alt="" />
                    <p>Html</p>
                </div>
                <div className="css">
                    <img src={css} alt="" />
                    <p>Css</p>
                </div>
                <div className="js">
                    <img src={js} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="react">
                    <img src={react} alt="" />
                    <p>React</p>

                </div>
                <div className="sass">
                    <img src={sass} alt="" />
                    <p>Sass</p>

                </div>
                <div className="jquery">
                    <img src={jquery} alt="" />
                    <p>JQuery</p>
                </div>
                <div className="git">
                    <img src={git} alt="" />
                    <p>Git</p>
                </div>
                <div className="react-router">
                    <img src={router} alt="" />
                    <p>React Router</p>
                </div>
                <div className="redux">
                    <img src={redux} alt="" />
                    <p>Redux</p>
                </div>
                <div className="firebase">
                    <img src={firebase} alt="" />
                    <p>Firebase</p>
                </div>





            </div>
            {description3}
            <div className="now-learning">

                <span className="up-left"></span>
                <span className="left-up"></span>
                <span className="up-right"></span>
                <span className="right-up"></span>
                <span className="down-left"></span>
                <span className="left-down"></span>
                <span className="down-right"></span>
                <span className="right-down"></span>


                <div className="node" >
                    <img src={node} alt="" />
                    <p>NodeJS</p>
                </div>
                <div className="php">
                    <img src={php} alt="" />
                    <p>PHP</p>
                </div>
                <div className="java">
                    <img src={java} alt="" />
                    <p>Java</p>
                </div>

            </div>


            <div className="empty"></div>


        </div>
    );
}

export default About;