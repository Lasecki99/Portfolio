import React from 'react';
import video from '../img/video.mp4';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <div className="background-wrap">
        <video
          className="video"
          muted
          loop
          autoPlay
          preload="auto"
          id="video-bg-elem"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="area">
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
        </div>
      </div>
      <div className="content">
        <h1>
          Hi, I'm <span>Marcin Lasecki</span>
        </h1>
        <h2>Junior Front-End Developer</h2>
        <Link to="/projects">View portfolio</Link>
      </div>
    </>
  );
};

export default Home;
