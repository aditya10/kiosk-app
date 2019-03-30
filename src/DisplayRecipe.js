import React, { Component } from 'react';
import './App.css';
import './DisplayRecipe.css';
import firebase from './firebase.js';

export class DisplayRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: 'placeholder',
      time: 'placeholder',
      ingredients: 'placeholder',
      procedure: 'placeholder',
      recipeLink: 'placeholder',
      imgLink: 'placeholder'
    }

  }

componentDidMount() {
  console.log(this.props.item);
  const itemsRef = firebase.database().ref('items/'+this.props.item);
  itemsRef.on('value', (snapshot) => {
    let item = snapshot.val();
    this.setState({
        jobName: item.name,
        jobHours: item.hours,
        jobCategory: item.category,
        jobPay: item.pay,
        jobDescription: item.description,
        jobLocation: item.location
      });
    });
  }


  render() {
    return (
      <div className='app'>
        <div className='container'>
          <section className='display-recipe col-md-8 col-sm-12'>
                <div className="recipeName">{this.state.jobName}</div>
                <div className="time">Hours: {this.state.jobHours}</div>
                <div className="time">Pay: {this.state.jobPay}</div>
                <div className="time">Category: {this.state.jobCategory}</div>
                <h2>Description:</h2>
                <div className="ingredients">{this.state.jobDescription}</div>
                <h2>Location:</h2>
                <div className="procedure"><p>{this.state.jobLocation}</p></div>
            <div className="rButton">I want to do this!</div>
          </section>
        </div>
      </div>
    );
  }
}
