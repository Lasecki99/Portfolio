import React from 'react';
import video from "../img/video.mp4";
import { Link } from "react-router-dom"
import Projects from "../components/Projects"


const Home = (props) => {


    const hi = props.isEnglish ? <> <h1>Hi, I'm <span>Marcin Lasecki</span></h1>
        <h2>Junior Front-End Developer</h2></> : <>   <h1>Cześć, jestem <span>Marcin Lasecki</span></h1><h2>Junior Front-End Developer</h2> </>


    const viewPortfolio = props.isEnglish ? <Link to="/projects" component={Projects} >View portfolio</Link> : <Link to="/projects" component={Projects} >Zobacz portfolio</Link>



    return (

        <>
            <div className="background-wrap">

                <video className="video" muted='muted' loop='loop' autoPlay preload='auto' id='video-bg-elem'>
                    <source src={video} type="video/mp4" />
                </video>

                <div className="area" >
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >


            </div>
            <div className="content">



                {hi}
                {viewPortfolio}

            </div>


        </>

    );
}

export default Home;