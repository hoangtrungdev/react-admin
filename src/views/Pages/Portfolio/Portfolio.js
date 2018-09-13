import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './Portfolio.scss';
import Home from "./components/Home";
import Project from "./components/Project";

let Bars = <i className="fa fa-bars" aria-hidden="true"></i>;

let CloseIcon = <i className="fa fa-times" aria-hidden="true"></i>;

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};
class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.navClick = this.navClick.bind(this)
    this.state = {
      buttonStyle: Bars,
      navVis: "nav-hidden",
      logoStyle: "logo",
      buttonColor: "nav-open"
    }
  }
  navClick(){
    if (this.state.buttonStyle === Bars ) {
      this.setState({
        buttonStyle: CloseIcon,
        navVis: "light-style" ,
        logoStyle: "logo-hidden",
        buttonColor: "nav-open "
      })
    } else {
      this.setState({
        buttonStyle: Bars,
        navVis: "nav-hidden",
        logoStyle: "",
        buttonColor: "nav-open"
      })
    }
  }

  render() {
    return (
      <div className="site-root">
        <header>
          <section className={`logo ${this.state.logoStyle}`}>
            <NavLink to="/portfolio">Trần Hoàng Trung</NavLink>
          </section>
          <div className={` main-nav-button ${this.state.buttonColor} `} onClick={this.navClick}>
            {this.state.buttonStyle}
          </div>
        </header>
        <nav className={`nav-links ${this.state.navVis}`}>
          <ul>
            <li>
              <NavLink to="/portfolio/home" onClick={this.navClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/project" onClick={this.navClick}>Project</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" onClick={this.navClick}>Dashboard</NavLink>
            </li>
          </ul>
          <section className="social-section">
            <a href="https://www.instagram.com/ftm_chris/" target="_blank" ><Fa iconClass="fa-instagram social-button" /></a>
            <a href="https://github.com/chrislindor" target="_blank" ><Fa iconClass="fa-github social-button" /></a>
            <a href="https://www.linkedin.com/in/chrislindor" target="_blank" ><Fa iconClass="fa-linkedin social-button" /></a>
            <section className="email">
              <a href="#">hoangtrungdev@gmail.com</a>
            </section>

          </section>

        </nav>

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <Switch>
            <Route exact path="/portfolio/home" name="Home" component={Home}/>
            <Route exact path="/portfolio/project" name="Project" component={Project}/>
            <Redirect from="/portfolio" to="/portfolio/home"/>
          </Switch>
        </ReactCSSTransitionGroup>
        <footer>
          <p className="contact-info">
            <a href="mailto:chrislindor@gmail.com">hoangtrungdev@gmail.com</a>
          </p>
          <p className="social-icons">
            <a href="https://www.instagram.com/ftm_chris/" target="_blank" ><Fa iconClass="fa-instagram" /></a>
            <a href="https://github.com/chrislindor" target="_blank" ><Fa iconClass="fa-github" /></a>
            <a href="https://www.linkedin.com/in/chrislindor" target="_blank" ><Fa iconClass="fa-linkedin" /></a>

          </p>
          <p>
            &copy; Hoàng Trung 2018
          </p>
        </footer>
      </div>
    )
  }
}

export default Portfolio;
