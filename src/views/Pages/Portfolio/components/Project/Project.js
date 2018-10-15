import React from 'react';

import { database, snapshotToArray } from "../../../../../firebaseModule";

import './Project.scss';


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWord: null
    };
    // database.ref("EnglishToDay").push({
    //   word : 'aaaaaaab',
    //   note : 'bbbbbbbb'
    // });
    database.ref("EnglishToDay").on('value', (snapshot) => {
      this.setState({
        newWord: snapshotToArray(snapshot)
      });
    });
  }
  loadNewWord(array){
    if(array && array.length > 0 ) {
      return array.map( (item) => {
        return (
          <li key={item.key}>{item.word}</li>
        )
      });
    } else {
      return '';
    }

  };

  render() {
    return(
      <div>
        <section className="about">
          <section className="home-inner">
            <h1>English For Today</h1>
            <p><input type="text"/></p>
            <p><textarea className=""></textarea></p>
            <p><button>asdads</button></p>
            <p>New word</p>
            <section className='skill-section'>
              <ul className='skills-list'>
                {this.loadNewWord(this.state.newWord)}
              </ul>
            </section>

          </section>
        </section>
      </div>
    )
  }
}

export default Project;
