import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super()
  this.state={
    elementArr:['Apple','Banana','Cranberry','Strawberry','Pineapple']
  }
}


  render() {
    let foodList = this.state.elementArr.map(((element,index) =>{
      return <h2 key={index}>{ element}</h2>
    }))
    return (
      <div className="App">
      {foodList}

      </div>
    );
  }
}

export default App;
