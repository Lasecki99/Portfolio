import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import '../styles/App.css';
import Home from './Home'
import About from './About'
import Projects from "./Projects"
import Contact from './Contact'
import english from '../img/english.png'
import poland from '../img/polska.png'

class App extends Component {
   state = {
      isEnglish: true
   }


   handleOpenNavigation = () => {
      const nav = document.querySelector('nav')
      const faBars = document.querySelector("i.fa-bars")
      nav.classList.toggle('active')
      faBars.classList.toggle('active')
   }
   handleCloseNavigation = () => {
      const nav = document.querySelector('nav')
      const faBars = document.querySelector("i.fa-bars")
      faBars.classList.toggle('active')
      nav.classList.toggle('active')
   }
   handlePolishFlag = () => {
      this.setState({
         isEnglish: false
      })
   }
   handleEnglishFlag = () => {
      this.setState({
         isEnglish: true
      })
   }


   render() {

      return (
         <BrowserRouter>
            <>
               <nav>
                  <ul>


                     <NavLink onClick={this.handleCloseNavigation} to="/" exact></NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/Portfolio" exact>{this.state.isEnglish ? "Home" : "Strona główna"}</NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/about">{this.state.isEnglish ? "About" : "O mnie"}</NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/projects">{this.state.isEnglish ? "Projects" : "Projekty"}</NavLink>
                     <NavLink onClick={this.handleCloseNavigation} to="/contact">{this.state.isEnglish ? "Contact" : "Kontakt"}</NavLink>

                     <div className="flex-flag">
                        <img
                           onClick={this.handlePolishFlag} className="polish" src={poland} alt="" />
                        <img
                           onClick={this.handleEnglishFlag} className="english" src={english} alt="" />
                     </div>

                  </ul>

                  <i onClick={this.handleCloseNavigation} className="fas fa-times"></i>
               </nav>

               <i onClick={this.handleOpenNavigation} className="fas fa-bars"></i>

               <section>
                  <Route path="/Portfolio" render={(props) => <Home isEnglish={this.state.isEnglish} />} />
                  <Route path="/" exact render={(props) => <Home isEnglish={this.state.isEnglish} />} />
                  <Route path="/about" render={(props) => <About isEnglish={this.state.isEnglish} />} />
                  <Route path="/projects" render={(props) => <Projects isEnglish={this.state.isEnglish} />} />
                  <Route path="/contact" render={(props) => <Contact isEnglish={this.state.isEnglish} />} />
               </section>
               <footer><p>Marcin Lasecki &copy; 2019</p></footer>

            </>
         </BrowserRouter>

      );
   }
}

export default App;


