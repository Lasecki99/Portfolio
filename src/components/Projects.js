import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
    const viewCode = <p>View code</p>;
    const liveDemo = <p>Live demo</p>;
    return (
        <>
            <div className="paper">
                <div className="projects">
                    <p className="title">Projects</p>
                </div>
                <div className="project-wrapper">
                    <div className="example movie">
                        <div className="background-wrapper">
                            <p className="name">The Movie Finder</p>
                            <p className="description">Find your favorite movie and find out more about it! Created in React.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/The-Movie-Finder" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/The-Movie-Finder/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example burger">
                        <div className="background-wrapper">
                            <p className="name">Burger app</p>
                            <p className="description">Add ingredients, build and order your own Burger ! Created in React and Firebase.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/Burger-app" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/Burger-app/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example map">
                        <div className="background-wrapper">
                            <p className="name">Interactive world map</p>}
                            <p className="description">Responsive world map with centering on the smartphone.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/the-world-map" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/the-world-map/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example weather">
                        <div className="background-wrapper">
                            <p className="name">React Weather App</p>
                            <p className="description">It's a simple application showing the weather in your city.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/React-Weather-App" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/React-Weather-App/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example chuck">
                        <div className="background-wrapper">
                            <p className="name">Chuck Norris App</p>
                            <p className="description">Generate a funny joke about Chuck Norris. The project uses the API.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/Chuck-Norris-App/" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/Chuck-Norris-App/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="example portfolio">
                        <div className="background-wrapper">
                            <p className="name">Portfolio</p>
                            <p className="description">View code of my portfolio.</p>
                            <div className="button-wrapper">
                                <div className="text-solo">
                                    <a target="blank" href="https://github.com/Lasecki99/Portfolio" className="view-code solo">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example rock">
                        <div className="background-wrapper">
                            <p className="name">Rock paper scissors</p>
                            <p className="description">It's a classic game using JavaScript.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/Rock-Paper-Scissors" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/Rock-Paper-Scissors/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example website">
                        <div className="background-wrapper">
                            <p className="name">My first homepage</p>
                            <p className="description">It's my first homepage.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/Strona-wizytowka" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/Strona-wizytowka/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example banner">
                        <div className="background-wrapper">
                            <p className="name">Banner</p>
                            <p className="description">a simple banner made in javascript.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/Slider-Banner" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/Slider-Banner/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example slider">
                        <div className="background-wrapper">
                            <p className="name">Scroll Animation</p>
                            <p className="description">Scroll Animation made in JQuery.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/Scroll-Animation" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {viewCode}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/Scroll-Animation/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="example pong">
                        <div className="background-wrapper">
                            <p className="name">Pong Animation</p>
                            <p className="description">Pong game animation with variables in CSS.</p>
                            <div className="button-wrapper">
                                <div className="text">
                                    <a target="blank" href="https://github.com/Lasecki99/PongGame-animation" className="view-code">
                                        <i className="fas fa-code"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                                <div className="code">
                                    <a target="blank" href="https://lasecki99.github.io/PongGame-animation/" className="live-demo">
                                        <i className="fas fa-tv"></i>
                                        {liveDemo}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;