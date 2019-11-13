import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import '../styles/App.css';
import Home from './Home'
import About from './About'
import Projects from "./Projects"
import Contact from './Contact'

class App extends Component {
   handleOpenNavigation = () => {
      document.querySelector('nav').classList.toggle('active');
      document.querySelector("i.fa-bars").classList.toggle('active');
   }

   handleCloseNavigation = () => {
      document.querySelector('nav').classList.toggle('active');
      document.querySelector("i.fa-bars").classList.toggle('active');
   }

   render() {
      return (
         <BrowserRouter>
            <>
               <nav>
                  <ul>
                     <NavLink onClick={this.handleCloseNavigation} to="/" exact></NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/Portfolio" exact>Home</NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/about">About</NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/projects">Projects</NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/contact">Contact</NavLink>
                  </ul>
                  <i onClick={this.handleCloseNavigation} className="fas fa-times"></i>
               </nav>
               <i onClick={this.handleOpenNavigation} className="fas fa-bars"></i>
               <section>
                  <Route path="/Portfolio" component={Home} />
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
               </section>
               <footer><p>Marcin Lasecki &copy; 2019</p></footer>
            </>
         </BrowserRouter>
      );
   }
}

export default App;


