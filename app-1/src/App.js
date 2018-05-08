import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      userInput:''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState  ({
      userInput: e.target.value
    })
    console.log(this.state.userInput);
  }

  
  render() {
    return (
      <div className="App">
      <input onChange={this.handleUserInput}></input>
      <p  > {this.state.userInput}</p>

      </div>
    );
  }
}

export default App;
