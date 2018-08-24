import React, {Component} from 'react';
import {NavLink, Switch, Route, Redirect} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './CoverLetter.scss';
import Home from "./components/Home";

let Bars = <i className="fa fa-bars" aria-hidden="true"></i>;

let CloseIcon = <i className="fa fa-times" aria-hidden="true"></i>;

const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};
class CoverLetter extends Component {
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
            <NavLink to="/">Nguyễn Văn Khỏe</NavLink>
          </section>
          <div className={` main-nav-button ${this.state.buttonColor} `} onClick={this.navClick}>
            {this.state.buttonStyle}
          </div>
        </header>
        <nav className={`nav-links ${this.state.navVis}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={this.navClick}>Kiếm 1000 tỷ</NavLink>
            </li>
            <li>
              <NavLink to="/work" onClick={this.navClick}>Doanh nhân thành đạt</NavLink>
            </li>
            <li>
              <NavLink to="/photo" onClick={this.navClick}> Photography</NavLink>
            </li>
          </ul>
          <section className="social-section">
            <a href="https://www.instagram.com/ftm_chris/" target="_blank" ><Fa iconClass="fa-instagram social-button" /></a>
            <a href="https://github.com/chrislindor" target="_blank" ><Fa iconClass="fa-github social-button" /></a>
            <a href="https://www.linkedin.com/in/chrislindor" target="_blank" ><Fa iconClass="fa-linkedin social-button" /></a>
            <section className="email">
              <a href="#">khoecu@gmail.com</a>
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
            <Route path="/cover-letter" name="Home" component={Home}/>
            <Redirect from="/cover-letter" to="/cover-letter/home"/>
          </Switch>
        </ReactCSSTransitionGroup>
        <footer>
          <p className="contact-info">
            <a href="mailto:chrislindor@gmail.com">khoecu@gmail.com</a>
          </p>
          <p className="social-icons">
            <a href="https://www.instagram.com/ftm_chris/" target="_blank" ><Fa iconClass="fa-instagram" /></a>
            <a href="https://github.com/chrislindor" target="_blank" ><Fa iconClass="fa-github" /></a>
            <a href="https://www.linkedin.com/in/chrislindor" target="_blank" ><Fa iconClass="fa-linkedin" /></a>

          </p>
          <p>
            &copy; Khoe Cu 2018
          </p>
        </footer>
      </div>
    )
  }
}

export default CoverLetter;
