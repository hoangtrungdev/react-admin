import React from 'react';

import { database, snapshotToArray } from "_src/firebaseModule";

import './PageProduct.scss';


class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayProduct: []
    };
  }

  componentDidMount() {
    database.ref("products").on('value', (snapshot) => {
      this.setState({
        arrayProduct: snapshotToArray(snapshot)
      });
    });
  }

  componentWillUnmount() {
    database.ref("products").off('value');
  }

  loadArrayProduct(array){
    return array.map( (item) => {
      return (
        <li key={item.key}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </li>
      )
    });
  };

  render() {
    return(
      <div>
        <section className="about">
          <section className="home-inner">
            <section className='skill-section'>
              <ul className='skills-list'>
                {this.loadArrayProduct(this.state.arrayProduct)}
              </ul>
            </section>
          </section>
        </section>
      </div>
    )
  }
}

export default Project;
