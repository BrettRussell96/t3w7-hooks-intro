import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      message: "Hello World1"
    }
  }

  render(){
    return(
      <div classname="app">
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default App;