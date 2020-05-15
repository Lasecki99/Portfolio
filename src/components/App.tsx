import React, { useRef } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App: React.FC = () => {
  const nav = useRef<HTMLElement>(null);
  const openNavbarIcon = useRef<HTMLElement>(null);

  const handleOpenNavigation = () => {
    if (nav && nav.current && openNavbarIcon && openNavbarIcon.current) {
      nav.current.classList.toggle('active');
      openNavbarIcon.current.classList.toggle('active');
    }
  };

  const handleCloseNavigation = () => {
    if (nav && nav.current && openNavbarIcon && openNavbarIcon.current) {
      nav.current.classList.toggle('active');
      openNavbarIcon.current.classList.toggle('active');
    }
  };

  return (
    <BrowserRouter>
      <>
        <nav ref={nav}>
          <ul>
            <NavLink onClick={handleCloseNavigation} to="/" exact></NavLink>
            <NavLink onClick={handleCloseNavigation} to="/Portfolio" exact>
              Home
            </NavLink>
            <NavLink onClick={handleCloseNavigation} to="/about">
              About
            </NavLink>
            <NavLink onClick={handleCloseNavigation} to="/projects">
              Projects
            </NavLink>
            <NavLink onClick={handleCloseNavigation} to="/contact">
              Contact
            </NavLink>
          </ul>
          <i onClick={handleCloseNavigation} className="fas fa-times"></i>
        </nav>
        <i
          onClick={handleOpenNavigation}
          ref={openNavbarIcon}
          className="fas fa-bars"
        ></i>
        <section>
          <Route path="/Portfolio" component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </section>
        <footer>
          <p>Marcin Lasecki &copy; 2020</p>
        </footer>
      </>
    </BrowserRouter>
  );
};

export default App;
