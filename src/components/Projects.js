import React from 'react';
import '../styles/Projects.css'

const Projects = (props) => {
    const description10 = props.isEnglish ? <p className="title">Projects</p> : <p className="title">Projekty</p>
    const description11 = props.isEnglish ? <p className="description">It's a simple application showing the weather in your city.</p> : <p className="description">Prosta aplikacja, która pokazuje pogodę w Twoim mieście.</p>
    const viewCode = props.isEnglish ? <p>View code</p> : <p>Zobacz kod</p>
    const liveDemo = props.isEnglish ? <p>Live demo</p> : <p>Podgląd</p>
    const description12 = props.isEnglish ? <p className="name">React Weather App</p> : <p className="name">React aplikacja pogodowa</p>
    const description13 = props.isEnglish ? <p className="description">View code of my portfolio.</p> : <p className="description">Zobacz kod mojego portfolio.</p>
    const description14 = props.isEnglish ? <p className="name">Rock paper scissors</p> : <p className="name">Kamień papier nożyczki</p>
    const description15 = props.isEnglish ? <p className="description">It's a classic game using JavaScript.</p> : <p className="description">Klasyczna gra zrobiona w JavaScript.</p>
    const description16 = props.isEnglish ? <p className="name">My first homepage</p> : <p className="name">Moja pierwsza strona.</p>
    const description17 = props.isEnglish ? <p className="description">It's my first homepage.</p> : <p className="description">Moja pierwsza strona wizytówka.</p>
    const description18 = props.isEnglish ? <p className="description">a simple banner made in javascript.</p> : <p className="description">Przykładowy banner wykonany w JS.</p>
    const description19 = props.isEnglish ? <p className="name">Scroll Animation</p> : <p className="name">Animacja skrollowania</p>
    const description20 = props.isEnglish ? <p className="description">Scroll Animation made in JQuery.</p> : <p className="description">Animacja skrollowania wykonana w JQuery.</p>
    const description21 = props.isEnglish ? <p className="name">Pong Animation</p> : <p className="name">Animacja gry Pong</p>
    const description22 = props.isEnglish ? <p className="description">Pong game animation with variables in CSS.</p> : <p className="description">Animacja gry pong z wykorzystaniem zmiennych w CSS.</p>

    const description23 = props.isEnglish ? <p className="name">Interactive world map</p> : <p className="name">Interaktywna mapa świata</p>
    const description24 = props.isEnglish ? <p className="description">Responsive world map with centering on the smartphone.</p> : <p className="description">Responsywna mapa świata, z funkcją centrującą na urządzenia mobilne.</p>

    const description25 = props.isEnglish ? <p className="name">Burger app</p> : <p className="name">Burgerowa aplikacja</p>
    const description26 = props.isEnglish ? <p className="description">Add ingredients, build and order your own Burger ! Created in React and Firebase.</p> : <p className="description">Dodaj składniki, stwórz i zamów swojego własnego Burgera ! Stworzone w React i Firebase.</p>

    const description27 = props.isEnglish ? <p className="name">Chuck Norris App</p> : <p className="name">Żarty o Chucku</p>

    const description28 = props.isEnglish ? <p className="description">Generate a funny joke about Chuck Norris. The project uses the API.</p> : <p className="description">Wygeneruj śmieszny żart o Chucku Norrise. Aplikacja korzysta z API.</p>

    const description29 = props.isEnglish ? <p className="name">The Movie Finder</p> : <p className="name">Wyszukiwarka filmów</p>

    const description30 = props.isEnglish ? <p className="description">
        Find your favorite movie and find out more about it! Created in React.</p> : <p className="description">Znajdź swój ulubiony film i dowiedz się o nim więcej! Stworzone w React.</p>


    return (
        <>

            <div className="paper">

                <div className="projects">
                    {description10}
                </div>



                <div className="project-wrapper">

                    <div className="example movie">
                        <div className="background-wrapper">
                            {description29}
                            {description30}
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
                            {description25}
                            {description26}
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
                            {description23}
                            {description24}
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
                            {description12}
                            {description11}
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
                            {description27}
                            {description28}
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
                            {description13}
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
                            {description14}
                            {description15}
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
                            {description16}
                            {description17}
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
                            {description18}
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
                            {description19}
                            {description20}
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
                            {description21}
                            {description22}
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