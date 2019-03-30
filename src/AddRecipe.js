import React, { Component } from 'react';
import './App.css';
import './AddRecipe.css';
import firebase from './firebase.js';

export class AddRecipe extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      hours: '',
      category: '',
      pay: '',
      description: '',
      location: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageSelect = this.handleImageSelect.bind(this);
    this.uploadEverything = this.uploadEverything.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleImageSelect(e){
      console.log("handle image select");
      this.setState({localImg: e.target.files[0]})
      console.log("handle image select dd"+this.state.localImg);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Event occurred');
    console.log("Submitting image with address "+this.state.localImg);
    if(this.state.recipeName === ''){
      alert("Error: requires name");
      return
    };
    if(this.state.localImg === ''){
      this.uploadEverything();
      return
    }
  }

  uploadEverything(){
    const itemsRef = firebase.database().ref('items');
    const item = {
      name: this.state.name,
      hours: this.state.hours,
      category: this.state.category,
      pay: this.state.pay,
      description: this.state.description,
      location: this.state.location
    };
    itemsRef.push(item);
    this.setState({
      name: '',
      hours: '',
      category: '',
      pay: '',
      description: '',
      location: ''
    });
  }

  render() {
    return (
      <div className='app'>
        <div className='container'>
          <section className='add-recipe col-md-8 col-sm-12'>
              <form onSubmit={this.handleSubmit}>
                <input className="smallInput" type="text" name="recipeName" placeholder="Name of Recipe" onChange={this.handleChange} value={this.state.recipeName}/>
                <input className="smallInput" type="text" name="time" placeholder="Time required to prepare" onChange={this.handleChange} value={this.state.time}/>
                <textarea className="mediumInput" type="text" name="ingredients" placeholder="List ingredients here" onChange={this.handleChange} value={this.state.ingredients}/>
                <textarea className="largeInput" type="text" name="procedure" placeholder="Enter procedure here" onChange={this.handleChange} value={this.state.procedure}/>
                <input className="smallInput" type="text" name="recipeLink" placeholder="Additional link to recipe" onChange={this.handleChange} value={this.state.recipeLink}/>
                <input className="smallInput" type="text" name="picture" accept="image/*" onChange={this.handleImageSelect} />
                <button><span>Add Item</span></button>
              </form>
          </section>
        </div>
      </div>
    );
  }
}
