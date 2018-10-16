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
            <div className="div__add-new"><input type="text" className="text__word" placeholder="New word" /></div>
            <div className="div__add-new"><textarea className="textarea__note" placeholder="Note"></textarea></div>
            <div className="div__add-new"><button className="button__add">Add word</button></div>
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
