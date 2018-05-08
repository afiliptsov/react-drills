import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      unfilteredData:['sushi','banana','apple','pineapple'],
      filter:''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e){
    console.log(this.state.filter)
    this.setState({
      filter:e.target.value
    })
  }



  render() {
    let elementList = this.state.unfilteredData.filter((element,index)=>{
      return element.includes(this.state.filter);
    }).map((element,index)=>{
      return <h2 key = {index}>{element}</h2>
    })
    return (
      <div className="App">
      <input onChange={this.onChangeHandler}>
      </input>
        {elementList}
      </div>
    );
  }
}

export default App;
