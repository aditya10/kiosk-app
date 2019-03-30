/*
(c) Aditya Chinchure, 2018
Developed using ReactJS, Google Firebase
Please use your own firebase account by configuring
it in src/firebase.js

TODO:
- when delete happens, also delete the picture from Storage
- Implement update using a new compnonent
- implement authentication for mult-user support
- enable support for back button in browser
*/

import React, { Component } from "react";
import "./App.css";
import { AddRecipe } from "./AddRecipe";
import { DisplayRecipe } from "./DisplayRecipe";
import "./AddRecipe.css";
import firebase from "./firebase.js";
import BackgroundScreen from "./BackgroundScreen";

class App extends Component {
  constructor() {
    super();
    this.state = {
      addRecipe: false,
      displayRecipe: false,
      recipeID: "",
      items: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseAddRecipe = this.handleCloseAddRecipe.bind(this);
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          recipeName: items[item].recipeName,
          pictureLink: items[item].pictureLink
        });
      }
      this.setState({
        items: newState,
        displayRecipe: false
      });
    });
  }
  handleSelect(itemID) {
    console.log(itemID);
    this.setState({ recipeID: itemID, displayRecipe: true });
  }
  handleClose() {
    this.setState({ recipeID: "", displayRecipe: false });
  }
  handleCloseAddRecipe() {
    this.setState({ addRecipe: false });
  }
  handleAdd() {
    this.setState({ addRecipe: true });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    let disp;
    if (this.state.addRecipe) {
      disp = (
        <div>
          <AddRecipe />
          <button
            className="closeAddButton"
            onClick={this.handleCloseAddRecipe}
          >
            Close
          </button>
        </div>
      );
    } else if (!this.state.addRecipe && !this.state.displayRecipe) {
      disp = (
        // <section className="recipe-bits">
        //   <div className="wrapper">
        //     <ul>
        //       {this.state.items.map(item => {
        //         return (
        //           <li className="col-md-4 col-sm-12">
        //             <div className="recipe-bit">
        //               <tbody className="table">
        //                 <tr>
        //                   <td className="imgHolder" colSpan="2">
        //                     <img alt="" src={item.pictureLink} />
        //                   </td>
        //                 </tr>
        //                 <tr>
        //                   <td className="rName">{item.recipeName}</td>
        //                   <td className="rButton">
        //                     <button onClick={() => this.handleSelect(item.id)}>
        //                       View
        //                     </button>
        //                     <button onClick={() => this.removeItem(item.id)}>
        //                       Remove
        //                     </button>
        //                   </td>
        //                 </tr>
        //               </tbody>
        //             </div>
        //           </li>
        //         );
        //       })}
        //     </ul>
        //     <button className="addButton" onClick={this.handleAdd}>
        //       +
        //     </button>
        //   </div>
        // </section>
        <BackgroundScreen />
      );
    } else if (this.state.displayRecipe) {
      disp = (
        <div>
          <DisplayRecipe item={this.state.recipeID} />
          <button className="closeDisplayButton" onClick={this.handleClose}>
            Close
          </button>
        </div>
      );
    }

    return (
      <BackgroundScreen />
      // <div className="app">
      //   <header>
      //     <div className="header">
      //       <h1>Recipe Book</h1>
      //     </div>
      //   </header>
      //   {disp}
      //   <div className="spacer" />
      // </div>
    );
  }
}

export default App;
