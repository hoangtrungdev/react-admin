import React from 'react';
import {NavLink} from 'react-router-dom';

// Font Awseome component
const Fa = (props) => {
  return <i className={`fa ${props.iconClass}`} aria-hidden="true"></i>
};

// Home component

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      creativeType: "home-dev",
      designBttn: 'home-bttn',
      devBttn: "home-bttn home-bttn-active-dev",
      photoBttn: "home-bttn",
    }
    this.updateCreative = this.updateCreative.bind(this);
    this.stripState = this.stripState.bind(this);
    this.homeClick = this.homeClick.bind(this);
  }

  stripState() {
    this.setState({
      designBttn: 'home-bttn ',
      devBttn: "home-bttn",
      photoBttn: "home-bttn"
    })
  }

  updateCreative(type, stateToUpdate, actButton) {
    console.log(type);
    this.stripState();
    this.setState({
      creativeType: type,
      [stateToUpdate]: `home-bttn home-bttn-active-${actButton}`,
    })
  }

  homeClick() {
    if (this.state.creativeType = 'home-design') {
      this.updateCreative("home-dev", "devBttn", "dev");
    } else if (this.state.creativeType = 'home-dev') {
      this.updateCreative("home-photo", "photoBttn", "photo");
    } else {
      this.updateCreative("home-design", "designBttn", "design");
    }
  }

  render() {
    return (
      <div>
        <section className="home-display" >
          <section className={`home-img ${this.state.creativeType}`}>

            <section className={`home-ctrl`}>

              <section  className={this.state.designBttn} onClick={
                () => {
                  this.updateCreative("home-design", "designBttn", "design");
                }
              }> Doanh nhân thành đạt </section>
              <section  className={this.state.devBttn} onClick={
                () => {
                  this.updateCreative("home-dev", "devBttn", "dev");
                }
              }> Kiếm 100 tỷ 1 tháng </section>
              <section  className={this.state.photoBttn} onClick={
                () => {
                  this.updateCreative("home-photo", "photoBttn", "photo");
                }
              }> Vòng xóa nợ </section>

            </section>

          </section>

        </section>
        <section className="about">
          <section className="home-inner">
            <h1>About Me</h1>
            <p>
              Hello! I’m Christopher Lindor a developer and designer who loves photography. I build and design responsive web applications and websites. <NavLink to="/work">See My work</NavLink>
            </p>


            <section className='skill-section'>
              <p>Things I'm great at</p>
              <ul className='skills-list'>
                <li>Frontend Web Development</li>
                <li>UI &amp; UX Design</li>
              </ul>
            </section>
            <section className="skill-section">
              <p>Things I use to get the job done:</p>
              <ul className='skills-list'>
                <li>HTML5 & CSS3</li>
                <li>JavaScript ES6</li>
                <li>SASS</li>
                <li>React JS</li>
                <li>Webpack</li>
                <li>Gulp</li>
                <li>Bootstrap</li>
                <li>Git</li>
              </ul>
            </section>

          </section>
        </section>

      </div>
    )
  }
}

export default Home;
