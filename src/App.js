import React, { Component } from 'react';
import './App.css';
import { AddRecipe } from './AddRecipe';
import { DisplayRecipe } from './DisplayRecipe';
import './AddRecipe.css';
import firebase from './firebase.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      addRecipe: false,
      displayRecipe: false,
      recipeID: '',
      items: []
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseAddRecipe = this.handleCloseAddRecipe.bind(this);
  }
  componentDidMount() {
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
          id: item,
          name: items[item].name,
          category: items[item].category
        });
      }
      this.setState({
        items: newState,
        displayRecipe: false
      });
    });
  }
  handleSelect(itemID){
    this.setState({recipeID: itemID, displayRecipe: true});
  }
  handleClose(){
    this.setState({recipeID: '', displayRecipe: false});
  }
  handleCloseAddRecipe(){
    this.setState({addRecipe: false});
  }
  handleAdd(){
    this.setState({addRecipe: true});
  }
  render() {
    let disp;
    if (!this.state.addRecipe && !this.state.displayRecipe){
      disp = (
        <section className="recipe-bits">
          <div className="statusMap"><img src="./"/></div>
          <div className="title">Here are some jobs you may like</div>
        <div className='wrapper'>
          <ul>
            {this.state.items.map((item) => {
              return (
                <li className='col-md-12 col-sm-12'>
                  <div className="recipe-bit">
                  <tbody className='table'>
                    <tr className='rRow'>
                      <td className='rName'>{item.name+" ("+item.category+")"}</td>
                      <td className='rButton'><button onClick={() => this.handleSelect(item.id)}>View</button></td>
                    </tr>
                  </tbody>
                </div>
                </li>
              )
            })}
        </ul>
        </div>
      </section>
      );
    }
    else if (this.state.displayRecipe){
      disp = (
        <div>
          <DisplayRecipe item={this.state.recipeID}/>
          <button className="closeDisplayButton" onClick={this.handleClose}>Close</button>
        </div>
      );
    }

    return (
      <div className='app'>
        {disp}
      </div>
    );
  }
}

export default App;
